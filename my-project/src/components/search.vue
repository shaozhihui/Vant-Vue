<template>
    <div id="Search">
        <!-- 头部搜索框 -->
        <van-sticky>
            <div class="S_head">
                <div @click="go" class="S_head_select"><van-icon name="search" color="#666666" size="1rem" class="S_head_ic"/> 搜索商品，共70692好物</div>
            </div>
        </van-sticky>
        <!-- content主体部分 -->
        <van-row class="Search_content">
            <van-col span="5" class="Search_content_left">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item v-for="(item,inx) in SearchList" :key="inx" :title="item" @click="change(inx)"/>
                </van-sidebar>
            </van-col>
            <van-col span="19" class="Search_right">
                <searchProduct/>
            </van-col>
        </van-row>
    </div>
</template>

<script>

import  searchProduct from "./searchProduct";
export default {
    name:'search',
    components:{searchProduct},
    data(){
        return{
            listInx:'0',
            activeKey:'',
            isLoading:'',
            SearchList:['推荐专区','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','严选全球']
         
          
        }
    },
    methods:{
        change:function(inx){
            this.listInx = inx;
            this.$store.state.searchinx = inx;
        },
        go:function(){
            this.$router.push({path:"/se"})
            this.$store.commit('hide')
        }
    }
}
</script>
<style scoped>
#Search{
    height: 100%;
}
.S_head{
    background-color: #fff;
    height: 2.8125rem;
    line-height: 2.8125rem;
    padding: 0 .9375rem;
    display: flex;
    align-items: center;
     border-bottom: 1px solid #EEEEEE;
}
.S_head_select{
    width: 100%;
    height: 1.75rem;
    line-height: 1.75rem;
    text-align: center;
    font-size: .875rem;
    color: #666;
    background-color: #ededed;
    border-radius: .3125rem;
}
.S_head_ic{
   vertical-align: middle;
   
}
.van-sidebar{
    position: fixed;
    padding: .625rem 0;
    border-right: 1px solid #EEEEEE;height: 100%;
}
.van-sidebar-item {
    background-color: #fff;
    padding: 10px 0;
    text-align: center;
}
.van-sidebar-item--select{
    color: #ab2b2b;
}
.Search_content{
    height: 100%;
    background-color: #fff;
}
.van-col--5{
    height: 100%;
}

.van-swipe-item{
    width: 100%;
}
.Search_right{
   
    padding: .9375rem .9375rem .9375rem .9375rem;
}
.Search_right_box_top{
    margin-top: .9375rem;
    border-bottom: 1px solid #d9d9d9;
    font-size: .875rem;
    height: 1.625rem;
    line-height: 1.625rem;
    color: black;
    white-space: nowrap;
    padding-bottom: .25rem;
    font-weight: 700;
}
.van-grid-item{
    padding: 0;
    width: 4.5rem;
}
</style>