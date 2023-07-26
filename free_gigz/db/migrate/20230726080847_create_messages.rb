class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.references :conversation, null: false, foreign_key: true
      t.references :client, null: false, foreign_key: true
      t.references :freelancer, null: false, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
