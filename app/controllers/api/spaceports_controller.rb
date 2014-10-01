class Api::SpaceportsController < ApplicationController
  def index
    @spaceports = Spaceport.all
    render 'index'
  end
  
  def show
    @spaceport = Spaceport.find(params[:id])
    render "show"
  end

  def create
    @spaceport = Spaceport.new(spaceport_params)

    if @spaceport.save
      render json: @spaceport
    else
      render json: @spaceport.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def spaceport_params 
    params.require(:spaceport).permit(
      :name, 
      :address, 
      :user_id, 
      :style, 
      :price, 
      :staff, 
      :pads, 
      :description, 
      :latitude, 
      :longitude
    )
  end
end
