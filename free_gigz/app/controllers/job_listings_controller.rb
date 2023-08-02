class JobListingsController < ApplicationController
  # ...

  def index
    joblistings = JobListing.all
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

  def create
    job_listing = JobListing.new(create_params)

    if job_listing.save
      render json: { success: "Job listing created successfully" }
    else
      render json: { errors: job_listing.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create_params
    params.require(:job_listing).permit(:client_id, :title, :description, :budget, :deadline)
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
    params.require(:job_listing).permit(:title, :description, :budget, :deadline)
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
