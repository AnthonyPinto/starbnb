class AddCoordsToPorts < ActiveRecord::Migration
  def change
    add_column :ports, :latitude, :integer, index: true, null: false
    add_column :ports, :longitude, :integer, index: true, null: false
  end
end
