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

//old vibrate call
var vibrate = function(){
  navigator.notification.vibrate(2500);
};

//new standard vibrate call that aligns to w3c spec with param long
var _vibrate1 = function() {
    navigator.vibrate(3000);
};

//new standard vibrate call that aligns to w3c spec with param array
var _vibrate2 = function() {
    navigator.vibrate([3000]);
};

//vibrate with a pattern using w3c spec
var vibrateWithPattern = function() {
    navigator.vibrate([100, 200, 300]);
};

//cancel existing vibration using w3c spec navigator.vibrate(0)
var cancelWithZero = function() {
    navigator.vibrate(0);
};

//cancel existing vibration using w3c spec navigator.vibrate([])
var cancelWithEmpty = function() {
    navigator.vibrate([]);
};

//special long vibrate used to test cancel
var longVibrate = function() {
    navigator.vibrate(60000);
};

    //standard vibrate with old call
    createActionButton('Vibrate_Old', function () {
        vibrate();
        console.log("navigator.notification.vibrate(2500)");
    });

    //standard vibrate with new call param long
    createActionButton('Vibrate_New with long', function() {
        _vibrate1();
        console.log("navigator.vibrate(3000): should vibrate once for 3 seconds");
    });

    //standard vibrate with new call param array
    createActionButton('Vibrate_New with array', function() {
        _vibrate2();
        console.log("navigator.vibrate([3000]): should vibrate once for 3 seconds");
    });

    //vibrate with a pattern
    createActionButton('Vibrate with a pattern', function() {
        vibrateWithPattern();
        console.log("navigator.vibrate([100, 200, 300]): should vibrate for 100ms, pause for 200ms, then vibrate for 300ms");
    });

    //cancel any existing vibrations with param 0
    createActionButton('Cancel vibration with 0', function() {
        console.log("navigator.vibrate(0): should try to vibrate for 60 seconds but will be canceled after 5");
        longVibrate();
        setTimeout(cancelWithZero(), 5000);
    });

    //cancel any existing vibrations with param []
    createActionButton('Cancel vibration with []', function() {
        console.log("navigator.vibrate([]): should should try to vibrate for 60 seconds but will be canceled after 5");
        longVibrate();
        setTimeout(cancelWithEmpty(), 5000);
    });
};
