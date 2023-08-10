Rails.application.routes.draw do
  resources :mpesas
  post "/login", to:"sessions#create"
  delete "/logout", to:"sessions#destroy"
  get "/me", to:"users#current_user"
  post "/signup", to:"users#create"
  post '/proposals/:id/accept', to: 'proposals#accept', as: :accept_proposal
  post '/proposals/:id/reject', to: 'proposals#reject', as: :reject_proposal

  
  patch "/reset", to:"passwords#update_password"

  resources :review_ratings 
  resources :completed_projects
  resources :proposals
  resources :job_listings
  resources :clients
  # GET    /clients(.:format)        clients#index
  # POST   /clients(.:format)        clients#create
  # GET    /clients/new(.:format)    clients#new
  # GET    /clients/:id/edit(.:format) clients#edit
  # GET    /clients/:id(.:format)    clients#show
  # PATCH  /clients/:id(.:format)    clients#update
  # PUT    /clients/:id(.:format)    clients#update
  # DELETE /clients/:id(.:format)    clients#destroy

  resources :freelancers
  # GET    /freelancers(.:format)     freelancers#index
  # POST   /freelancers(.:format)     freelancers#create
  # GET    /freelancers/new(.:format) freelancers#new
  # GET    /freelancers/:id/edit(.:format) freelancers#edit
  # GET    /freelancers/:id(.:format) freelancers#show
  # PATCH  /freelancers/:id(.:format) freelancers#update
  # PUT    /freelancers/:id(.:format) freelancers#update
  # DELETE /freelancers/:id(.:format) freelancers#destroy
  resources :users
  # GET    /users(.:format)          users#index
  # POST   /users(.:format)          users#create
  # GET    /users/new(.:format)      users#new
  # GET    /users/:id/edit(.:format) users#edit
  # GET    /users/:id(.:format)      users#show
  # PATCH  /users/:id(.:format)      users#update
  # PUT    /users/:id(.:format)      users#update
  # DELETE /users/:id(.:format)      users#destroy

  # mpesa route -Tom
  post 'stkpush', to: 'mpesas#stkpush'
  post 'stkquery', to: 'mpesas#stkquery'




  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
