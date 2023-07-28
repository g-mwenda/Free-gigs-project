class Freelancer < ApplicationRecord
  belongs_to :user
  validates :name, presence: true, uniqueness: true
  validates :portfolio, presence: true
  validates :skills, presence: true
end
