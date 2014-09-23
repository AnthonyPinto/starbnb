class ChangeSpaces < ActiveRecord::Migration
  def change
    rename_column :spaces, :type, :style
  end
end
