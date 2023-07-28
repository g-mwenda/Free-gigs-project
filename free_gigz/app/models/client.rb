class Client < ApplicationRecord
  belongs_to :user
  validates :company_name, presence: true, uniqueness: true
  validates :company_info, presence: true,uniqueness: true
end
