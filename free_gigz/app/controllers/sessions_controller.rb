class SessionsController < ApplicationController

    skip_before_action :authorize, only: :create
  
    # POST /login
    def create
      username = params[:username]
      password = params[:password]

      user = User.find_by(username: params[:username])

      if user && user.authenticate(password)
        session[:user_id] = user.id
        puts "Session User ID set: #{session[:user_id]}"
        render json: user, status: :created
      else
        render json: { errors: ['Invalid username or password'] }, status: :unauthorized
      end
    end
  
    # DELETE /logout
    def destroy
      session.delete :user_id
      render json: {success: "Logout success"}
    end
  end
  