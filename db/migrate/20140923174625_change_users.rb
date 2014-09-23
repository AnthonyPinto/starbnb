class ChangeUsers < ActiveRecord::Migration
  def change
    change_column(:users, :username, :string, uniqueness: true, null: false)
    change_column(:users, :password_digest, :string, null: false)
    change_column(:users, :session_token, :string, null: false)
  end
end
