   
  class PasswordsController < ApplicationController
   ###update password 
    def update_password 
     user = User.find_by(id: session[:user_id])
     if user 
       user.update(password_params)
       UserMailer.with(user: user).password_update_email.deliver_later
       render json: {success: "Password changed successfully"}
     else
       render json: {error: "No user with that email exists"}
     end
   end
   
   def password_params 
     params.permit(:password)
   end    
  end