class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
    	t.string 	 :text
    	t.integer  :conversation_id
    	t.integer  :to_id
    	t.integer  :from_id

    	t.timestamps null:false
    end
  end
end
