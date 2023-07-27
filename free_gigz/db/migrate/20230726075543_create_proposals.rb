class CreateProposals < ActiveRecord::Migration[7.0]
  def change
    create_table :proposals do |t|
      t.references :freelancer, null: false, foreign_key: true
      t.references :job_listing, null: false, foreign_key: true
      t.text :project_details
      t.float :cost_estimate
      t.string :timeline

      t.timestamps
    end
  end
end
