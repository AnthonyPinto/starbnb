Rails.application.routes.draw do
  root to: "static_pages#home"
  
  get '/search', to: 'static_pages#search'
  
  resource :session, only: [:new, :create, :destroy]
  
  resources :users 
  
  namespace :api, defaults: {format: :json }do
    resources :ports, only: [:create, :destroy, :show, :index]
  end

end
