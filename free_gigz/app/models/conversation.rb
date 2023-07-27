class Conversation < ApplicationRecord
  belongs_to :freelancer
  belongs_to :client
  belongs_to :last_message
end
