
import Vue from 'vue'
import App from './app.vue'

import './assets/styles/foo.css'
import './assets/styles/bar.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root);