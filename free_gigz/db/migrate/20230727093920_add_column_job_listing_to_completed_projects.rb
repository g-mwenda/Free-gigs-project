class AddColumnJobListingToCompletedProjects < ActiveRecord::Migration[7.0]
  def change
    add_reference :completed_projects, :job_listing, null: false, foreign_key: true
  end
end
