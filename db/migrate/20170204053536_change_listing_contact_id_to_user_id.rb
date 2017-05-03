class ChangeListingContactIdToUserId < ActiveRecord::Migration[5.0]
  def change
  	rename_column :listings, :contact_id, :user_id
  end
end
