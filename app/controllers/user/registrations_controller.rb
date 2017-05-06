class User::RegistrationsController < Devise::RegistrationsController
  before_action :configure_permitted_parameters, if: :devise_controller?

   def new
     p "___________"
     p params[:role]
     p "__________**********************************_"
     @role = params[:role]
     params[:role] = "garden"
     build_resource({})
     yield resource if block_given?
     respond_with resource
   end

   protected

   def configure_permitted_parameters
     devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :phone_number, :email, :zip_code, :category, :work_description, :password, :role])
   end

end
