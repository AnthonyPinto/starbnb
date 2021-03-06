class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      flash[:successes] = ["welcome to starbnb!"]
      redirect_to users_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  def index
  end

  def show
  end
  
  def user_params
    params.require("user").permit("username", "password")
  end
end
