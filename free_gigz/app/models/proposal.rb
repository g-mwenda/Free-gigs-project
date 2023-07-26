class Proposal < ApplicationRecord
  belongs_to :freelancer
  belongs_to :job_listing
end
