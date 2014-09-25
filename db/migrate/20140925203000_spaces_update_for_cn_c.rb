class SpacesUpdateForCnC < ActiveRecord::Migration
  def change
    rename_column :spaces, :beds, :pads
    rename_column :spaces, :guests, :staff
    remove_column :spaces, :bedrooms
  end
end
