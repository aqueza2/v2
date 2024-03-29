class Message < ApplicationRecord
  belongs_to :sender, class_name: "User", foreign_key: :from_id
  belongs_to :recipient, class_name: "User", foreign_key: :to_id
  belongs_to :conversation
end
