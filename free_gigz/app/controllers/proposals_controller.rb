class ProposalsController < ApplicationController
     ###get all proposals
     def index 
       proposals = Proposal.all
       render json: proposals
     end
   
     ###get single proposal by id 
     def show 
       proposal = Proposal.find_by(id: params[:id])
       render json: proposal
     end
   
     ###create a proposal
     # def create 
     #   proposal = Proposal.create(create_params)
     #   if proposal
     #     render json: { success: "Proposal created successfully" }
     #   else  
     #     render json: { error: "Proposal has not been created" }
     #   end
     # end
     def create
          proposal = Proposal.new(create_params)
          if proposal.save
            render json: { success: "Proposal created successfully" }
          else
            render json: { error: "Proposal has not been created" }
          end
        end
   
     # def create_params 
     #   params.require(:proposal).permit(:freelancer_id, :job_listing_id, :project_details, :cost_estimate, :timeline)
     # end

     # def create_params
     #      params.require(:proposal).permit(:freelancer_id, :job_listing_id, :project_details, :cost_estimate, :timeline)
     #    end
   
     ###update proposal
     def update 
       proposal = Proposal.find_by(id: params[:id])
       if proposal 
         proposal.update(update_params)
         render json: { success: "Proposal updated successfully" }
       else  
         render json: { error: "Proposal does not exist" }
       end
     end

     private
     def create_params
          params.require(:proposal).permit(:freelancer_id, :job_listing_id, :project_details, :cost_estimate, :timeline)
        end
   
     def update_params 
       params.require(:proposal).permit(:project_details, :cost_estimate, :timeline)
     end
   end
   