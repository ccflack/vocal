class Users::SessionsController < Devise::SessionsController
  respond_to :json
  prepend_before_filter :require_no_authentication, :only => [:create]
# before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    resource = User.find_for_database_authentication(login: params[:login][:username])
    if resource.nil?
      render json: {success:false, message:"Error with your login or password"}, status: 401
    else
      if resource.valid_password?(params[:login][:password])
        sign_in("user", resource)
        render json: resource
      else
        render json: {success: false, message:"Error with your login or password"}, status: 401
      end
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:email || :username, :password])
  # end
end
