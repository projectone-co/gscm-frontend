/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      // console.log(
      //   'App is being served from cache by a service worker.\n' +
      //   'For more details, visit https://goo.gl/AFskqB'
      // )
    },
    registered () {
      // console.log('Service worker has been registered.')
    },
    cached () {
      // console.log('Content has been cached for offline use.')
    },
    updatefound () {
      // console.log('New content is downloading.')
    },
    updated () {
      // console.log('New content is available; please refresh.')
    },
    offline () {
      // console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

// const path = require('path');
// const { writeFileSync } = require('fs');
// // Provide OneSignalSDKWorker.js and OneSignalSDKUpdaterWorker.js
// const makeSW = (name, scripts) => {
//   const workerScript = scripts.map(i => `importScripts('${i}');`).join('\r\n');
//   writeFileSync(path.resolve(__dirname, '../dist', name), workerScript, 'utf-8');
// };
// const importScripts = [
//   `/service-worker.js?v=${Date.now()}`,
//   'https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js',
// ];
// makeSW('OneSignalSDKWorker.js', importScripts);
// makeSW('OneSignalSDKUpdaterWorker.js', importScripts);
