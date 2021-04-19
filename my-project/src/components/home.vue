<template>
  <div class="hello">
    <!-- 头部粘性布局 -->
    <van-sticky>
      <!-- 头部搜索框 -->
      <van-row>
        <van-col span="5">
          <span class="logo"></span>
        </van-col>
        <van-col span="15">
          <van-search 
          v-model="sear" 
          placeholder="搜索商品, 共72766款好物" />
        </van-col>
        <van-col span="4"><van-button color="red" plain>登录</van-button></van-col>
      </van-row>
      <!-- 滚动的tab按钮列表 -->
      <van-tabs>
        <van-tab v-for="(item,index) in TabBtnList" :key="index" :title="item"></van-tab>
      </van-tabs>
    </van-sticky>

    <!-- swipe轮播部分 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item,inx) in ImgList" :key="inx"><img :src="item" alt="" width="100%"></van-swipe-item>
    </van-swipe>
    <!-- 滚动条下的广告 -->
    <van-row3 class="service_info">
      <van-col span="8"> <i class="icon icon_1"></i> <span class="R_banner">网易自营品牌</span></van-col>
      <van-col span="8"> <i class="icon icon_2"></i> <span class="R_banner">30天无忧发货</span></van-col>
      <van-col span="8"> <i class="icon icon_3"></i> <span class="R_banner">48小时快速退款</span></van-col>
    </van-row3>
    <!-- Grid分类列表 -->
    <van-grid :column-num="5" :border="false" :gutter="1">
      <van-grid-item   v-for="(value,inx) in ProductList" :key="inx">
        <img class="goods_img" :src="value.ImgSrc" alt="">
        <p class="goods_p">{{value.text}}</p>
      </van-grid-item>
    </van-grid>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      sear:'',
      TabBtnList:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色'],
      ImgList:[
        'https://yanxuan.nosdn.127.net/2e376bfa18d4494d3cd6034e551b0961.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/3249dee6892838609822137012bf7b5f.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/3860d7ee2a0f3ba9db9530b905bc8335.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/797ac4f651c025307af1ca61544d77c3.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ],
      ProductList:[
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
          'text':'新品首发'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
          'text':'居家生活'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
          'text':'服饰鞋包'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
          'text':'美食酒水'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
          'text':'个护清理'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
          'text':'母婴亲子'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
          'text':'运动旅行'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
          'text':'数码家电'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
          'text':'全球特色'
        },
        {
          'ImgSrc':'https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
          'text':'好货抄底'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.van-row{
  padding: .475rem .875rem;
}
.logo{
  display: inline-block;
  height: 1.3rem;
  margin: .16rem 0 .16rem 0;
  width: 93%;
  background-image: url(../assets/top.png);
  background-size: 7.5rem 6.5rem;
}
.van-search .van-cell{
  padding: 0;
  background-color: #ededed;
  color: #666;
  border-radius:.18rem ;
}
.van-search{
  height: 2.3rem;
  padding: 0;
}
.van-search__content{
  padding: 0;
}
.van-field__control{
  height: 2.4rem !important;
  color: #666;
}
.van-button--normal{
  height: 1.25rem;
  width: 2.3125rem;
  font-size: 0.3rem;
  padding: 0;
  border-radius: .3125rem;
}
.van-button{ 
  height: 2rem;
  width: 3.3125rem;
  margin-left: .625rem;
  text-align: center;
  font-size: .75rem;
}
 .my-swipe  {
  position: relative;
  height: 12.33rem;
  }
  .van-swipe-item{
    position: relative;
    height: 12.33rem;
  }
    .van-swipe-item img{
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.service_info{
  text-align: center;height: 3rem;line-height: 3rem;padding: 0;
}
.service_info i.icon{
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 1.333333rem;
  height: 1.333333rem;
  vertical-align: middle;
}
.icon_1{
  background-image: url('../assets/banner_1.png');
}
.icon_2{
  background-image: url('../assets/banner_2.png');
}
.icon_3{
  background-image: url('../assets/banner_3.png');
}
.goods_img{
  width: 4.583333rem;
}
.goods_p{
  margin-top: .833333rem;
}
</style>