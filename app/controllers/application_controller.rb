class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :current_user, :logged_in?
  
  def current_user
    User.find_by(session_token: session[:session_token])
  end
  
  def require_login
    unless logged_in?
      flash[:errors] = ["Must be logged in to access that page"]
      redirect_to "/splash"
    end
  end
  
  def logged_in?
    !!current_user
  end
  
  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end
  
end
