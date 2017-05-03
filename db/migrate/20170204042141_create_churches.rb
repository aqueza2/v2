class CreateChurches < ActiveRecord::Migration[5.0]
  def change
    create_table :churches do |t|
    	t.string :street_address
    	t.string :city
    	t.string :state
    	t.string :zip_code
    	t.string :phone_number
    	t.string :associated_contractor_id

    	t.timestamps null: false
    end
  end
end
