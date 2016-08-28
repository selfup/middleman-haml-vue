require 'sprockets/es6'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :haml, {
  ugly: true,
  format: :html5
}

def es6_transcompile
  activate :sprockets do |s|
    s.supported_output_extensions << '.es6'
  end
end

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
end

configure :development do
  es6_transcompile
  activate :livereload
end

configure :build do
  ignore 'images/*.psd'
  ignore 'stylesheets/lib/*'
  ignore 'stylesheets/vendor/*'

  set :build_dir, "public"

  es6_transcompile

  activate :minify_css
  activate :minify_javascript
  activate :minify_html
end