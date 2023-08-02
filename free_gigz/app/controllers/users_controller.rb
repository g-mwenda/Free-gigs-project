# class UsersController < ApplicationController
#       # New action to render the form for creating a new user
#   def new
#     @user = User.new
#   end

#   # Create action to save the new user to the database
#   def create
#     @user = User.new(user_params)
#     if @user.save
#       redirect_to @user, notice: 'User was successfully created.'
#     else
#       render :new
#     end
#   end

#     # Index action to list all users
#     def index
#         @users = User.all
#       end
    
#       # Show action to display a specific user
#       def show
#         @user = User.find(params[:id])
#       end

#       # Edit action to render the form for updating a user
#   def edit
#     @user = User.find(params[:id])
#   end

#   # Update action to save the updated user to the database
#   def update
#     @user = User.find(params[:id])
#     if @user.update(user_params)
#       redirect_to @user, notice: 'User was successfully updated.'
#     else
#       render :edit
#     end
#   end

#   # Destroy action to delete a user from the database
#   def destroy
#     @user = User.find(params[:id])
#     @user.destroy
#     redirect_to users_url, notice: 'User was successfully deleted.'
#   end

#   # Private method to permit the required parameters for creating a user
#   private

#   def user_params
#     params.permit(:username, :password, :email, :role)
#   end
# end







class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index,:create,:current_user ]
  ###get current logged  in user
def current_user
  puts "Session User ID: #{session[:user_id]}"
  user = User.find_by(id: session[:user_id])


  if user
    render json: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      is_admin: user.is_admin,
    }
  else
    render json: { error: "Not logged in" }, status: :not_found
  end
end


    # New action to render the form for creating a new user
    def new
      @user = User.new
    end
  
    # Create action to save the new user to the database !! WORKS,but no role
    def create
      @user = User.new(user_params)
      if @user.save
        UserMailer.with(user: @user).welcome_email.deliver_later
        # redirect_to @user, notice: 'User was successfully created.'
        render json: {success: "User created succesfully"}, status: :created
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        # render :new
      end
    end
  
    # Index action to list all users !! WORKS
    def index
      users = User.all
      render json: users
    end
      
    # Show action to display a specific user !! WORKS
    def show
      user = User.find(params[:id])
      render json: user
    end
  
    # Edit action to render the form for updating a user
    def edit
      user = User.find(params[:id])
      render json: user
    end
  
    # Update action to save the updated user to the database !! WORKS
    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        redirect_to @user, notice: 'User was successfully updated.'
      else
        render :edit
      end
    end
  
    # Destroy action to delete a user from the database !! WORKS
    def destroy
      @user = User.find(params[:id])
      @user.destroy
      redirect_to users_url, notice: 'User was successfully deleted.'
    end
  
    # Private method to permit the required parameters for creating a user
    private
  
    def user_params
      params.permit(:username, :password, :email, :role)
    end
  end
  