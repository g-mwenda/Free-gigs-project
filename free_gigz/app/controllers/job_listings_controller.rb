class JobListingsController < ApplicationController
     # ...
   
     def index
       joblistings = JobListing.all
       render json: joblistings
     end
   
     def show
       joblisting = JobListing.find_by(id: params[:id])
       render json: joblisting
     end
   
     def create
       job_listing = JobListing.create(create_params)
   
       if job_listing.persisted?
         render json: { success: "Job listing created successfully" }
       else
         puts job_listing.errors.full_messages
         render json: { error: "Job listing not created" }, status: :unprocessable_entity
       end
     end
   
     def create_params
       params.require(:job_listing).permit(:client_id, :title, :description, :budget, :deadline)
     end
   
     def update
       joblisting = JobListing.find_by(id: params[:id])
       if joblisting
         joblisting.update(update_params)
         render json: { success: "Joblisting successfully updated" }
       else
         render json: { error: "Joblisting does not exist" }
       end
     end
   
     def update_params
       params.require(:job_listing).permit(:title, :description, :budget, :deadline)
     end
   
     def destroy
       joblisting = JobListing.find_by(id: params[:id])
       if joblisting
         joblisting.destroy
         render json: { success: "Joblisting successfully deleted" }
       else
         render json: { error: "Joblisting does not exist" }
       end
     end
   
     # ...
   end
   