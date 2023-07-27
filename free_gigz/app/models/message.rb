class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :client
  belongs_to :freelancer
end
