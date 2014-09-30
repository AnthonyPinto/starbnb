

class SessionsController < ApplicationController
  def new
    @user = User.new()
  end

  def create
    @user = User.find_by_credentials(login_params[:username], login_params[:password])
    if @user
      login!(@user) 
      flash[:successes] = ["Welcome back #{@user.username}!"]
      redirect_to :root
    else
      @user = User.new(username: login_params[:username])
      flash.now[:errors] = ["Invalid Login"]
      render "static_pages/splash"
    end
  end

  def destroy
    @user = current_user
    @user.reset_session_token!
    session[:session_token] = nil
    flash[:successes] = ["Successfully logged off"]
    redirect_to "/splash"
  end
  
  def login_params
    params.require("user").permit("username", "password")
  end
end
