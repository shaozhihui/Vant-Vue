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
          <van-search @click="Goselect"
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
      <van-swipe-item v-for="(item,inx) in ImgList" :key="inx"><img :src="item" alt=""></van-swipe-item>
    </van-swipe>
    <!-- 滚动条下的广告 -->
    <van-row class="service_info">
      <van-col span="8"> <i class="icon icon_1"></i> <span class="R_banner">网易自营品牌</span></van-col>
      <van-col span="8"> <i class="icon icon_2"></i> <span class="R_banner">30天无忧发货</span></van-col>
      <van-col span="8"> <i class="icon icon_3"></i> <span class="R_banner">48小时快速退款</span></van-col>
    </van-row>
    <!-- Grid分类列表 -->
    <van-grid :column-num="5" :border="false" :gutter="1">
      <van-grid-item   v-for="(value,inx) in ProductList" :key="inx">
        <img class="goods_img" :src="value.ImgSrc" alt="">
        <p class="goods_p">{{value.text}}</p>
      </van-grid-item>
    </van-grid>
    <!-- banner图片区域 -->
    <div class="Img_Banner">
      <img src="https://yanxuan.nosdn.127.net/b2b424826a63b41dc28610c4dee2747e.gif?imageView&quality=75&type=jpg" alt="" width="100%">
      <div>
        <img src="https://yanxuan.nosdn.127.net/019dfc6498cee49878e1ad6c96ca86bd.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="" width="48%">
        <img src="https://yanxuan.nosdn.127.net/a9ef5ffc2c98d472419cb99e2e787f6e.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="" width="48%">
      </div>
    </div>
    <!-- 新人专享模块 -->
    <div class="News_shopping productWarp">
      <p class="News_shopping_Top">新人专享礼</p>
      <div class="News_shoppign_grid">
        <div class="News_shopping_box">
            <p class="News_shopping_left_top">新人专享礼包</p>
            <div class="News_left_imgwarp">
               <img class="News_left_img" src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="" width="100%">
            </div>
        </div>
        <div class="News_shopping_box New_right_box">
            <p>福利社</p>
            <p class="News_shopping_box_subtitle">今日特价</p>
            <img class="News_right_img" src="https://yanxuan-item.nosdn.127.net/ff10d4706b3f118bd24b1bbb16315180.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="News_shopping_box New_right_box">
            <p>新人拼团</p>
            <p class="News_shopping_box_tag">1元起包邮</p>
            <img class="News_right_img" src="https://yanxuan-item.nosdn.127.net/e604f890043afb46d72b45208c830097.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
      </div>
    </div>
    <!-- 美目热销 -->
    <div class="Hots_List productWarp">
      <p class="Hots_List_top">美目热销榜</p>
      <div class="Hots_List_warp">
        <div class="Hots_List_big">
          <p class="Hots_List_title">热销榜</p>
          <img src="https://yanxuan-item.nosdn.127.net/91a264d84fed57f97c48dc107370e941.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div class="Hots_List_big">
          <p class="Hots_List_title">好评榜</p>
          <img src="https://yanxuan-item.nosdn.127.net/0b4433ce4ab8260673363e80d65a8a52.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
        </div>
        <div v-for="(item,inx) in HotsList" :key="inx">
          <p class="Hots_List_name">{{item.tex}}</p>
          <div class="Host_List_imgwarp">
            <img class="Host_List_img" :src="item.imgS" alt="">
          </div>
        </div>
       
      </div>
    </div>
    <!-- 底部特价 -->
    <div class="Sale_product productWarp">
      <div class="sale_product_box">
        <p class="sale_product_title">奥莱特卖</p>
        <p class="sale_product_tag">全场2折起</p>
        <div class="sale_product_imgwarp">
          <img src="https://yanxuan-item.nosdn.127.net/fff906909ce1726a873640ac92b5aacb.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/53cc1ff8dfa3747c5dbb203c8fa63d54.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
        </div>
      </div>
      <div class="sale_product_box">
        <p class="sale_product_title">严选众筹</p>
        <p class="sale_product_tag color">探索美与用</p>
        <div class="sale_product_imgwarp">
          <img src="https://yanxuan-item.nosdn.127.net/732d8d3c72bc02a4ba5db28559a421ec.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/d4f656cd22f3b2c32d1afb368abd699c.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
        </div>
      </div>
    </div>
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
      ],
      HotsList:[
        {
          tex:'服饰鞋包榜',
          imgS:'https://yanxuan-item.nosdn.127.net/2a3d5179df95e6c5ba6472704a2b0921.png?quality=75&type=webp&imageView&thumbnail=200x200'
        },
        {
          tex:'居家生活榜',
          imgS:'https://yanxuan-item.nosdn.127.net/cf73b6183045b19cebd05c8bbd64ce85.png?quality=75&type=webp&imageView&thumbnail=200x200'
        },
        {
          tex:'美食酒水榜',
          imgS:'https://yanxuan-item.nosdn.127.net/238eee02ce11fffc3fc58f54b5b101c6.png?quality=75&type=webp&imageView&thumbnail=200x200'
        },
        {
          tex:'数码家电榜',
          imgS:'https://yanxuan-item.nosdn.127.net/d3995146d91bb8d75f39f397da78caa7.png?quality=75&type=webp&imageView&thumbnail=200x200'
        },
        {
          tex:'个护清洁榜',
          imgS:'https://yanxuan-item.nosdn.127.net/3c201fe2257a7b3b8951e66bf3b1430f.png?quality=75&type=webp&imageView&thumbnail=200x200'
        },
        {
          tex:'严选全球榜',
          imgS:'https://yanxuan-item.nosdn.127.net/e67fa451dcf51274dadd58d7b5f2c0bd.png?quality=75&type=webp&imageView&thumbnail=200x200'
        },
        {
          tex:'母婴亲子榜',
          imgS:'https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200'
        },
        {
          tex:'运动旅行榜',
          imgS:'https://yanxuan-item.nosdn.127.net/fee21ece834e9c2706e53d86e65b8abb.png?quality=75&type=webp&imageView&thumbnail=200x200'
        }
      ]
    }
  },
  methods:{
    Goselect:function(){
      this.$router.push({path:"/se"})
      this.$store.commit('hide')
      // this.$store.state.TabShowData = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.hello{
   background-color: #EEEEEE;
   padding:0 0 3.125rem 0 ;
}
.van-row,.van-grid{
  padding: .475rem .875rem;
  background-color: #fff;
}
.logo{
      display: inline-block;
    height: 1.2rem;
    margin: .45rem 0 .16rem 0;
    width: 93%;
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/index-20a8c6c35d0ec7b54782d2098282371f.png) no-repeat 53% 75%;
    background-size: 265%;
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
.R_banner{
  font-size: .75rem;
}
.van-button{ 
  height: 1.3rem;
  width: 2.2rem;
  margin-top: .525rem;
  margin-left: .825rem;
  text-align: center;
  font-size: .75rem;
}
 .my-swipe  {
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    box-sizing: content-box;
   position: relative;
  }
  .van-swipe-item{
    position: relative;
    height: 9.25rem;
  }
.van-swipe-item img{
    width: 100%;
    height: 11.5625rem;
    position: absolute;
    left: 0;
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
  width: 3.4375rem;
}
.goods_p{
  margin-top: .833333rem;
  font-size: .75rem;
}
.Img_Banner{
  padding-bottom: .833333rem;
  align-self: center;
  background-color:#EEEEEE;
}
.Img_Banner div{
  width: 96%;
  margin: .833333rem auto;
  display: flex;
  justify-content: space-around;
}
.Grid_big{
  grid-column-start: span 2;
}
.productWarp{
  margin-bottom: .833333rem;
  background-color: #fff;
}
/* 新人专享模块 */

.News_shopping_Top{
  height: 3.125rem;
  line-height: 3.125rem;
  text-align: center;
  position:relative;
}
.News_shopping_Top::after{
    content: "";
    position: absolute;
    right: 7.2rem;
    top: 1.4rem;
    width: 1.24rem;
    height: .125rem;
    background: #333;
}
.News_shopping_Top::before{
    content: "";
    position: absolute;
    left: 7.2rem;
    top: 1.4rem;
    width: 1.24rem;
    height: .125rem;
    background: #333;
}
.News_shoppign_grid{
  height: 18.083333rem;
  display: grid;
  padding:0 .9375rem .9375rem .9375rem;
  display: grid;
  grid-template-columns: repeat(2,50%);
  grid-template-rows: repeat(2,50%);
  justify-content:space-between;
  grid-gap: .166667rem;
}
.News_shopping_box{
  border-radius: .25rem;
  position: relative;
}
.News_shopping_box:nth-child(1){
  grid-row-end: span 2;
  background-color: #f9e9cf;
}
.News_shopping_box:nth-child(2){
  background-color: #fbe2d3;
}
.News_shopping_box:nth-child(3){
  background-color: #ffecc2;
}
.News_shopping_left_top{
  padding: .9375rem 0 0 .9375rem;
}
.New_right_box{
  padding: .833333rem 0 0 .9375rem;
}
.News_shopping_box_subtitle{
  font-size: 1rem;
  color: #7f7f7f;
}
.News_left_imgwarp{
  width: 10.833333rem;
  margin: 0 auto;
  padding-top: 10%;
}
.News_left_img{
  width: 10.833333rem;
}
.News_right_img{
  width: 6.25rem;
  position: absolute;
  right: 0;
  bottom: 0;
}
.News_shopping_box_tag{
  height: 1rem;
  line-height: 1rem;
  width: 4.0625rem;
  font-size: .555555rem;
  color: #fff;
  background-color: #cbb693;
  text-align: center;
  border-radius: .15rem;
}
/* 类目热销模块 */
.Hots_List_top{
  height: 3.125rem;
  line-height: 3.125rem;
  position:relative;
  padding: 0 .9375rem;
}
.Hots_List_warp{
  width:100%;
  font-size: .75rem;
  box-sizing: border-box;
  padding: 0 .9375rem .625rem .9375rem;
  display: grid;
  grid-template-columns: repeat(4,5.15625rem);
  grid-template-rows: 6.25rem 5.625rem 5.625rem;
  grid-gap: .3125rem;
  justify-content:space-between;
}
.Hots_List_warp div{
  position: relative;
  background-color: #f5f5f5;
}
.Hots_List_warp img{
  position: absolute;
  right: 0;
  bottom: 0;
}
.Hots_List_big{
  grid-column-end: span 2;
}
.Hots_List_big:nth-child(1){
  background-color: #f9f3e4;
}
.Hots_List_big:nth-child(2){
  background-color: #ebeff6;
}
.Hots_List_big img{
  width: 6.25rem;
}
.Hots_List_title{
  margin: 2.0625rem 0 0 0;
  padding:  0 0 0 .75rem;
  position: relative;
}
.Hots_List_title::after{
  position: absolute;
  content: "";
  left: .75rem;
  top: 1.5rem;
  width: 1.8rem;
  height: .125rem;
  background: #333;
}
.Hots_List_name{
  margin: .3125rem 0  .625rem 0; 
  text-align: center;
}
.Host_List_imgwarp{
  position: relative;
  height: 3.4375rem;
  margin: 0 auto;
  width: 3.4375rem;
}
.Host_List_img{
  width: 100%;
  top: 0;
}
.Sale_product{
  height: 9.6875rem;
  width: 100%;
  padding:.3125rem .9375rem .9375rem .9375rem;
  display: flex;
}
.sale_product_box{
  width: 50%;
  margin-right: .125rem;
  background-color: #f5f5f5;
  padding: .625rem 0 0 .625rem;
}
.sale_product_title{
  padding: 0 0 0 .3125rem;
  height: 1.5rem;
}
.sale_product_tag{
  padding: 0 0 0 .3125rem;
  color: rgb(128, 55, 211);
  font-size: .75rem;
  height: 1.125rem;
}
.sale_product_imgwarp{
  display: flex;
}
.sale_product_imgwarp img{
  width: 4.6875rem;
  margin-right: .125rem;
}
.color{
  color: rgb(244, 143, 24);
}

</style>