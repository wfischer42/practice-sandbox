import Vue from 'vue'
import App from '../standalone/App.vue'

const body = document.querySelector('body')
const anchor = document.createElement('div')

body.insertBefore(anchor, body.firstChild)
/* eslint-disable no-new */
new Vue({
  el: anchor,
  render: h => h(App)
})
