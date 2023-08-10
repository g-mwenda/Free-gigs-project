class ConversationsController < ApplicationController
     skip_before_action :authorize
   
     # GET /conversations
     def index
      
      #  @conversations = Conversation.all
       @conversations = Conversation.all
       render json: @conversations
     end
   
     # GET /conversations/1
     def show
       render json: @conversation
     end
   
     # POST /conversations
     def create
       @conversation = Conversation.new(conversation_params)
       @conversation.update(users: params[:users])
       if @conversation.save
         render json: @conversation, status: :created, location: @conversation
       else
         render json: { errors: [@conversation.errors.full_messages] }, status: :unprocessable_entity
       end
     end
   
     # PATCH/PUT /conversations/1
     def update
       if @conversation.users.include? @user.username
         if @conversation.update(conversation_params)
           render json: @conversation
         else
           render json: { errors: [@conversation.errors.full_messages] }, status: :unprocessable_entity
         end
       else
         render_not_authorized_response
       end
     end
   
     # DELETE /conversations/1
     def destroy
       if @conversation.users.include? @user.username
         @conversation.destroy
         head :no_content
       else
         render_not_authorized_response
       end
     end
   
     private
   
     def set_user
       @user = User.find(session[:user_id])
     end
   
     # Use callbacks to share common setup or constraints between actions.
     def set_conversation
       @conversation = Conversation.find(params[:id])
     end
   
     # Only allow a list of trusted parameters through.
     def conversation_params
       params.require(:conversation).permit(:users)
     end
   
     def render_not_authorized_response
       render json: { errors: 'You cannot make a change to a conversation that does not belong to your account' },
              status: :unauthorized
     end
   end
