class CompletedProject < ApplicationRecord
  belongs_to :freelancer
  belongs_to :client
end
