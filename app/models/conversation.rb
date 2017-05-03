class Conversation < ApplicationRecord
  belongs_to :conversation_creator, class_name: "User", foreign_key: :from_id
  belongs_to :conversation_recipient, class_name: "User" ,foreign_key: :to_id
  has_many :messages
end
