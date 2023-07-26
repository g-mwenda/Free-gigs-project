class CreateConversations < ActiveRecord::Migration[7.0]
  def change
    create_table :conversations do |t|
      t.references :freelancer, null: false, foreign_key: true
      t.references :client, null: false, foreign_key: true
      t.references :last_message, null: false, foreign_key: true
      t.integer :last_message_sender

      t.timestamps
    end
  end
end
