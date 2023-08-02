class Client < ApplicationRecord
  # belongs_to :client
  has_many :job_listings

  belongs_to :user

  validates :company_name, presence: true, uniqueness: true
  validates :company_info, presence: true, uniqueness: true

  # Validate that the profile_picture is a valid URL
  validates :profile_picture, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp }

  # If you want to allow multiple clients with the same profile_picture, remove the uniqueness validation:
  # validates :profile_picture, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp }
end
