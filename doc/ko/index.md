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

이 플러그인에는 장치를 진동 하는 방법을 제공 합니다.

## 설치

    cordova plugin add org.apache.cordova.vibration
    

## 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   블랙베리 10
*   Firefox 운영 체제
*   iOS
*   Windows Phone 7과 8

## notification.vibrate

지정 된 시간 동안 장치를 진동.

    navigator.notification.vibrate(time)
    

*   **시간**: 진동 장치 (밀리초)입니다. *(수)*

## 예를 들어

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);
    

## iOS 단점

*   **시간**: 지정 된 시간을 무시 하 고 미리 설정 된 시간 동안 진동.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored