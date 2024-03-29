class HomeController < ApplicationController
  # before_action :authenticate_user!
  before_action :check_user_role, only: :index

  def index

  end

  def viewer
    @contractors = current_user.contractors
  end

  def contractor
    @listings = current_user.listings
  end

  def check_user_role
    if user_signed_in?
      if current_user.role == "viewer"
        p "in viewer $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
          redirect_to viewer_path
      elsif current_user.role == "contractor"
        p "in contractor &&&&&&&&&&&&&&&&&&&&&&&&&&"
          redirect_to contractor_path
      end
    end

  end

end
