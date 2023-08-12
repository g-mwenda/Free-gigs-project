class CompletedProjectsController < ApplicationController
    # List all completed projects
    skip_before_action :authorize, only: [:index,:create ]
    def index
      completed_projects = CompletedProject.all
      render json: completed_projects
    end
  
    # Show a completed project
    def show
      completed_project = CompletedProject.find_by(params[:id])
      if completed_project
        render json: completed_project
      else
        render json: {error: "Project does not exist or is not completed"}, status: :not_found
      end
    end
  
    # Create a new completed project
    def create
     user = User.find_by(id: session[:user_id])
    freelancer = Freelancer.find_by(user_id: user.id)
    #  client = Client.find_by(user_id: user.id)
    all_params = completed_project_params.merge(freelancer: freelancer)
      
      

      completed_project = CompletedProject.new(all_params)
      if completed_project.save
        render json: completed_project, status: :created
      else
        render json: completed_project.errors, status: :unprocessable_entity
      end
    end
  
    def update
      completed_project = CompletedProject.find_by(params[:id])
      
      if completed_project.update(completed_project_params)
        render json: completed_project, status: :ok
      else
        render json: completed_project.errors, status: :unprocessable_entity
      end
    end
  
    # Delete a completed project
    def destroy
      completed_project = CompletedProject.find(params[:id])
      completed_project.destroy
      head :no_content
    end
  
    private
  
    def completed_project_params
      user = User.find_by(id: session[:user_id])
      freelancer = Freelancer.find_by(user_id: user.id)
     # puts(freelancer.id)
   #   client = Client.find_by(user_id: user.id)
      params.require(:completed_project).permit(:freelancer_id, :client_id, :job_listing_id, :project_status, :completed_date)
    end
  end
  