class ChangeCoordsToFloats < ActiveRecord::Migration
  def change
    change_column :ports, :latitude, :float, index: true, null: false
    change_column :ports, :longitude, :float, index: true, null: false
  end
end
