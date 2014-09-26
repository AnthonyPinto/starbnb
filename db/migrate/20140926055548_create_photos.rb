class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :photable_id, presence: true
      t.string :photable_type, presence: true
      t.string :url, presence: true
      t.timestamps
    end
  end
end
