class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render "show"
  end
  
  def index
    @users = User.all
    render "index"
  end
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      flash[:successes] = ["welcome to starbnb!"]
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def user_params 
    params.require(:user).permit(:username, :password, :brief)
  end
end
