class ApplicationController < ActionController::API
     include ActionController::Cookies
     
     before_action :authorize
  
     
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
   