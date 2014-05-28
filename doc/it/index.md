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

Questo plugin consente di vibrare il dispositivo.

## Installazione

    cordova plugin add org.apache.cordova.vibration
    

## Piattaforme supportate

*   Amazon fuoco OS
*   Android
*   BlackBerry 10
*   Firefox OS
*   iOS
*   Windows Phone 7 e 8

## Notification.vibrate

Vibra il dispositivo per il periodo di tempo specificato.

    navigator.notification.vibrate(time)
    

*   **tempo**: millisecondi a vibrare il dispositivo. *(Numero)*

## Esempio

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);
    

## iOS stranezze

*   **tempo**: ignora il tempo specificato e vibra per un tempo pre-impostato.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored