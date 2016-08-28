require 'scss_lint/rake_task'

desc "Run all lint tasks"
task lint: ['lint:scss'] do
end

namespace :lint do
  desc "Lint SCSS files"
  task :scss do
    SCSSLint::RakeTask.new
    Rake::Task["scss_lint"].invoke
  end
end
