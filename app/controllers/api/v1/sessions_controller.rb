class Api::V1::SessionsController < Api::V1::BaseController
  respond_to :json

  before_action :authenticate_user!, :except => [:create]
  before_filter :ensure_params_exist, :except => [:destroy]
  skip_before_action :verify_authenticity_token

  # invoke token authentication
  acts_as_token_authentication_handler_for User, :except => [:create]

  # POST /api/v2/sign_in
  def create
    resource = User.find_for_database_authentication(:email => params[:user][:email])
    return invalid_login_attempt unless resource

    if resource.valid_password?(params[:user][:password])
      sign_in(:user, resource)
      #resource.ensure_authentication_token!
      render :json=> {:auth_token=>resource.authentication_token, :email=>resource.email, :message=>"1"}, :status => :ok
      return
    end
    invalid_login_attempt
  end

  # DELETE /api/v2/sign_out
  def destroy
    resource = User.find_by_authentication_token(params[:auth_token]||request.headers["X-User-Token"])
    if resource.blank?
      render :json=>{:message=>"invalid token"}, :status=>422
    else
      resource.authentication_token = nil
      resource.save
      sign_out(resource_name)
      render :json => {}.to_json, :status => :ok
    end
  end

  protected
  def ensure_params_exist
    return unless params[:user].blank?
    render :json=>{:message=>"missing user parameters"}, :status=>422
  end

  def invalid_login_attempt
    resource = User.find_for_database_authentication(:email => params[:user][:email])
    message = "Invalid email/password combination."
    if resource.blank?
      message = "-1"
    else
      message = "-2"
    end
    render :json=> {:auth_token => "", :email => "", :message => message}, :status=>200
  end
end
