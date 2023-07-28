# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(
     username: "Jerry",
     password: "12345678",
     email: "jerry@gmail.com",
     role: 0,
     is_admin: false
   )
   
   user2 = User.create(
     username: "Obede",
     password: "12345678",
     email: "obede@gmail.com",
     role: 1,
     is_admin: false
   )
   
   freelancer1 = Freelancer.create(
     user: user1,
     name: "Joe Waithaka",
     portfolio: "Good work in development",
     skills: "Web development",
     profile_picture: "whatever works"
   )
   
   client1 = Client.create(
     user: user2,
     company_name: "Berkshire Hathaway",
     company_info: "Insurance company",
     profile_picture: "Another url"
   )
   
   joblisting1 = JobListing.create(
     client: client1,
     title: "Casual labourer",
     description: "Searching for a good guy",
     budget: 100000,
     deadline: Date.new(2023, 3, 24)
   )
   
   proposal1 = Proposal.create(
     freelancer: freelancer1,
     job_listing: joblisting1,
     project_details: "Work from home",
     cost_estimate: 50000,
     timeline: "27 weeks"
   )
   
   completed_project1 = CompletedProject.create(
     client: client1,
     freelancer: freelancer1,
     job_listing: joblisting1, # Associate the CompletedProject with the correct JobListing
     project_status: "Completed",
     completed_date: Date.new(2023, 5, 31)
   )
   
   review_rating1 = ReviewRating.create(
     client: client1,
     freelancer: freelancer1,
     rating: 5,
     review: "Very good",
     completed_project: completed_project1
   )
   