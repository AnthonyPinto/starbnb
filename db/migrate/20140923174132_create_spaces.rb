class CreateSpaces < ActiveRecord::Migration
  def change
    create_table :spaces do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.integer :user_id, index: true, null: false
      t.string :type, index: true, null: false
      t.integer :price, index: true, null: false
      t.integer :guests, index: true, null: false
      t.integer :bedrooms, index: true, null: false
      t.integer :beds, index:  true, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
