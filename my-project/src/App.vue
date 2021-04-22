<template>
  <div id="app">
    <router-view/>
    <!-- 底部导航页 -->
    <van-tabbar v-model="active" route v-show="this.$store.state.TabShowData">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search"  icon="search">分类</van-tabbar-item>
      <van-tabbar-item replace to="/frends"  icon="friends-o">值得买</van-tabbar-item>
      <van-tabbar-item replace to="/shopcar"  icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user"  icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import search from './components/search'
export default {
  name: 'App',
  components: {search},
  data(){
    return{
      active:'',
      tabshow:true,
      chuilddata:''
    }
  },
  methods:{
     increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style scoped>
#app{
  background-color: #EEEEEE;
  height: 100%;
}
.van-tabbar--fixed {
  border-top: #EEEEEE;
}
.van-tabbar-item--active{
  color: red;
}
</style>
