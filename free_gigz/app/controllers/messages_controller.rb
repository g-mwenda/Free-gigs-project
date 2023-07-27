class MessagesController < ApplicationController
    
    ##get messages
    def index 
        messages= Message.all
        render json: messages
    end

    ##get messages with id only
    def show
        message=Message.find_by(id: params[:id])
        if message
            render json: message, status: :ok
        else
            render json: {error: "Response not found" }, status: :not_found
        end
    end

    ##creating a new message
    def create
        message = Message.new(message_params)
        if message.save
            render json: message, status: :created
        else
            render json: {error: "Unprocessable entity"}, status: :unprocessable_entity
        end
    end

    def destroy
        message = Message.find(params[:id])
        if user.id = message.client_id
            message.destroy
            head :no_content
        else
            render json: {error: "You cannot delete a message that is not yours"}, status: :not_authorised
        end

    end 



    private
    def message_params
        params.require(:message).permit(:content, :client_id, :freelancer_id, :conversation_id)
    end

end
