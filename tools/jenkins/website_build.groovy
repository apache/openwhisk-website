#!groovy
node("git-websites") {
  sh 'env'
  stage('Build') {
    // Install tools and run jekyll to build site
    checkout scm
    sh '''
    export
    echo "Install rbenv into the workspace"
    export RBENV_ROOT=${WORKSPACE}/shared/.rbenv
    git clone https://github.com/rbenv/rbenv.git ${RBENV_ROOT}
    eval "$(${RBENV_ROOT}/bin/rbenv init - sh)"
    git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
    rbenv install
    gem install bundler
    which bundle
    bundle install
    npm install
    npm run build:js
    bundle exec jekyll build --verbose
    ls -l _site
    '''
  }
  stage('Publish') {
    // Run git commands to push
    sh '''
    alias
    pwd
    ls
    echo "Pushing openwhisk site to asf"
    git config -l --local
    git config -l --global
    git stash
    git status
    git remote -v
    git fetch origin
    git checkout asf-site
    git log asf-site -3
    git status
    mkdir -p /tmp/openwhisk/
    rm -rf /tmp/openwhisk/_site
    mv _site /tmp/openwhisk/
    ls -l /tmp/openwhisk/_site/
    rm -rf *
    git status
    mv /tmp/openwhisk/_site/* .
    ls -l .
    git status
    git diff
    git add .
    git status
    git log asf-site -3
    git commit -m "Automatic Site Publish by Jenkins"
    git pull --rebase
    git log asf-site -3
    git push origin asf-site
    '''
  }

}
