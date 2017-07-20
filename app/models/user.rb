class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include ActiveModel::Serialization
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  acts_as_token_authenticatable
  mount_uploader :avatar, AvatarUploader

  has_many :listings
  has_many :given_ratings, class_name: "Rating", foreign_key: :author_id
  has_many :received_ratings, class_name: "Rating", foreign_key: :contractor_id
  has_many :created_conversations, class_name: "Conversation", foreign_key: :from_id
  has_many :received_conversations, class_name: "Conversation", foreign_key: :to_id
  has_many :sent_messages, class_name: "Message", foreign_key: :from_id
  has_many :received_messages, class_name: "Message", foreign_key: :to_id


  def contractors
    User.where("role = ?", "contractor")
  end

end
