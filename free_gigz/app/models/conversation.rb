class Conversation < ApplicationRecord
  belongs_to :freelancer
  belongs_to :client
  has_many :messages, dependent: :destroy
end
