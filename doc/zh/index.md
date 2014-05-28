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

這個外掛程式提供了一種方法，振動設備。

## 安裝

    cordova plugin add org.apache.cordova.vibration
    

## 支援的平臺

*   亞馬遜火 OS
*   Android 系統
*   黑莓 10
*   火狐瀏覽器作業系統
*   iOS
*   Windows Phone 7 和 8

## notification.vibrate

為指定的時間量振動設備。

    navigator.notification.vibrate(time)
    

*   **時間**： 毫秒振動設備。*（人數）*

## 示例

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);
    

## iOS 的怪癖

*   **時間**： 忽略指定的時間和震動的預設置的時間量。
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored