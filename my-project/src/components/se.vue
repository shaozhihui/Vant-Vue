<template>
    <div>
        <!-- 搜索页面头部搜索框 -->
        <div class="Select_top">
            <van-search  class="Select_search"
            v-model="sear" 
            placeholder="搜索商品, 共72766款好物" />  
            <span @click="back">取消</span>
        </div>
       <!-- 搜索页面推荐盒子 -->
       <div class="Select_box">
           <div class="conten_top">热门搜索</div>
           <div class="content_btnwarp">
               <div class="content_btn" v-for="(item,inx) in btnList" :key="inx">{{item}}</div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name:'se',
    data(){
        return{
            sear:'',
            btnList:['冰能10元红包','月饼','拖鞋','被子','行李箱','毛巾','电动牙刷','男士内裤','人体工学椅','乳胶枕','咖啡']
        }
    },
    methods:{
        
        back:function(){
            this.$router.go(-1);
            this.$store.commit('show')
        }  
    }  
}
</script>
<style scoped>
.Select_top{
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 .9375rem;
    height: 2.8125rem;
   
}
.Select_search{
    height: 1.75rem;
    padding: 0;
    width: 87%;
}
.Select_search div{
    height: 1.75rem;
    line-height: .9375rem;
}

.Select_top span{
    width: 1.75rem;
    height: 1.3125rem;
    margin-left: .9375rem;
    font-size: .875rem;
}
.Select_box{
    padding: 0 .9375rem .9375rem .9375rem;
    background-color: #fff;
    height: 11.4375rem;
    font-size: .875rem;
}
.conten_top{
    color: #999;
    height: 2.8125rem;
    line-height: 2.8125rem;
}
.content_btnwarp{
    display: flex;
    flex-wrap: wrap;
}
.content_btn{
    width: auto;
    padding: 0 .46875rem;
    margin: 0 1rem 1rem 0;
    height: 1.5625rem;
    border: 1px solid #999;
    line-height: 1.5625rem;
    border-radius: .3125rem;color: #333;
}
</style>