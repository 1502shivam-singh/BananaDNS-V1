class WelcomeController < ApplicationController
  def create
    # Here you can handle the form submission, e.g. create a new user
    # For now, we'll just redirect to the welcome page with the submitted email
    redirect_to action: "show", email: params[:email]
  end

  def show
    @email = params[:email]
  end
end
