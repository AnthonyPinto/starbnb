class AddBriefToUser < ActiveRecord::Migration
  def change
    add_column :users, :brief, :text
  end
end
