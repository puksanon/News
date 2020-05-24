import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store }  from './store'
import vuetify from "./plugins/vuetify";
import Axios from 'axios'
import Veevalidate from 'vee-validate'
import VueAxios from 'vue-axios'
import 'swiper/dist/css/swiper.css'
import VueSweetalert2 from 'vue-sweetalert2';
const fb = require ('./firebase/firebaseInit')
import 'sweetalert2/dist/sweetalert2.all.min.js'

Vue.use(Veevalidate)
Vue.use(VueAxios, Axios)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false;

/* eslint-disable no-new */
let app
 // eslint-disable-next-line
 fb.auth.onAuthStateChanged(user => {
   if (!app) {
     app =new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
})
