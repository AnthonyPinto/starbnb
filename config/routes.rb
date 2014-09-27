Rails.application.routes.draw do
  root to: "static_pages#home"
  
  get '/index', to: 'static_pages#index'
  
  resource :session, only: [:new, :create, :destroy]
  
  resources :users 
  
  namespace :api, defaults: {format: :json }do
    resources :ports, only: [:create, :destroy, :show, :index]
  end

end
