---
title: Vibration
description: Vibrate the device.
---
<!--
# license: Licensed to the Apache Software Foundation (ASF) under one
#         or more contributor license agreements.  See the NOTICE file
#         distributed with this work for additional information
#         regarding copyright ownership.  The ASF licenses this file
#         to you under the Apache License, Version 2.0 (the
#         "License"); you may not use this file except in compliance
#         with the License.  You may obtain a copy of the License at
#
#           http://www.apache.org/licenses/LICENSE-2.0
#
#         Unless required by applicable law or agreed to in writing,
#         software distributed under the License is distributed on an
#         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#         KIND, either express or implied.  See the License for the
#         specific language governing permissions and limitations
#         under the License.
-->

# cordova-plugin-vibration

[![Android Testsuite](https://github.com/apache/cordova-plugin-vibration/actions/workflows/android.yml/badge.svg)](https://github.com/apache/cordova-plugin-vibration/actions/workflows/android.yml) [![Chrome Testsuite](https://github.com/apache/cordova-plugin-vibration/actions/workflows/chrome.yml/badge.svg)](https://github.com/apache/cordova-plugin-vibration/actions/workflows/chrome.yml) [![iOS Testsuite](https://github.com/apache/cordova-plugin-vibration/actions/workflows/ios.yml/badge.svg)](https://github.com/apache/cordova-plugin-vibration/actions/workflows/ios.yml) [![Lint Test](https://github.com/apache/cordova-plugin-vibration/actions/workflows/lint.yml/badge.svg)](https://github.com/apache/cordova-plugin-vibration/actions/workflows/lint.yml)

This plugin provides a way to vibrate the device. Its API aligns with the W3C vibration specification at http://www.w3.org/TR/vibration/

The plugin defines a global object/method `navigator.vibrate`. Although in the global scope, it is not available until after the `deviceready` event.

```javascript
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}
```

## Installation

```console
cordova plugin add cordova-plugin-vibration
```

## Supported Platforms

- iOS
- Android  
  The Android webview (API level 19 and up) supports the [W3C Vibration API](https://www.w3.org/TR/vibration/) natively, so no Android specific implementation in this plugin is necessary.

## navigator.vibrate

This function has three different functionalities based on parameters passed to it:

### Standard vibrate

Vibrates the device for a given amount of time.

```javascript
navigator.vibrate(time)
```
or
```javascript
navigator.vibrate([time])
```

- __time__: Milliseconds to vibrate the device. _(Number)_

#### Example

```javascript
// Vibrate for 3 seconds
navigator.vibrate(3000);

// Vibrate for 3 seconds
navigator.vibrate([3000]);
```

#### Quirks

##### iOS Quirks

- __time__: Ignores the specified time and vibrates for a pre-set amount of time.

    ```javascript
    navigator.vibrate(3000); // 3000 is ignored
    ```

##### Android Quirks

> Calls to `navigator.vibrate` will immediately return `false` if user hasn't tapped on the frame or any embedded frame yet. 

See https://www.chromestatus.com/feature/5644273861001216

### Vibrate with a pattern

Vibrates the device with a given pattern

```javascript
navigator.vibrate(pattern);
```
- __pattern__: Sequence of durations (in milliseconds) for which to turn on or off the vibrator. _(Array of Numbers)_

#### Example

```javascript
// Vibrate for 1 second
// Wait for 1 second
// Vibrate for 3 seconds
// Wait for 1 second
// Vibrate for 5 seconds
navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
```

#### Quirks

- Not supported on iOS

### Cancel vibration

Immediately cancels any currently running vibration.
```javascript
navigator.vibrate(0)
```
or
```javascript
navigator.vibrate([])
```
or
```javascript
navigator.vibrate([0])
```
Passing in a parameter of 0, an empty array, or an array with one element of value 0 will cancel any vibrations.

#### Quirks

- Not supported on iOS
