Rails.application.routes.draw do
  get 'resume/show'
  get 'portfolio/show'
  get 'work/index'
  get 'work/show'
  get 'home/index'

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
