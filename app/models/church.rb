class Church < ApplicationRecord
  has_many :listings
  has_many :associated_contractors, class_name: "User"
end
