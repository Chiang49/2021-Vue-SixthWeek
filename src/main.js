import { createApp } from 'vue'
// Vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// Vee-validate
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import router from './router'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
setLocale('zh_TW')

const app = createApp(App)

app.use(router)
// VueAxios 套件
app.use(VueAxios, axios)
// VeeValidate 套件元件註冊
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
