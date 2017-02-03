# Apache OpenWhisk Website

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.com)

Apache OpenWhisk is a cloud-first distributed event-based programming service. It provides a programming model to upload event handlers to a cloud service, and register the handlers to respond to various events.

## Quickstart for Local Development

## Install Prerequisites

* Download and install Nodejs: see [https://nodejs.org/](https://nodejs.org/)
* Download and install Ruby: see [https://www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/)

``` sh
# Verify Node and Node Package Manager are installed
node -v
npm -v

# Verify Ruby is installed
ruby env

# Install Jekyll
gem install jekyll

```

**NOTE:** This site is built with [Jekyll](https://jekyllrb.com/), so you'll need to run `gem install jekyll` if you don't have it installed already.

``` sh
# Clone the repository (and correct branch).
git clone https://github.com/openwhisk/openwhisk.github.io.git

# Move into the cloned repo.
cd openwhisk.github.io

# Start the development server.
bin/develop
```

## How to Build Jekyll to Output Static Files

If you need to generate static files, run the following:

``` sh
# NOTE: Make sure you have already cloned the repo and moved into the directory.

# Build the site.
bundle exec jekyll build
```

This will build static files to a directory called `_site/` in the project root. This can be used for manual deployment to a static server or with build tools like Jenkins.

## Troubleshooting

If you get an error 'bundle: command not found' attempting to build the site, you may need to manually install the 'bundler' package:
``` sh
 gem install bundler
```

### License

Copyright 2016 IBM Corporation

Licensed under the [Apache License, Version 2.0 (the "License")](http://www.apache.org/licenses/LICENSE-2.0.html).

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.

### Issues

Report bugs, ask questions and request features [here on GitHub](../../issues).

You can also join our slack channel and chat with developers.   To get access to our slack channel, please see the instructions [here](https://github.com/openwhisk/openwhisk/wiki).
