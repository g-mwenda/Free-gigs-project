class JobListing < ApplicationRecord
  belongs_to :client
  has_many :proposals, dependent: :destroy

end
