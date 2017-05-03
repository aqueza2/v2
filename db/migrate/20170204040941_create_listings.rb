class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
    	t.string :title
    	t.string :location, index: true
    	t.string :description
    	t.boolean :verified
    	t.integer :church_id
    	t.integer :contact_id

    	t.timestamps null: false
	end  
  end
end
