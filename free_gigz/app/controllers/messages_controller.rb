class MessagesController < ApplicationController
    # List all messages for a conversation
    def index
      conversation = Conversation.find(params[:conversation_id])
      messages = conversation.messages
      render json: messages
    end
  
    # Show a message
    def show
      message = Message.find(params[:id])
      render json: message
    end
  
    # Create a new message
    def create
      message = Message.new(message_params)
      if message.save
        render json: message, status: :created
      else
        render json: message.errors, status: :unprocessable_entity
      end
    end
  
    # Edit a message
    def update
      message = Message.find(params[:id])
      if message.update(message_params)
        render json: message, status: :ok
      else
        render json: message.errors, status: :unprocessable_entity
      end
    end
  
    # Delete a message
    def destroy
      message = Message.find(params[:id])
      message.destroy
      head :no_content
    end
  
    private
  
    def message_params
      params.require(:message).permit(:conversation_id, :client_id, :freelancer_id, :content)
    end
  end
  