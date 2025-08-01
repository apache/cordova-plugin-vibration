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

exports.defineManualTests = function (contentEl, createActionButton) {
    const logMessage = function (message, color) {
        const log = document.getElementById('info');
        const logLine = document.createElement('div');
        if (color) {
            logLine.style.color = color;
        }
        logLine.innerHTML = message;
        log.appendChild(logLine);
    };

    const clearLog = function () {
        const log = document.getElementById('info');
        log.innerHTML = '';
    };

    // -------------------------------------------------------------------------
    // Vibrations
    // -------------------------------------------------------------------------

    // new standard vibrate call that aligns to w3c spec with param long
    const vibrateWithInt = function () {
        clearLog();
        navigator.vibrate(3000);
        logMessage('navigator.vibrate(3000)', 'green');
    };

    // new standard vibrate call that aligns to w3c spec with param array
    const vibrateWithArray = function () {
        clearLog();
        navigator.vibrate([3000]);
        logMessage('navigator.vibrate([3000])', 'green');
    };

    // vibrate with a pattern using w3c spec
    const vibrateWithPattern = function () {
        clearLog();
        navigator.vibrate([1000, 2000, 3000, 2000, 5000]);
        logMessage('navigator.vibrate([1000, 2000, 3000, 2000, 5000])', 'green');
    };

    // cancel existing vibration using w3c spec navigator.vibrate(0)
    const cancelWithZero = function () {
        clearLog();
        navigator.vibrate(0);
        logMessage('navigator.vibrate(0)', 'green');
    };

    // cancel existing vibration using w3c spec navigator.vibrate([])
    const cancelWithEmpty = function () {
        clearLog();
        navigator.vibrate([]);
        logMessage('navigator.vibrate([])', 'green');
    };

    // reference to the timeout variable
    let timeout;

    // check whether there is an ongoing vibration
    let vibrateOn = false;

    // special long vibrate used to test cancel
    const longVibrate = function () {
        clearLog();
        navigator.vibrate(60000);
        vibrateOn = true;
        logMessage('navigator.vibrate(60000)', 'green');
        timeout = setTimeout(resetVibrateOn, 60000); // if user doesn't cancel vibrate, reset vibrateOn var after 60 seconds
    };

    // special long vibrate with pattern used to test cancel
    const longVibrateWithPattern = function () {
        clearLog();
        navigator.vibrate([1000, 2000, 3000, 2000, 5000, 2000, 30000]);
        vibrateOn = true;
        logMessage('navigator.vibrate([1000, 2000, 3000, 2000, 5000, 2000, 30000])', 'green');
        timeout = setTimeout(resetVibrateOn, 45000); // if user doesn't cancel vibrate, reset vibrateOn var after 45 seconds
    };

    // initiate two vibrations to test cancel
    const multipleVibrations = function () {
        clearLog();
        navigator.vibrate(20000);
        navigator.vibrate(45000);
        vibrateOn = true;
        logMessage('navigator.vibrate(15000)\nnavigator.vibrate(45000)', 'green');
        timeout = setTimeout(resetVibrateOn, 45000); // if user doesn't cancel vibrate, reset vibrateOn var after 45 seconds
    };

    function resetVibrateOn () {
        vibrateOn = false;
    }

    const vibrate_tests =
        '<h1>Vibrate Tests</h1>' +
        '<h3>Starred tests only work for Android. </h3>' +
        '<h3>iOS ignores the time given for a vibrate </h3>' +
        '<p/> <div id="vibrate_int"></div>' +
        'Expected result: Vibrate once for 3 seconds.' +
        '<p/> <div id="vibrate_array"></div>' +
        'Expected result: Vibrate once for 3 seconds.' +
        '<p/> <div id="vibrate_with_pattern"></div>' +
        'Expected result: Vibrate for 1s, pause for 2s, vibrate for 3s, pause for 2s, vibrate for 5s.' +
        '<p/> <div id="cancel_zero"></div>' +
        'Expected result: Press once to initiate vibrate for 60 seconds. Press again to cancel vibrate immediately.' +
        '<p/><div id="cancel_array"></div>' +
        'Expected result: Press once to initiate vibrate for 60 seconds. Press again to cancel vibrate immediately.' +
        '<p/> <div id="cancelWithPattern_zero"></div>' +
        'Expected result: Press once to initiate vibrate with pattern for 45s. Press again to cancel vibrate immediately.' +
        '<p/> <div id="cancelWithPattern_array"></div>' +
        'Expected result: Press once to initiate vibrate with pattern for 45s. Press again to cancel vibrate immediately.' +
        '<p/> <div id="cancelMultipleVibrations"></div>' +
        'Expected result: Press once to initiate two vibrations simultaneously (one for 20s the other for 45s so total of 45s). Press again to cancel both vibrations immediately.';

    contentEl.innerHTML = '<div id="info"></div>' + vibrate_tests;

    // standard vibrate with new call param int
    createActionButton(
        'Vibrate with int',
        function () {
            vibrateWithInt();
        },
        'vibrate_int'
    );

    // standard vibrate with new call param array
    createActionButton(
        'Vibrate with array',
        function () {
            vibrateWithArray();
        },
        'vibrate_array'
    );

    // vibrate with a pattern
    createActionButton(
        '* Vibrate with a pattern',
        function () {
            vibrateWithPattern();
        },
        'vibrate_with_pattern'
    );

    // cancel any existing vibrations with param 0
    createActionButton(
        '* Cancel vibration with 0',
        function () {
            if (!vibrateOn) {
                longVibrate();
            } else {
                cancelWithZero();
                resetVibrateOn();
                clearTimeout(timeout); // clear the timeout since user has canceled the vibrate
            }
        },
        'cancel_zero'
    );

    // cancel any existing vibrations with param []
    createActionButton(
        '* Cancel vibration with []',
        function () {
            if (!vibrateOn) {
                longVibrate();
            } else {
                cancelWithEmpty();
                resetVibrateOn();
                clearTimeout(timeout); // clear the timeout since user has canceled the vibrate
            }
        },
        'cancel_array'
    );

    // cancel vibration with pattern with param 0
    createActionButton(
        '* Cancel vibration with pattern with 0',
        function () {
            if (!vibrateOn) {
                longVibrateWithPattern();
            } else {
                cancelWithZero();
                resetVibrateOn();
                clearTimeout(timeout); // clear the timeout since user has canceled the vibrate
            }
        },
        'cancelWithPattern_zero'
    );

    // cancel vibration with pattern with param []
    createActionButton(
        '* Cancel vibration with pattern with []',
        function () {
            if (!vibrateOn) {
                longVibrateWithPattern();
            } else {
                cancelWithEmpty();
                resetVibrateOn();
                clearTimeout(timeout); // clear the timeout since user has canceled the vibrate
            }
        },
        'cancelWithPattern_array'
    );

    // cancel multiple vibrations
    createActionButton(
        '* Cancel multiple vibrations',
        function () {
            if (!vibrateOn) {
                multipleVibrations();
            } else {
                cancelWithZero();
                resetVibrateOn();
                clearTimeout(timeout); // clear the timeout since user has canceled the vibrate
            }
        },
        'cancelMultipleVibrations'
    );
};
