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

[![Build Status](https://travis-ci.org/apache/cordova-plugin-vibration.svg)](https://travis-ci.org/apache/cordova-plugin-vibration)

Este plugin está de acordo com as especificações da W3C http://www.w3.org/TR/vibration/

Este plugin proporciona um modo simples de vibrar o dispositivo.

Este plugin define objetos globais como `navigator.vibrate`.

Ele funcionará apenas após ocorrer o evento `deviceready`. Abaixo há um exemplo mostrando como aguardar a execução do `deviceready` até que o dispositivo encontre-se disponível para executar o vibrate.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.vibrate);
    }
    

## Instalação

    cordova plugin add cordova-plugin-vibration
    

## Plataformas suportadas

navigator.vibrate,  
navigator.notification.vibrate - Amazon Fire OS - Android - BlackBerry 10 - Firefox OS - iOS - Windows Phone 7 e 8 - Windows (Windows Phone 8.1)

navigator.notification.vibrateWithPattern  
navigator.notification.cancelVibration - Android - Windows Phone 8 - Windows (Windows Phone 8.1)

## vibrate (recomendado)

Esta função tem duas diferentes funcionalidades baseadas nos parâmetros passados para ela.

### Vibrando o dispositivo

Para vibrar o dispositivo por um determinado tempo, é necessário informar o tempo como parâmetro.

    navigator.vibrate(time)
    
ou

    navigator.vibrate([time])
    

-**time**: milisegundos para vibrar o dispositivo. *(Número)*

#### Exemplo

    // Vibrar por 3 segundos
    navigator.vibrate(3000);
    
    // Vibrar por 3 segundos
    navigator.vibrate([3000]);
    

#### Particularidades do IOS

  * **time**: ignora o tempo especificado e vibra por um período de tempo pré-estabelecido.
    
    navigator.vibrate(3000); // 3000 é ignorado

#### Windows e particularidades do Blackberry
    
    navigator.vibrate(8000); // Irá parar em 5000 ms

### Vibrar com padrão (Android e Windows somente)

Vibra o dispositivo com um padrão determinado

    navigator.vibrate(padrao);   
    

  * **padrao**: sequência de duração (em milissegundos) que deseja ativar ou desativar o modo vibrar. *(Matriz de números)*

#### Exemplo

    // Vibrar por 1 segundo
    // Aguarde por 1 segundo
    // Vibrar for 3 segundos
    // Aguarde for 1 segundo
    // Vibrar for 5 segundos
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
    

### Cancelar o vibrar (não soportado no iOS)

Imadiatamente cancela qualquer vibração em execução.

    navigator.vibrate(0)
    

o

    navigator.vibrate([])
    

o

    navigator.vibrate([0])
    

Passando um parâmetro de 0, uma matriz vazia ou uma matriz com um elemento de valor 0 se cancelará qualquer vibração.

## *Notification.Vibrate (obsoleto)

Vibra o dispositivo com dada quantidade de tempo.

    navigator.notification.vibrate(time)
    

  * **time**: milisegundos a vibrar o dispositivo. *(Número)*

### Exemplo

    Vibrar por 2.5 segundos navigator.notification.vibrate(2500);
    

### iOS particularidades

  * **time**: ignora o tempo especificado e vibra por um tempo pré estabelecido.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 é ignorado
        

## *Notification.vibrateWithPattern (obsoleto)

Vibra o dispositivo com um padrão determinado.

    navigator.notification.vibrateWithPattern(padrao, repetir)
    

  * **padrao**: sequência de duração (em milissegundos) que deseja ativar ou desativar o modo vibrar. *(Matriz de números)*
  * **repetir**: índice opcional na matriz de padrões na qual começa repetindo (se repete até que seja cancelado), o -1 para a repetição (por default). *(Número)*

### Exemplo

    // Imediatamente inicia vibrando
    // vibra por 100ms,
    // aguarda 100ms,
    // vibra por 200ms,
    // aguarda 100ms,
    // vibra por 400ms,
    // aguarda 100ms,
    // vibra por 800ms,
    // (Não repete)
    navigator.notification.vibrateWithPattern([0, 100, 100, 200, 100, 400, 100, 800]);
    

## *Notification.cancelVibration (obsoleto)

Imediatamente cancela qualquer vibração atualmente em execução.

    navigator.notification.cancelVibration()
    

* Nota: de acordo com as especificação W3C, use os métodos indicados para a eliminação do vibrar.