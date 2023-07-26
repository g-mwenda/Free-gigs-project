class CreateJobListings < ActiveRecord::Migration[7.0]
  def change
    create_table :job_listings do |t|
      t.references :client, null: false, foreign_key: true
      t.string :title
      t.text :description
      t.float :budget
      t.date :deadline

      t.timestamps
    end
  end
end
