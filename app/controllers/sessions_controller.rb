

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
      flash.now[:errors] = ["Invalid Login"]
      render :new
    end
  end

  def update
  end

  def edit
  end

  def destroy
    @user = current_user
    @user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

  def index
  end

  def show
  end
  
  def login_params
    params.require("user").permit("username", "password")
  end
end
