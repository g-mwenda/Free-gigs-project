class ApplicationController < ActionController::API
     include ActionController::Cookies
     
     before_action :authorize
  # config/application.rb
module FreeGigs
   class Application < Rails::Application
     config.load_defaults 6.1
 
     # This is set in apps generated with the --api flag, and removes session/cookie middleware
     config.api_only = true
 
     # ▾ Must add these lines! ▾
     # Adding back cookies and session middleware
     config.middleware.use ActionDispatch::Cookies
     config.middleware.use ActionDispatch::Session::CookieStore
 
     # Use SameSite=Strict for all cookies to help protect against
     config.action_dispatch.cookies_same_site_protection = :strict
  end
end
     
     def authorize
        @current_user=User.find_by(id: session[:user_id])
        if !@current_user
           render json: {"error": "not authorized"}
        end
     
     end
# changes Tom// FAILED
   #   private

   #   def current_client_id
   #     current_user.client.id if current_user.client
   #   end
  end
   