class AddWorkDescriptionToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :work_description, :string
  end
end
