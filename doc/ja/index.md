<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->

# org.apache.cordova.vibration

このプラグインは W3C 振動仕様 http://www.w3.org/TR/vibration/ に準拠しています。

このプラグインは、デバイスを振動させる手段を提供します。

## インストール

    cordova plugin add org.apache.cordova.vibration
    

## サポートされているプラットフォーム

navigator.vibrate  
navigator.notification.vibrate 
- Amazon Fire OS
- Android
- BlackBerry 10
- Firefox OS
- iOS
- Windows Phone 7 及び 8

navigator.notification.vibrateWithPattern、  
navigator.notification.cancelVibration 
- Android
- Windows Phone 8

## 振動 (推奨)

この関数は、渡されたパラメーターに基づいた 3 つの異なる機能を持ちます。

### 標準的な振動

一定時間デバイスが振動します。

    navigator.vibrate(time)
    

または

    navigator.vibrate([time])
    

-**time**: ミリ秒、デバイスを振動させる。*(数値)*

#### 例

    // Vibrate for 3 seconds
    navigator.vibrate(3000);
    
    // Vibrate for 3 seconds
    navigator.vibrate([3000]);
    

#### iOS の癖

*   **time**: 指定された時間を無視しプリセットされた時間だけ振動します。
    
    navigator.vibrate(3000); // 3000 は無視される

#### Windows とブラックベリーの癖

*   **time**: 振動時間は最大5000ms (5秒)、最小 1ms
    
    navigator.vibrate(8000); // 5000msに丸められる

### パターンで振動(Android と Windows のみ)

与えられたパターンでデバイスが振動します。

    navigator.vibrate(pattern);   
    

*   **pattern**: シーケンスの継続時間 (ミリ秒単位) をオンまたはオフ、バイブします。*(数値の配列)*

#### 例

    // Vibrate for 1 second
    // Wait for 1 second
    // Vibrate for 3 seconds
    // Wait for 1 second
    // Vibrate for 5 seconds
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
    

### 振動のキャンセル (iOS ではサポートされていません)

現在実行中の振動を直ちにキャンセルします。

    navigator.vibrate(0)
    

または

    navigator.vibrate([])
    

または

    navigator.vibrate([0])
    

パラメータとして0、空の配列、または 0 の値の要素を 1 つ持つ配列を与えると全ての振動がキャンセルされます。

## *notification.vibrate (非推奨)

一定時間デバイスが振動します。

    navigator.notification.vibrate(time)
    

*   **time**: ミリ秒、デバイスを振動させる。*(数値)*

### 例

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);
    

### iOS の癖

*   **time**: 指定された時間を無視しプリセットされた時間だけ振動します。
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 は無視される
        

## *notification.vibrateWithPattern (非推奨)

与えられたパターンでデバイスが振動します。

    navigator.notification.vibrateWithPattern(pattern, repeat)
    

*   **pattern**: シーケンスの継続時間 (ミリ秒単位) をオンまたはオフ、バイブします。*(数値の配列)*
*   **repeat**: 省略可能な配列のインデックスのパターン （でしょう） を繰り返す取り消されるまで、繰り返しを開始するまたは反復なし (既定値) の場合は-1。*(数値)*

### 例

    // Immediately start vibrating
    // vibrate for 100ms,
    // wait for 100ms,
    // vibrate for 200ms,
    // wait for 100ms,
    // vibrate for 400ms,
    // wait for 100ms,
    // vibrate for 800ms,
    // (do not repeat)
    navigator.notification.vibrateWithPattern([0, 100, 100, 200, 100, 400, 100, 800]);
    

## *notification.cancelVibration (非推奨)

現在実行中の振動を直ちにキャンセルします。

    navigator.notification.cancelVibration()
    

* 注 - w3c の仕様に合わせるため、"*"のついたメソッドはそのうちなくなります。
