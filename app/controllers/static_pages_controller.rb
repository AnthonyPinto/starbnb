class StaticPagesController < ApplicationController
  before_action :require_login, only: :index
  
  def splash
  end
  
  def index
  end
end
