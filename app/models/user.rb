require 'bcrypt'

class User < ActiveRecord::Base
  after_initialize :ensure_session_token
  
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  
  attr_reader :password
  
  def self.generate_session_token
    return SecureRandom.urlsafe_base64
  end
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.has_password?(password)
      return user
    else
      return nil
    end
  end
  
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
  
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!()
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
