Rails.application.routes.draw do
  root to: "static_pages#index"
  
  get '/home', to: 'static_pages#home'
  
  resource :session, only: [:new, :create, :destroy]
  
  resources :users 
  
  namespace :api, defaults: {format: :json }do
    resources :spaceports, only: [:create, :destroy, :show, :index]
    resources :users, only: [:show]
  end

end
