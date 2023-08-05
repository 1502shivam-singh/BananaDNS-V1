Rails.application.routes.draw do
  root "public#index"
  post '/welcome', to: 'welcome#create'
  get '/welcome', to: 'welcome#show', as: 'welcome_show'
end
