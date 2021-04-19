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

# Slack Inviter API

The file [`slack-invite.js`](./slack-invite.js) implements an OpenWhisk action
which uses the [Slack invite API](https://api.slack.com/methods/admin.users.invite)
to send an email invitation to join the OpenWhisk Slack team.

The action requires a [Slack token](https://api.slack.com/authentication/token-types#user)
to work correctly.

The API call is made in [`_layouts/slack.html`](../_layouts/slack.html) using
[Nimbella's anonymous action invocation](https://nimbella.com). The token for
the API call is uniquely encrypted for this action. Should this token change,
the encrypted value can be regenerated with the following Nimbella encryption API,
replacing the placeholder `<token>` with the actual Slack App token.

```bash
curl https://encrypt.nimbella.io/github.com/apache/openwhisk-website/blob/master/apis/slack-invite.js?slacktoken=<token>
```
