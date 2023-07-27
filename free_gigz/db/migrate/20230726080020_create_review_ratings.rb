class CreateReviewRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :review_ratings do |t|
      t.references :client, null: false, foreign_key: true
      t.references :freelancer, null: false, foreign_key: true
      t.integer :rating
      t.text :review
      t.references :completed_project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
