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

このプラグイン W3C 振動仕様 http://www.w3.org/TR/vibration/ に準拠しています。

このプラグインはデバイスを振動させる手段を提供します。

## インストール

    cordova plugin add org.apache.cordova.vibration
    

## サポートされているプラットフォーム

navigator.vibrate  
navigator.notification.vibrate
- Amazon Fire OS
- Android
- Blackberry 10
- Firefox OS
- iOS
- Windows Phone 7 及び 8

navigator.notification.vibrateWithPattern、  
navigator.notification.cancelVibration 
- Android

## 振動 (推奨)

この関数は渡されたパラメーターに基づいて 3 つの機能を提供します。

### 標準的な振動

一定時間デバイスが振動します。

    navigator.vibrate(time)
    

または

    navigator.vibrate([time])
    

-**time**: デバイスを振動させる時間(ミリ秒)。*(数値)*

#### 例

    // 3秒間振動する
    navigator.vibrate(3000);
    
    // 3秒間振動する
    navigator.vibrate([3000]);
    

#### iOS の癖

*   **time**: 指定された時間を無視しプリセットされた時間だけ振動します。
    
    navigator.vibrate(3000); // 3000 という値は無視される

#### WindowsとBlackberryの癖

*   **time**: 時間は5000ms(5秒)、最小 1ms
    
    navigator.vibrate(8000); // 5000msに丸められる

### （AndroidとWindowsのみ) パターンで振動。

特定のパターンでデバイスが振動します。

    navigator.vibrate(pattern);   
    

*   **pattern**: 振動をオンまたはオフにする時間 (ミリ秒単位)のシーケンス *(数値の配列)*

#### 例

    // 1秒振動
    // 1秒待つ
    // 3秒振動
    // 1秒待つ
    // 5秒振動
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
    
#### Windows Phone 8の癖

*  パターンを指定してもデフォルトの時間の振動になる。

### 振動のキャンセル (iOS ではサポートされていません)

現在実行中の振動を直ちにキャンセルします。

    navigator.vibrate(0)
    

または

    navigator.vibrate([])
    

または

    navigator.vibrate([0])
    

パラメーターとして0、空の配列または0の値の要素を1つだけ持つ配列は任意の振動をキャンセルします。。

## *notification.vibrate (非推奨)

一定時間デバイスが振動します。

    navigator.notification.vibrate(time)
    

*   **time**: デバイスを振動させる時間(ミリ秒)。*(数値)*

### 例

    // 2.5秒振動する
    navigator.notification.vibrate(2500);
    

### iOS の癖

*   **time**: 指定された時間を無視しプリセットされた時間だけ振動します。
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500は無視される
        

## *notification.vibrateWithPattern (非推奨)

特定のパターンでデバイスが振動します。

    navigator.notification.vibrateWithPattern(pattern, repeat)
    

*   **pattern**: 振動をオンまたはオフにする時間 (ミリ秒単位)のシーケンス *(数値の配列)*

*   **repeat**: 省略可能なパターン配列のインデックスで、繰り返しの際の頭出しの位置を指定。キャンセルされるまで繰り返す。繰り返しなし (既定値) の場合は-1。*(数値)*

### 例

    // すぐに振動を開始する
    // 100ms振動,
    // 100ms待つ,
    // 200ms振動,
    // 100ms待つ,
    // 400ms振動,
    // 100ms待つ,
    // 800ms振動,
    // (繰り返しなし)
    navigator.notification.vibrateWithPattern([0, 100, 100, 200, 100, 400, 100, 800]);
    

## *notification.cancelVibration (非推奨)

現在実行中の振動を直ちにキャンセルします。

    navigator.notification.cancelVibration()
    

* 注 - w3cの仕様に合わせるため、*のついたメソッドはフェーズアウトします。