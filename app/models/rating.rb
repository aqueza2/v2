class Rating < ApplicationRecord
  belongs_to :author, class_name: "User"
  belongs_to :contractor, class_name: "User"
end