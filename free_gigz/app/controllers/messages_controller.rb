class MessagesController < ApplicationController
     skip_before_action :authorize
     # GET /messages
     def index
       @messages = Message.all
   
       render json: @messages
     end
   
     # GET /messages/1
     def show
       render json: @message
     end
   
     # POST /messages
     def create
       @message = Message.new(message_params)
   
       if @message.save
         render json: @message, status: :created, location: @message
       else
         render json: @message.errors, status: :unprocessable_entity
       end
     end
   
     # PATCH/PUT /messages/1
     def update
       if @message.update(message_params)
         render json: @message
       else
         render json: @message.errors, status: :unprocessable_entity
       end
     end
   
     # DELETE /messages/1
     def destroy
       if @user.username == @message.sender
         @message.destroy
         head :no_content
       else
         render_not_authorized_response
       end
     end
   
     private
   
     # Use callbacks to share common setup or constraints between actions.
     def set_user
       @user = User.find(session[:user_id])
     end
   
     def set_message
       @message = Message.find(params[:id])
     end
   
     # Only allow a list of trusted parameters through.
     def message_params
       params.require(:message).permit(:body, :sender, :conversation_id)
     end
   
     def render_not_authorized_response
       render json: { errors: 'You cannot make a change to a message that does not belong to your account' },
              status: :unauthorized
     end
   end