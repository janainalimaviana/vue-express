/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import { firebaseApp } from './firebase'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(firebaseApp) 
    .use(router)
    .use(pinia)
}