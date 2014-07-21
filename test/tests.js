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
    var logMessage = function (message, color) {
        var log = document.getElementById('info');
        var logLine = document.createElement('div');
        if (color) {
            logLine.style.color = color;
        }
        logLine.innerHTML = message;
        log.appendChild(logLine);
    }

    var clearLog = function () {
        var log = document.getElementById('info');
        log.innerHTML = '';
    }

    //-------------------------------------------------------------------------
    // Vibrations
    //-------------------------------------------------------------------------

    //old vibrate call
    var vibrateOld = function(){
        clearLog();
        navigator.notification.vibrate(2500);
        logMessage("navigator.notification.vibrate(2500)", "green");
    };

    //old vibrate with pattern call
    var vibrateWithPatternOld = function(){
        clearLog();
        navigator.notification.vibrateWithPattern([100, 200, 300]);
        logMessage("navigator.notification.vibrateWithPattern([100, 200, 300])", "green");
    };

    //old cancel vibrate call
    var cancelOld = function(){
        clearLog();
        navigator.notification.cancelVibration();
        logMessage("navigator.notification.cancelVibration()", "green");
    };

    //new standard vibrate call that aligns to w3c spec with param long
    var vibrateWithInt = function() {
        clearLog();
        navigator.vibrate(3000);
        logMessage("navigator.vibrate(3000)", "green");
    };

    //new standard vibrate call that aligns to w3c spec with param array
    var vibrateWithArray = function() {
        clearLog();
        navigator.vibrate([3000]);
        logMessage("navigator.vibrate([3000])", "green");
    };

    //vibrate with a pattern using w3c spec
    var vibrateWithPattern = function() {
        clearLog();
        navigator.vibrate([100, 200, 300]);
        logMessage("navigator.vibrate([100, 200, 300])", "green");
    };

    //cancel existing vibration using w3c spec navigator.vibrate(0)
    var cancelWithZero = function() {
        clearLog();
        navigator.vibrate(0);
        logMessage("navigator.vibrate(0)", "green");
    };

    //cancel existing vibration using w3c spec navigator.vibrate([])
    var cancelWithEmpty = function() {
        clearLog();
        navigator.vibrate([]);
        logMessage("navigator.vibrate([])", "green");
    };

    //reference to the timeout variable
    var timeout;

    //special long vibrate used to test cancel
    var longVibrate = function() {
        clearLog();
        navigator.vibrate(60000);
        logMessage("navigator.vibrate(60000)", "green");
        timeout = setTimeout(resetVibrateOn, 60000); //if user doesn't cancel vibrate, reset vibrateOn var after 60 seconds
    };

    function resetVibrateOn() {
        vibrateOn = false;
    }

    //check whether there is an ongoing vibration
    var vibrateOn = false;




    var vibrate_tests = '<h1>Vibrate Tests</h1>' +
        '<h3>Starred tests only work for Android. </h3>' +
        '<h3>iOS ignores the time given for a vibrate </h3>' +
        '<div id="vibrate_old"></div>' +
        'Expected result: Vibrate once for 2.5 seconds.' +
        '<p/> <div id="vibrateWithPattern_old"></div>' +
        'Expected result: Vibrate for 100ms, pause for 200ms, then vibrate for 300ms.' +
        '<p/> <div id="cancelVibrate_old"></div>' +
        'Expected result: Press once to initiate vibrate for 60 seconds. Press again to cancel vibrate immediately.' +
        '<p/> <div id="vibrate_int"></div>' +
        'Expected result: Vibrate once for 3 seconds.' +
        '<p/> <div id="vibrate_array"></div>' +
        'Expected result: Vibrate once for 3 seconds.' +
        '<p/> <div id="vibrate_with_pattern"></div>' +
        'Expected result: Vibrate for 100ms, pause for 200ms, then vibrate for 300ms.' +
        '<p/> <div id="cancel_zero"></div>' +
        'Expected result: Press once to initiate vibrate for 60 seconds. Press again to cancel vibrate immediately.' +
        '<p/><div id="cancel_array"></div>' +
        'Expected result: Press once to initiate vibrate for 60 seconds. Press again to cancel vibrate immediately.';


    contentEl.innerHTML = '<div id="info"></div>' + vibrate_tests;

    //standard vibrate with old call
    createActionButton('Vibrate (Old)', function () {
        vibrateOld();
    }, 'vibrate_old');

    //vibrate with pattern with old call
    createActionButton('* Vibrate with a pattern (Old)', function () {
        vibrateWithPatternOld();
    }, 'vibrateWithPattern_old');

    //cancel vibrate with old call
    createActionButton('* Cancel vibration (Old)', function() {

        if (!vibrateOn)
        {
            longVibrate();
            vibrateOn = true;
        }
        else
        {
            cancelOld();
            resetVibrateOn();
            clearTimeout(timeout); //clear the timeout since user has canceled the vibrate
        }
    }, 'cancelVibrate_old');

    //standard vibrate with new call param int
    createActionButton('Vibrate with int', function() {
        vibrateWithInt();
    }, 'vibrate_int');

    //standard vibrate with new call param array
    createActionButton('* Vibrate with array', function() {
        vibrateWithArray();
    }, 'vibrate_array');

    //vibrate with a pattern
    createActionButton('* Vibrate with a pattern', function() {
        vibrateWithPattern();
    }, 'vibrate_with_pattern');

    //cancel any existing vibrations with param 0
    createActionButton('* Cancel vibration with 0', function() {

        if (!vibrateOn)
        {
            longVibrate();
            vibrateOn = true;
        }
        else
        {
            cancelWithZero();
            resetVibrateOn();
            clearTimeout(timeout); //clear the timeout since user has canceled the vibrate
        }
    }, 'cancel_zero');

    //cancel any existing vibrations with param []
    createActionButton('* Cancel vibration with []', function() {

        if (!vibrateOn)
        {
            longVibrate();
            vibrateOn = true;
        }
        else
        {
            cancelWithEmpty();
            resetVibrateOn();
            clearTimeout(timeout); //clear the timeout since user has canceled the vibrate
        }
    }, 'cancel_array');
};
