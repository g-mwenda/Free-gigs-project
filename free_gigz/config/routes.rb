Rails.application.routes.draw do
  resources :messages
  resources :conversations
  resources :review_ratings 
  resources :completed_projects
  resources :proposals
  resources :job_listings
  resources :clients
  resources :freelancers
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
