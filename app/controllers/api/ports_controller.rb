class Api::PortsController < ApplicationController
  def index
    @ports = Port.all
    render 'index'
  end
  
  def show
    @port = Port.find(params[:id])
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
