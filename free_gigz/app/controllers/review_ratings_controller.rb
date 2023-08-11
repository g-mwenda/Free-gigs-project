class ReviewRatingsController < ApplicationController

  skip_before_action :authorize, only: [:index,:create]  ###get all reviews
     def index 
          reviews = ReviewRating.all 
          render json: reviews, include: :completed_project
     end



     ###create a new review
     def review_rating_params
       params.permit(:client_id, :freelancer_id, :rating, :review, :completed_project_id)
     end
     
    def create
      completed_project = CompletedProject.find(params[:completed_project_id])
      user = User.find_by(id: params[:id])
    #  client = Client.find_by(user_id: user.id)
      review_rating = completed_project.review_rating || ReviewRating.new
      review_rating.assign_attributes(review_rating_params)
    
      if review_rating.save
        render json: { success: "Review created successfully" }
      else
        render json: { error: review_rating.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
    end
    


     ##delete a review 
     def destroy
          review = ReviewRating.find_by(id: params[:id])
          if review 
               review.destroy 
               render json: {success: "Review deleted succesfuly"}
          else  
               render json: {error: "Review does not exist"}
          end
     end
   end
   