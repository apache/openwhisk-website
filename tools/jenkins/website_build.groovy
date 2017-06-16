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
    export RUBY_PATH=~/shared/.rvm
    export GEM_HOME=${RUBY_PATH}/gems
    curl -sSL https://get.rvm.io | bash -s -- --path ${RUBY_PATH}
    mkdir -p ${GEM_HOME}/gems
    gem install  --install-dir ${GEM_HOME} jekyll bundler
    export PATH=${GEM_HOME}/bin:$PATH
    which bundle
    bundle install --path ${GEM_HOME}
    bundle
    bundle exec jekyll build --verbose
    ls -l _site
    '''
  }
  stage('Publish') {
    // Run git commands to push
    sh '''
    pwd
    ls
    echo "Pushing openwhisk site to asf"
    git config -l --local
    git config -l --global
    git stash
    git status
    git checkout asf-site
    git status
    rm -rf /tmp/_site 
    mv _site /tmp/
    rm -rf *
    git status
    mv /tmp/_site/* .
    git status
    git diff
    git add .
    git status
    git commit -m "Automatic Site Publish by Jenkins"
    git push origin asf-site
    '''
  }

}