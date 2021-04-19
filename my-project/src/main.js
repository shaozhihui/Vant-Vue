// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './assets/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Col,Row,Search,Tab,Tabs,Sticky,Swipe, SwipeItem,Grid, GridItem} from 'vant'

Vue.config.productionTip = false
Vue.use(Button).use(Col).use(Row).use(Search).use(Tab).use(Tabs).use(Sticky).use(Swipe).use(SwipeItem);
Vue.use(Grid).use(GridItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
