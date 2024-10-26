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
    const logMessage = (message, color = 'black') => {
        const log = document.getElementById('info');
        const logLine = document.createElement('div');
        logLine.style.color = color;
        logLine.innerHTML = message;
        log.appendChild(logLine);
    };

    const clearLog = () => (document.getElementById('info').innerHTML = '');

    // -------------------------------------------------------------------------
    // Vibrations
    // -------------------------------------------------------------------------

    const vibrateAction = (pattern, message) => {
        clearLog();
        navigator.vibrate(pattern);
        logMessage(message, 'green');
    };

    const cancelVibration = (method, timeoutId) => {
        method();
        resetVibrateOn();
        clearTimeout(timeoutId);
    };

    let timeout;
    let vibrateOn = false;

    const resetVibrateOn = () => (vibrateOn = false);

    // Action functions for various vibration tests
    const vibrateWithInt = () => vibrateAction(3000, 'navigator.vibrate(3000)');
    const vibrateWithArray = () => vibrateAction([3000], 'navigator.vibrate([3000])');
    const vibrateWithPattern = () => vibrateAction([1000, 2000, 3000, 2000, 5000], 'navigator.vibrate([1000, 2000, 3000, 2000, 5000])');
    const longVibrate = () => initiateLongVibration(60000, 'navigator.vibrate(60000)');
    const longVibrateWithPattern = () => initiateLongVibration([1000, 2000, 3000, 2000, 5000, 2000, 30000], 'navigator.vibrate([1000, 2000, 3000, 2000, 5000, 2000, 30000])', 45000);
    const multipleVibrations = () => initiateLongVibration(45000, 'navigator.vibrate(15000)\nnavigator.vibrate(45000)', 45000);

    const initiateLongVibration = (pattern, message, duration = 60000) => {
        clearLog();
        navigator.vibrate(pattern);
        vibrateOn = true;
        logMessage(message, 'green');
        timeout = setTimeout(resetVibrateOn, duration);
    };

    // HTML structure and button creation
    const vibrateTestsHTML = `
        <h1>Vibrate Tests</h1>
        <h3>Starred tests only work for Android and Windows.</h3>
        <h3>iOS ignores the time given for a vibrate.</h3>
        <div id="vibrate_int"></div>Expected result: Vibrate once for 3 seconds.
        <div id="vibrate_array"></div>Expected result: Vibrate once for 3 seconds.
        <div id="vibrate_with_pattern"></div>Expected result: Vibrate for 1s, pause for 2s, vibrate for 3s, pause for 2s, vibrate for 5s.
        <div id="cancel_zero"></div>Expected result: Press once to initiate vibrate for 60 seconds. Press again to cancel vibrate immediately.
        <div id="cancel_array"></div>Expected result: Press once to initiate vibrate for 60 seconds. Press again to cancel vibrate immediately.
        <div id="cancelWithPattern_zero"></div>Expected result: Press once to initiate vibrate with pattern for 45s. Press again to cancel vibrate immediately.
        <div id="cancelWithPattern_array"></div>Expected result: Press once to initiate vibrate with pattern for 45s. Press again to cancel vibrate immediately.
        <div id="cancelMultipleVibrations"></div>Expected result: Press once to initiate two vibrations simultaneously (one for 20s the other for 45s so total of 45s). Press again to cancel both vibrations immediately.`;

    contentEl.innerHTML = `<div id="info"></div>${vibrateTestsHTML}`;

    // Create action buttons for each vibration test
    const buttons = [
        { label: 'Vibrate with int', action: vibrateWithInt, id: 'vibrate_int' },
        { label: 'Vibrate with array', action: vibrateWithArray, id: 'vibrate_array' },
        { label: '* Vibrate with a pattern', action: vibrateWithPattern, id: 'vibrate_with_pattern' },
        { label: '* Cancel vibration with 0', action: () => toggleLongVibrate(longVibrate, cancelWithZero), id: 'cancel_zero' },
        { label: '* Cancel vibration with []', action: () => toggleLongVibrate(longVibrate, cancelWithEmpty), id: 'cancel_array' },
        { label: '* Cancel vibration with pattern with 0', action: () => toggleLongVibrate(longVibrateWithPattern, cancelWithZero), id: 'cancelWithPattern_zero' },
        { label: '* Cancel vibration with pattern with []', action: () => toggleLongVibrate(longVibrateWithPattern, cancelWithEmpty), id: 'cancelWithPattern_array' },
        { label: '* Cancel multiple vibrations', action: () => toggleLongVibrate(multipleVibrations, cancelWithZero), id: 'cancelMultipleVibrations' },
    ];

    buttons.forEach(({ label, action, id }) => createActionButton(label, action, id));

    function toggleLongVibrate(start, cancel) {
        if (!vibrateOn) {
            start();
        } else {
            cancelVibration(cancel, timeout);
        }
    }
};
