class CreateConversations < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
    	t.integer :to_id
    	t.integer :from_id

    	t.timestamps null: false
    end
  end
end
