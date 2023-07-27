class ReviewRating < ApplicationRecord
  belongs_to :client
  belongs_to :freelancer
  belongs_to :completed_project
end
