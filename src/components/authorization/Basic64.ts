import React from 'react';
import {Account, User} from "./IInterface"

var formdata = new FormData();

const requestOptions:RequestInit = {
  method: 'GET',
  redirect: 'follow',
  mode: 'no-cors'
};
var myHeaders = new Headers();



export function getAuthorizationAcceptBase64(login: string, password: string) {
  var authorization64 = btoa(login + ":" + password)
  myHeaders.append("Authorization", authorization64);

  fetch('https://postman-echo.com/cookies/set?', requestOptions)
    .then((response: Response) => response.text())
    .then((result: string) => console.log(result))
    .catch((error: any) => console.log('error', error));
  alert(JSON.stringify(login + ":" + password + " || Basie64:"+authorization64, null, 2))
}