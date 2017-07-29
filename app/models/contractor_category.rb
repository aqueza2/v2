class ContractorCategory < ApplicationRecord
  belongs_to :category
  belongs_to :contractor, class_name: "User", foreign_key: :user_id
end
