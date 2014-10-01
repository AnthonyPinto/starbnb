class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render json: @photo
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def photo_params 
    params.require(:photo).permit(:photable_type, :photable_id, :url)
  end
end
