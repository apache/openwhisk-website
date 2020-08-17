#!groovy
node("git-websites") {
  sh 'env'
  stage('Build') {
    // Run jekyll
    checkout scm
    sh '''
    ls
    pwd
    env
    export
    echo "Set ruby path to avoid writing to /usr directory"
    export RUBY_PATH=${WORKSPACE}/shared/.rvm
    export GEM_HOME=${RUBY_PATH}/gems
    curl -sSL https://get.rvm.io | bash -s -- --path ${RUBY_PATH}
    mkdir -p ${GEM_HOME}/gems
    gem install  --install-dir ${GEM_HOME} jekyll bundler
    export PATH=${GEM_HOME}/bin:$PATH
    which bundle
    bundle install --path ${GEM_HOME}
    bundle
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
