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

exports.defineAutoTests = function () {

    describe('Vibration (navigator.notification.vibrate)', function () {
        it("navigator.notification should exist", function () {
            expect(navigator.notification).toBeDefined();
        });

        it("should contain a vibrate function", function () {
            expect(typeof navigator.notification.vibrate).toBeDefined();
            expect(typeof navigator.notification.vibrate).toBe("function");
        });
    });
};

exports.defineManualTests = function (contentEl, createActionButton) {
//-------------------------------------------------------------------------
// Vibrations
//-------------------------------------------------------------------------

var vibrate = function(){
  navigator.notification.vibrate(2500);
};
    createActionButton('Vibrate', function () {
        vibrate();
        console.log("navigator.notification.vibrate(2500)");
    });
};
