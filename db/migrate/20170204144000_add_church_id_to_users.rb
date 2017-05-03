class AddChurchIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :church_id, :integer
  end
end
