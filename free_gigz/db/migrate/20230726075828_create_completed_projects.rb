class CreateCompletedProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :completed_projects do |t|
      t.references :freelancer, null: false, foreign_key: true
      t.references :client, null: false, foreign_key: true
      t.integer :project_status
      t.date :completed_date

      t.timestamps
    end
  end
end
