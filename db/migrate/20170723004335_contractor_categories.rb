class ContractorCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :contractor_categories do |t|
      t.integer :category_id
      t.integer :user_id

    	t.timestamps null: false
    end
  end
end
