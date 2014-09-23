class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, uniqueness: true
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
  end
end
