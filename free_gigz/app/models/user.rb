class User < ApplicationRecord
     has_secure_password
     enum role: { freelancer: 0, client: 1 }
     validates :email, presence: true, uniqueness: true
     validates :username, presence: true
     validates :password, length: {minimum: 8}
end
