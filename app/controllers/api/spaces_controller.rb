class Api::SpacesController < ApplicationController
  def index
    @spaces = Space.all
    render json: @spaces
  end
  
  def show
    @space = Space.find(params[:id])
    render json: @space
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
