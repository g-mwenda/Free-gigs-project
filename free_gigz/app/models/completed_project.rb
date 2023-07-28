class CompletedProject < ApplicationRecord
  belongs_to :freelancer
  belongs_to :client
  has_one :review_rating
  belongs_to :job_listing
end
