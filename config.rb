page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :haml, {
  ugly: true,
  format: :html5
}

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
end

configure :development do
  activate :livereload
end

configure :build do
  set :build_dir, "public"

  activate :asset_hash
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
end

ignore "/includes/*"
