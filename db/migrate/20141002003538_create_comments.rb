class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, index: true, presence: true
      t.text :body, presence: true
      t.integer :commentable_id, index: true, presence: true
      t.string :commentable_type, presence: true

      t.timestamps
    end
  end
end
