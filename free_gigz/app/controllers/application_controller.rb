class ApplicationController < ActionController::API
     include ActionController::Cookies
     
     before_action :authorize
  
     
     def authorize
        @current_user=User.find_by(id: session[:user_id])
        if !@current_user
           render json: {"error": "not authorized"}
        end
     
     end
  end
   