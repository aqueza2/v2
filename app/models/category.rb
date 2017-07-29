class Category < ApplicationRecord
  has_many :contractor_categories
  has_many :contractors, through: :contractor_categories
end
