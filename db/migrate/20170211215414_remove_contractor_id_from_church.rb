class RemoveContractorIdFromChurch < ActiveRecord::Migration[5.0]
  def change
  	remove_column :churches, :associated_contractor_id, :string
  end
end
