// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../src/assets/rem'
import './assets/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import { Button,Col,Row,Search,Tab,Tabs,Sticky,Swipe, SwipeItem,Grid, GridItem
  ,Tabbar, TabbarItem,Icon ,Sidebar, SidebarItem ,PullRefresh 
} from 'vant'


Vue.config.productionTip = false
Vue.use(Button).use(Col).use(Row).use(Search).use(Tab).use(Tabs).use(Sticky).use(Swipe).use(SwipeItem)
.use(Grid).use(GridItem).use(TabbarItem).use(Tabbar).use(Icon).use(Sidebar).use(SidebarItem).use(PullRefresh )
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
