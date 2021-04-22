import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import shopcar from '@/components/shopcar'
import user from '@/components/user'
import search from '@/components/search'
import frends from '@/components/frends'
import se from '@/components/se'
import searchProduct from '@/components/searchProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: 'home' },
    {
      path: '/home',name: 'home', component: home
    },{
      path:'/shopcar',name:'shopcar',component :shopcar
    },{
      path:'/user',name:'user',component :user
    },{
      path:'/search',name:'search',component :search,redirect:'/searchProduct',children:[
        {path:'/searchProduct',name:'searchProduct',component :searchProduct}
      ]
    },{
      path:'/frends',name:'frends',component :frends
    },{
      path:'/se',name:'se',component :se
    },{
      path:'/searchProduct',name:'searchProduct',component :searchProduct
    }
  ]
})
