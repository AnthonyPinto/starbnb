class Api::SpaceportsController < ApplicationController
  def index
    @spaceports = Spaceport.all
    render 'index'
  end
  
  def show
    @spaceport = Spaceport.find(params[:id])
    render "show"
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
