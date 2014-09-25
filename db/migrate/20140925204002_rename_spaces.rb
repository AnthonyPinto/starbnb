class RenameSpaces < ActiveRecord::Migration
  def change
    rename_table :spaces, :ports
  end
end
