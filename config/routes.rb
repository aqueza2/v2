Rails.application.routes.draw do

  root "home#index"
  resources :listings
  resources :ratings
  resources :churches
  devise_for :users, :controllers => {:registrations => "user/registrations"}
  resources :users
  get "/viewer" => "home#viewer", as: :viewer
  get "/viewer/messages" => "home#viewer_messages", as: :viewer_messages
  get "/contractor" => "home#contractor", as: :contractor
  namespace :api, :defaults => {:format => 'json'} do
    namespace :v1 do
      devise_for :users, controllers: {registrations: "devise/registrations"}
      # resources :users, only: [:index, :create, :show, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
