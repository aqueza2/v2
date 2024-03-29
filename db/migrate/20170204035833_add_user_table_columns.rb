class AddUserTableColumns < ActiveRecord::Migration[5.0]
  def change
  	 add_column :users, :first_name, :string
  	 add_column :users, :last_name, :string
  	 add_column :users, :phone_number, :string
  	 add_column :users, :category, :string
  	 add_column :users, :city, :string
  	 add_column :users, :state, :string
  	 add_column :users, :zip_code, :string
  	 add_column :users, :status, :string
  end
end
