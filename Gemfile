source 'https://rubygems.org'

ruby '2.3.1'
# Secure keys
gem 'figaro'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
# Users
gem 'simple_token_authentication', '~> 1.0'
gem 'devise'
gem 'socialization'
# Mailer
gem 'sendgrid'
# Caching
gem 'dalli'
# Pagination
gem 'kaminari'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Cleaner console
gem 'pry-rails', '~> 0.3.4'
# ActiveModelSerializers
gem 'active_model_serializers', '~> 0.10.0'
# Search/Filter
gem 'pg_search'
gem 'ransack'
# For single-page front end
gem 'webpack-rails'
# Spaghetti for images
gem 'sinatra', github: 'sinatra/sinatra'
gem 'refile', require: 'refile/rails', github: 'refile/refile'
gem 'refile-mini_magick'
gem 'refile-postgres', '~> 1.4'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
# Advanced functionality for better_errors
gem 'binding_of_caller'
# API Connection/manipulation
gem 'omniauth', '~> 1.3', '>= 1.3.1'
gem 'omniauth-google-oauth2', '~> 0.4.1'
gem 'typhoeus'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
# For Heroku
gem 'rails_12factor', group: :production
gem "rack-timeout", require:"rack/timeout/base"



group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'

  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors'
  gem 'rubocop', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'foreman'
