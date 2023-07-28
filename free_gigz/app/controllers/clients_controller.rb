class ClientsController < ApplicationController
  # New action to render the form for creating a new client
  skip_before_action :authorize, only: [:index,:create]
  def new
    @client = Client.new
  end

  # Create action to save the new client to the database
  def create
    @client = Client.new(client_params)
    if @client.save
      render json: @client, status: :created
    else
      render json: { errors: @client.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Index action to list all clients !! ISH -WORKS, no data to display due to CREATE
  def index
    clients = Client.all
    render json: clients
  end

  # Show action to display a specific client
  def show
    client = Client.find(params[:id])
    render json: client
  end

  # Edit action to render the form for updating a client
  def edit
    client = Client.find(params[:id])
    render json: client
  end

  # Update action to save the updated client to the database
  def update
    @client = Client.find(params[:id])
    if @client.update(client_params)
      redirect_to @client, notice: 'Client was successfully updated.'
    else
      render :edit
    end
  end

  # Destroy action to delete a client from the database
  def destroy
    @client = Client.find(params[:id])
    @client.destroy
    redirect_to clients_url, notice: 'Client was successfully deleted.'
  end

  # Private method to permit the required parameters for creating a client
  private

  def client_params
    params.permit(:user_id, :company_name, :company_info, :profile_picture)
  end

end
