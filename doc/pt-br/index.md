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

# cordova-plugin-vibration

Este plugin está de acordo com as especificações da W3C http://www.w3.org/TR/vibration/

Este plugin proporciona maneiras de vibrar o dispositivo.

Este plugin define objetos globais em `navigator.vibrate`.

Este plugin só estará disponível para uso após o evento `deviceready`.

    document.addEventListener ("deviceready", onDeviceReady, false);
    function onDeviceReady() {console.log(navigator.vibrate)};
    

## Instalação

    cordova plugin add cordova-plugin-vibration
    

## Plataformas suportadas

Navigator.vibrate,  
Navigator.notification.vibrate - Amazon Fire OS - Android - BlackBerry 10 - Firefox OS - iOS - Windows Phone 7 e 8

navigator.notification.vibrateWithPattern,  
navigator.notification.cancelVibration - Android - Windows Phone 8

## vibrate

Esta função tem duas diferentes formas de funcionamento baseadas nos parâmetros passados para ela.

### Estado vibrar

Vibra o dispositivo por uma determinada parcela de tempo.

    Navigator.vibrate(tempo)
    

o

    Navigator.vibrate([tempo])
    

-**tempo**: milissegundos a vibrar o dispositivo. *(Número)*

#### Exemplo

    navigator.vibrate(3000) 3 segundos;
    
    navigator.vibrate([3000]) 3 segundos;
    

#### iOS particularidades

*   **tempo**: ignora o tempo especificado e vibra por um período pré-estabelecido.
    
    navigator.vibrate(3000); // 3000 é ignorado

#### particularidades do Windows e Blackberry

*   **tempo**: o tempo máximo suportado é de  5000ms (5s) e o mínimo 1ms
    
    navigator.vibrate(8000); // Irar pará quando chegar aos 5000

### Vibrar com um padrão estabelecido (Android e Windows somente)

Vibra o dispositivo com um padrão passado como parâmetro

    Navigator.vibrate(Padrao);   
    

*   **Padrao**: Sequência de durações (em milissegundos) que deseja ativar e desativar o modo vibrar. *(Matriz de números)*

#### Exemplo

    Vibrar durante 1 segundo / / esperar 1 segundo / / vibrar durante 3 segundos / / esperar 1 segundo / / vibrar por 5 segundos navigator.vibrate ([1000, 1000, 3000, 1000, 5000]);
    

#### Particularidades do Windows Phone 8

*   Vibrate(Padrao) Não respeita corretamente as vibrações por padrão

### Cancelar vibração (não soportada no iOS)

Inmediatamente cancela qualquer vibração atualmente em execução.

    Navigator.vibrate(0)
    

o

    Navigator.vibrate([])
    

o

    Navigator.vibrate([0])
    

Passando um parâmetro 0, uma matriz vazia ou uma matriz com um elemento de valor 0 se cancelará qualquer vibração.

## *Notification.vibrate (obsoleto)

Vibra o dispositivo por uma quantidade de tempo mediante um parâmetro com os milissegundos (igual ao Navigator.vibrate).

    Navigator.Notification.Vibrate(tempo)
    

*   **tempo**: milissegundos a vibrar o dispositivo. *(Número)*