/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

function checkReqs(actionName, fail) {
    if (WinJS.Utilities.isPhone !== true) {       
        fail(actionName + ' is unsupported by this platform.');
        return false;
    }

    return true;
}

function tryDoAction(actionName, success, fail, args, action) {
    try {
        if (checkReqs(actionName, fail) !== true) {
            return;
        }

        action(args);
        success();        
    } catch (e) {
        fail('Error occured while trying to ' + actionName + ': ' + e);
    }
}

var DEFAULT_DURATION = 200;

module.exports = {
    vibrate: function (success, fail, args) {
        tryDoAction("vibrate", success, fail, args, Vibration.Vibration.vibrate);
    },

    vibrateWithPattern: function (success, fail, args) {
        tryDoAction("vibrate", success, fail, [DEFAULT_DURATION], Vibration.Vibration.vibrate);
    },

    cancelVibration: function(success, fail, args) {
        tryDoAction("cancelVibration", success, fail, args, Vibration.Vibration.cancelVibration);
    }
};

require("cordova/exec/proxy").add("Vibration", module.exports);
