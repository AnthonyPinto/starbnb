class Api::PortsController < ApplicationController
  def index
    @ports = Port.all
    render json: @ports
  end
  
  def show
    @port = Port.find(params[:id])
    render json: @port
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
