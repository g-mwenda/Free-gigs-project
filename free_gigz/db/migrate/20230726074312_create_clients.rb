class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.references :user, null: false, foreign_key: true
      t.string :company_name
      t.text :company_info
      t.string :profile_picture

      t.timestamps
    end
  end
end
