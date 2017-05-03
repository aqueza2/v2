# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = ["Digital Marketing", "Law Practice", "Construction", "Graphic Design", "Web Desing","Medical", "Dentistry", "Plastic Surgery", "Music Production", "Filming Production"]

10.times do

  church = Church.create(street_address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip_code: Faker::Address.zip_code, phone_number: Faker::PhoneNumber.cell_phone)
  user = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, city: Faker::Address.city, state: Faker::Address.state, zip_code: Faker::Address.zip_code, church_id: church.id, role: "viewer")
  user.password = "password"
  user.password_confirmation = "password"
  user.save


  10.times do

    contractor = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name,
      email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, category: categories.sample,
      city: Faker::Address.city, state: Faker::Address.state, zip_code: Faker::Address.zip_code,
      status: "active", church_id: church.id, role: "contractor"
    )
    contractor.password = "password"
    contractor.password_confirmation = "password"
    contractor.save
    p contractor

    listing = Listing.create(title: categories.sample, location: "USA", description: Faker::Commerce.product_name, verified: true, church_id: church.id, user_id: contractor.id)
    conversation = Conversation.create( to_id: contractor.id, from_id: user.id)
    message = conversation.messages.create(text: Faker::Lorem.sentence(3, false, 4), to_id: contractor.id, from_id: user.id)

    5.times do
      rating = Rating.create(stars: rand(1..5), description: "Good job! #{contractor.first_name}", author_id: User.order("RANDOM()").first.id, contractor_id: contractor.id)
    end

  end

end
