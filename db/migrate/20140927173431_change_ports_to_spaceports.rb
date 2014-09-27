class ChangePortsToSpaceports < ActiveRecord::Migration
  def change
    rename_table :ports, :spaceports
  end
end
