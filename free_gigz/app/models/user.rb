class User < ApplicationRecord
     has_secure_password
     enum role: { freelancer: 0, client: 1 }
end
