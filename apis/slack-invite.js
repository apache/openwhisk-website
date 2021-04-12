/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// jshint esversion: 9
// jshint asi:true
const request = require('needle')
const options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

function main({email, org, slacktoken}) {
  return request(
    'post',
    `https://${org}.slack.com/api/users.admin.invite`,
    {
      email: email,
      token: slacktoken,
      set_active: true
    },
    options
  )
  .then(res => {
    if (res.statusCode == 200 && res.body.ok) {
      return {
        body: { message:`Success! Check ${email} for an invite from Slack.` }
      }
    } else {
      return {
        statusCode: 400,
        body: { error: res.body }
      }
    }
  })
  .catch(err => {
    console.error(err)
     return ({
       statusCode: 400,
       body: { error: err.message }
    })
  })
}

exports.main = main
