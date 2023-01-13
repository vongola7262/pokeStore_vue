import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { currency, date } from './methods/filter'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$filter = {
  currency
}
app.config.globalProperties.$filterdate = {
  date
}
app.component('LoadingPage', Loading)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
