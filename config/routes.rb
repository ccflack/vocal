Rails.application.routes.draw do

  # Root Route
  root 'home#static'
  get '/image_loader' => 'home#image_loader'
  # Legislators
  resources :legislators do
    collection do
      get :filter
    end
  end
  get   '/legislators/:id' => 'legislators#show'
  get   '/legislators/search' => 'legislators#search'

  # News
  get   '/articles' => 'articles#index'

  # => Follow Logic
  post  '/legislators/:full_name/follow' => 'legislators#follow_unfollow'

  # Users
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  } do
    post  '/users' => 'users/registrations#create', as: 'sign_up', constraints: { format: /(json)/ }
    patch '/users' => 'devise/registrations#update', as: 'account_update', constraints: { format: /(json)/ }
    post  '/users/sign_in' => 'users/sessions#create', as: 'sign_in', constraints: { format: /(json)/ }
  end
  get   '/self' => 'users#full_profile'
  get   '/short_self' => 'users#short_self'
  get   '/users/:id' => 'users#show'

  # Catchalls for React
  get   '/:catchall' => 'home#static'
  get   '/:catchall/:catchall' => 'home#static'
end
