class UserMailer < ApplicationMailer
     default from: 'j80050023@gmail.com'

     def welcome_email
       @user = params[:user]
       @url  = 'http://example.com/login'
       mail(to: @user.email, subject: 'Welcome to Free-gigz Site')
     end

     def password_update_email 
        @user = params[:user]
        mail(to: @user.email, subject: 'Password change')
     end
end
