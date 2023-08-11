class Proposal < ApplicationRecord
  belongs_to :freelancer
  belongs_to :job_listing

  validates :freelancer_id, :job_listing_id, :project_details, :cost_estimate, :timeline, presence: true
end
