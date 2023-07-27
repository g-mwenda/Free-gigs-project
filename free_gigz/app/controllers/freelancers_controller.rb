class FreelancersController < ApplicationController
    def new
        @freelancer = Freelancer.new
      end
    
      # Create action to save the new freelancer to the database
      def create
        @freelancer = Freelancer.new(freelancer_params)
        if @freelancer.save
          redirect_to @freelancer, notice: 'Freelancer was successfully created.'
        else
          render :new
        end
      end
    # Index action to display a all freelancers !! ISH-WORKS, no data to display due to CREATE
      def index
        freelancers = Freelancer.all
        render json: freelancers
      end
    
      # Show action to display a specific freelancer
      def show
        freelancer = Freelancer.find(params[:id])
        render json: freelancer
      end

      # Edit action to render the form for updating a freelancer
  def edit
    @freelancer = Freelancer.find(params[:id])
  end

  # Update action to save the updated freelancer to the database
  def update
    @freelancer = Freelancer.find(params[:id])
    if @freelancer.update(freelancer_params)
      redirect_to @freelancer, notice: 'Freelancer was successfully updated.'
    else
      render :edit
    end
  end

  # Destroy action to delete a freelancer from the database
  def destroy
    @freelancer = Freelancer.find(params[:id])
    @freelancer.destroy
    redirect_to freelancers_url, notice: 'Freelancer was successfully deleted.'
  end
    
      # Private method to permit the required parameters for creating a freelancer
      private
    
      def freelancer_params
        params.permit(:name, :portfolio, :skills,  :profile_pic)
        # .require(:freelancer)
      end
end
