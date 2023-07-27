class CreateFreelancers < ActiveRecord::Migration[7.0]
  def change
    create_table :freelancers do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.text :portfolio
      t.string :skills
      t.string :profile_picture

      t.timestamps
    end
  end
end
