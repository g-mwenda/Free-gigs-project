class ConversationsController < ApplicationController
  # List all conversations
  def index
    conversations = Conversation.all
    render json: conversations
  end

  # Show a conversation
  def show
    conversation = Conversation.find(params[:id])
    if conversation
      render json: conversation
    else
      render json: { error: 'Conversation not found' }, status: :not_found
    end
  end

  # Create a new conversation
  def create
    conversation = Conversation.new(conversation_params)
    if conversation.save
      render json: conversation, status: :created
    else
      render json: conversation.errors, status: :unprocessable_entity
    end
  end

  # Edit a conversation
  def update
    conversation = Conversation.find(params[:id])
    if conversation.update(conversation_params)
      render json: conversation, status: :ok
    else
      render json: conversation.errors, status: :unprocessable_entity
    end
  end

  # Delete a conversation
  def destroy
    conversation = Conversation.find(params[:id])
    conversation.destroy
    head :no_content
  end

  private

  def conversation_params
    params.require(:conversations).permit(:freelancer_id, :client_id, :last_message_id, :last_message_sender)
  end
end
