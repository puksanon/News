import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Axios from 'axios'
import FlagIcon from 'vue-flag-icon'
import VueVisible from 'vue-visible'
import VueProgressiveImage from 'vue-progressive-image' // https://www.vuetoolbox.com/projects/vue-progressive-image
import VueParticles from 'vue-particles'
import Veevalidate from 'vee-validate'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);
Vue.use(Veevalidate)
Vue.use(VueParticles)
Vue.use(VueProgressiveImage)
Vue.use(FlagIcon)
Vue.use(VueVisible)
Vue.use(VueAxios, Axios)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
