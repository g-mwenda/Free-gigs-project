class ProposalsController < ApplicationController
     ###get all proposals
     skip_before_action :authorize, only: [:index, :create  ]
     def index 
      proposals = Proposal.includes(:freelancer).all.as_json(include: { freelancer: { only: :name } })
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
      # freelancer = Freelancer.find(params[:freelancer_id])
      user = User.find_by(id: session[:user_id])
      freelancer = Freelancer.find_by(user_id: user.id)
      all_params = create_params.merge(freelancer: freelancer)
          proposal = Proposal.new(all_params)

          if proposal.save
            render json: { success: "Proposal created successfully" }
          else
            puts(proposal.errors.full_messages)
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

     
     def create_params
      user = User.find_by(id: session[:user_id])
      puts("Hello")
      puts(user.id)
      freelancer = Freelancer.find_by(user_id: user.id)
      puts(freelancer.id)
      params.require(:proposal).permit(:job_listing_id, :project_details, :cost_estimate, :timeline)
    end
    
     def update_params 
       params.require(:proposal).permit(:project_details, :cost_estimate, :timeline)
     end
   end
   