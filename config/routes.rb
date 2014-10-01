Rails.application.routes.draw do
  root to: "static_pages#index"
  
  get '/splash', to: 'static_pages#splash'
  
  resource :session, only: [:create, :destroy]
  
  resources :users, only: [:create, :destroy] 
  
  namespace :api, defaults: {format: :json }do
    resources :spaceports, only: [:create, :destroy, :show, :index]
    resources :users, only: [:show, :index, :create]
    resources :photos, only: [:create]
  end

end
