class JobListingsController < ApplicationController
  # ...
  skip_before_action :authorize, only: [:index, :create  ]
  def index
    joblistings = JobListing.includes(:client).all.as_json(include: { client: { only: :name } })
    render json: joblistings
  end
  
  

  def show
    joblisting = JobListing.find_by(id: params[:id])
    if joblisting
      render json: joblisting
    else
      render json: { error: "Job listing not found" }, status: :not_found
    end
  end

git   def create
    
    all_params = create_params.merge(client: client)
    job_listing = JobListing.new(all_params)


    if job_listing.save
      render json: { success: "Job listing created successfully" }
    else
      puts(job_listing.errors.full_messages)
      render json: { errors: job_listing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create_params
    user = User.find_by(id: session[:user_id])
    puts("Hello")
    puts(user.id)
    client = Client.find_by(user_id: user.id)
    puts(client.id)
    params.require(:job_listing).permit( :title, :description, :budget, :deadline)
  end

  def update
    joblisting = JobListing.find_by(id: params[:id])
    if joblisting
      if joblisting.update(update_params)
        render json: { success: "Job listing successfully updated" }
      else
        render json: { errors: joblisting.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Job listing not found" }, status: :not_found
    end
  end

  def update_params
    params.require(:job_listing).permit( :title, :description, :budget, :deadline, :client_id => 1)
  end

  def destroy
    joblisting = JobListing.find_by(id: params[:id])
    if joblisting
      joblisting.destroy
      head :no_content # Return success without any body content
    else
      render json: { error: "Job listing not found" }, status: :not_found
    end
  end

  # ...
end
