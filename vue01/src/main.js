import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import Ads from 'vue-google-adsense'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
