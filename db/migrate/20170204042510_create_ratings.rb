class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
    	t.integer  :stars
    	t.string 	 :description
    	t.integer  :author_id
 			t.integer  :contractor_id   	

 			t.timestamps null: false
    end
  end
end
