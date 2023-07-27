class User < ApplicationRecord
    enum role: { freelancer: 0, client: 1 }
end
