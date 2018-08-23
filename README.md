<!--
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
-->

# Apache OpenWhisk Website

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0) [![Build Status](https://travis-ci.org/apache/incubator-openwhisk-website.svg?branch=master)](https://travis-ci.org/apache/incubator-openwhisk-website)

Apache OpenWhisk is a cloud-first distributed event-based programming service. It provides a programming model to upload event handlers to a cloud service, and register the handlers to respond to various events.

## Quickstart for Local Development

### Install Prerequisites

- Download and install Node.js: see [https://nodejs.org/](https://nodejs.org/)
- Download and install Ruby: see [https://www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/)

```sh
# Verify Node and Node Package Manager are installed
node -v
npm -v

# Verify Ruby is installed
ruby -v

# Install Jekyll, which is used to build the site
gem install jekyll bundler
```

### Clone and start development server

```sh
# Clone the repository (and correct branch).
git clone https://github.com/apache/incubator-openwhisk-website.git

# Move into the cloned repo.
cd incubator-openwhisk-website

# Install gem dependencies
bundle install

# Start the development server default location http://127.0.0.1:4000
bin/develop
```

### Validate HTML, links and more

To make sure nothing is broken on the website we use [html-proofer](https://github.com/gjtorikian/html-proofer),
it checks to see if any of the links 404s, if the HTML is valid, images have alt tags and more.

Run the following command to run html-proofer:

```sh
bin/test
```

## How to Build Jekyll to Output Static Files

If you need to generate static files, run the following:

```sh
# NOTE: Make sure you have already cloned the repository and moved into the directory.

# Build the site.
bundle exec jekyll build
```

This will build static files to a directory called `_site/` in the project root. This can be used for manual deployment to a static server or with build tools like Jenkins.

## Troubleshooting

If you get an error 'bundle: command not found' attempting to build the site, you may need to manually install the 'bundler' package:

```sh
 gem install bundler
```

### Jenkins build

The OpenWhisk.org website is automatically built and published to Apache at:
http://openwhisk.incubator.apache.org/

Current Jenkins build status can be checked here:
https://builds.apache.org/job/OpenWhisk-website/

### Issues

Report bugs, ask questions and request features [here on GitHub](../../issues).

You can also join our slack channel and chat with developers. To get access to our slack channel, please see the instructions [here](https://github.com/apache/incubator-openwhisk/wiki).

### License

Licensed under the [Apache License, Version 2.0 (the "License")](http://www.apache.org/licenses/LICENSE-2.0.html).

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.
