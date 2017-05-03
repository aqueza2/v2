class Api::V1::BaseController < ApplicationController
	protect_from_forgery with: :null_session

  before_action :destroy_session

  acts_as_token_authentication_handler_for User

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def authenticate_token
		current_user = User.find_by_authentication_token(params[:auth_token]||request.headers["X-User-Token"])
		return unless current_user.blank?
		render :json=>{:message=>"invalid token"}, :status=>422
	end

  def destroy_session
    request.session_options[:skip] = true
  end

  def not_found
    return api_error(status: 404, errors: 'Not found')
  end

end
