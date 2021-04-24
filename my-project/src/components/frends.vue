<template>
    <div>
        <!-- 头部区域 -->
        <van-sticky>
            <div class="Frends_head">
                <van-row>
                    <van-col span="5"><van-icon name="wap-home-o" size="28" @click="gohome"/></van-col>
                    <van-col span="14" class="Frends_tittle">值得买</van-col>
                    <van-col span="3"><van-icon name="search"  size="28"@click="gose"/></van-col>
                    <van-col span="2"><van-icon name="cart-o"  size="28"/></van-col>
                </van-row>
            </div>
        </van-sticky>
        <!-- 轮播模块 -->
        <div class="F_swiperWarp">
            <div class="F_swiper_bg">
                <img src="http://yanxuan.nosdn.127.net/a93a392fb8006ba26dea38477979b7b4.jpg?imageView" alt="" width="100%">
                <div class="F_swiper_tittle">
                    <img src="http://yanxuan.nosdn.127.net/0b7676e645253f84be662aacfc051922.png" alt=""> <span> 严选好物 &nbsp; 用心生活</span>
                </div>
                <div class="F_swiper">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="(item,inx) in slideArr" :key="inx">
                            <div class="slide_box">

                                <img :src="item.img1" alt="">
                                <p class="slide_tittle">{{item.tittle1}}</p>
                                <p class="slide_tag">{{item.tag1}}</p>
                                <div class="slide_m">
                                    <img :src="item.img2" alt="">
                                    <p class="slide_tittle">{{item.tittle2}}</p>
                                    <p class="slide_tag">{{item.tag2}}</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                     <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>

        <!-- 商品瀑布流 -->
        <div class="ProductWarp">
           
            <div class="box">
                <div class="product" v-for="(item,inx) in leftArr" :key="inx">
                    <img :src="item.imgur" alt="" width="100%">
                    <div class="product_tittle">{{item.tittle}}</div>
                    <div class="product_foot">
                        <div class="foot_left">
                            <img :src="item.categoryic" alt="">
                            {{item.category}}
                        </div>
                        <div class="foot_right">
                            <van-icon name="eye-o" size="15px"/> {{item.watch}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="product" v-for="(item,inx) in rightArr" :key="inx">
                    <img :src="item.imgur" alt="" width="100%">
                    <div class="product_tittle">{{item.tittle}}</div>
                    <div class="product_foot">
                        <div class="foot_left">
                            <img :src="item.categoryic" alt="">
                            {{item.category}}
                        </div>
                        <div class="foot_right">
                            <van-icon name="eye-o" size="15px"/> {{item.watch}}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>


export default {
    name:'frends',
    data(){
        return{
            swiperOptions: {
                slidesPerView: 4,
                spaceBetween: 0,
                freeMode: false,
                pagination: {
                    el: '.swiper-scrollbar',
                    hide: true,
                },
                            // Some Swiper option/callback...
            },
            slideArr:[
                {
                    img1:'https://yanxuan.nosdn.127.net/e92a567f96b94dcea29eafea9ab42440.png?imageView&quality=65&thumbnail=120y120',
                    img2:'https://yanxuan.nosdn.127.net/9d8114ce4ef435ceac5e82120efeec4c.png?imageView&quality=65&thumbnail=120y120',
                    tittle1:'好物大赏',
                    tittle2:'晒单',
                    tag1:'购物先看榜',
                    tag2:'入选有红包'
                },
                {
                    img1:'https://yanxuan.nosdn.127.net/1d431f0e961bbcb0885aed901506bc48.png?imageView&quality=65&thumbnail=120y120',
                    img2:'https://yanxuan.nosdn.127.net/ff84fdc2a3d06a3ceced0ade489b6381.png?imageView&quality=65&thumbnail=120y120',
                    tittle1:'每月好物',
                    tittle2:'新品体验官',
                    tag1:'4月必买清单',
                    tag2:'开箱测评'
                },
                {
                    img1:'https://yanxuan.nosdn.127.net/be470a303bc7e255ffdfa07c7bb1779d.gif',
                    img2:'https://yanxuan.nosdn.127.net/d98cef378330167ef79c5f956814836e.png?imageView&quality=65&thumbnail=120y120',
                    tittle1:'超值专区',
                    tittle2:'选购指南',
                    tag1:'新定价直降',
                    tag2:'破解选择困难'
                },
                {
                    img1:'https://yanxuan.nosdn.127.net/1d94b7dcbf10a3e836bab65729eeaaad.png?imageView&quality=65&thumbnail=120y120',
                    img2:'https://yanxuan.nosdn.127.net/17f2bc11d23d2be6b8d8fdf066bb68c9.png?imageView&quality=65&thumbnail=120y120',
                    tittle1:'明星商品',
                    tittle2:'特色系列',
                    tag1:'百万粉丝之选',
                    tag2:'发现格调好货'
                },
                {
                    img1:'https://yanxuan.nosdn.127.net/f24cde417adc441b1844d197fc360e87.gif',
                    img2:'https://yanxuan.nosdn.127.net/06b3ea9685c4f0f8aadfff05580d115d.png?imageView&quality=65&thumbnail=120y120&type=webp',
                    tittle1:'Pro会员',
                    tittle2:'中国风物志',
                    tag1:'每周专享福利',
                    tag2:'记录中国'
                },
                {
                    img1:'https://yanxuan.nosdn.127.net/0a07714b326b5793d97491cf9079967b.png?imageView&quality=65&thumbnail=120y120&type=webp',
                    img2:'https://yanxuan.nosdn.127.net/321dac9cf0fa0edd8da0092a753531f3.png?imageView&quality=65&thumbnail=120y120&type=webp',
                    tittle1:'植系空间',
                    tittle2:'HOME',
                    tag1:'居家绿植指南',
                    tag2:'实景家居专栏'
                },
                {
                    img1:'https://yanxuan.nosdn.127.net/aadf08dc4fe02540cd7f1f0cf97c0a2d.png?imageView&quality=65&thumbnail=120y120&type=webp',
                    img2:'https://yanxuan.nosdn.127.net/e29bd9f1a9f61e37b969d59566ea15b2.png?imageView&quality=65&thumbnail=120y120&type=webp',
                    tittle1:'每日穿搭',
                    tittle2:'工厂考察团',
                    tag1:'时尚买手力荐',
                    tag2:'探访严选工厂'
                }
            ],
            ProductArr:[
                {
                    ix:0,
                    imgur:'https://yanxuan.nosdn.127.net/7b2f96aced02b8b2255c9505eb11dae7.jpg?imageView&thumbnail=345y191.66666666666669&quality=85',
                    tittle:'网红零食、性价比日用……老用户都在回购',
                    category:'好物大赏',
                    categoryic:'http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48',
                    watch:'5390K'
                },
                {
                    ix:1,
                    imgur:'https://yanxuan.nosdn.127.net/906617e9b6801478d3a932ec16afc3a6.jpg?imageView&thumbnail=345y345&quality=85',
                    tittle:'连衣裙、T恤、凉鞋已上新，pick你的夏日穿搭！',
                    category:'好物大赏',
                    categoryic:'http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48',
                    watch:'17K'
                },
                {
                    ix:2,
                    imgur:'https://yanxuan.nosdn.127.net/4862b35e373d7e77c2b4624aa468194d.jpg?imageView&thumbnail=345y345&quality=85',
                    tittle:'2021春夏出行必备时尚单品！',
                    category:'好物大赏',
                    categoryic:'http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48',
                    watch:'14k'
                },
                {
                    ix:3.,
                    imgur:'https://yanxuan.nosdn.127.net/98760dcd7609e0734886b73509488fc4.jpg?imageView&thumbnail=345y194.30208333333334&quality=85',
                    tittle:'健康实力派好牛奶',
                    category:'选妹',
                    categoryic:'http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48',
                    watch:'10k'
                },
                {
                    ix:4,
                    imgur:'https://yanxuan.nosdn.127.net/e86502d24bc98b68d976ef398c3601f7.jpg?imageView&thumbnail=345y191.66666666666669&quality=85',
                    tittle:'夏凉被“焕新”术',
                    category:'好物大赏',
                    categoryic:'http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48',
                    watch:'10'
                },
                {
                    ix:5,
                    imgur:'https://yanxuan.nosdn.127.net/def8a68b7e86001c0d52e78e52cd2a9c.jpg?imageView&thumbnail=345y345&quality=85',
                    tittle:'简约又好看的夏日T恤推荐',
                    category:'好物大赏',
                    categoryic:'http://yanxuan.nosdn.127.net/3769578a6595d8e3c61d1186123141e0.png?imageView&quality=65&thumbnail=48y48',
                    watch:'10'
                }
            ]
        }
    },
    computed:{
        leftArr:function(){ 
            return this.ProductArr.filter(v=>v.ix%2 === 0)
        },
        rightArr:function(){ 
            return this.ProductArr.filter(v=>v.ix%2 !== 0)
        }
       
    },
    methods:{
        gohome(){
            this.$router.push('/home')
        },
        gose(){
            this.$router.push('/se')
        }
            
    }

}
</script>
<style  scoped>
.Frends_head{
    font-size: 1.125rem;
    background-color: #fff;
    line-height: 3.125rem;
    height: 3.125rem;
    padding: 0 .75rem;
}
.van-col,.van-icon,.van-icon-search{
    vertical-align: middle;
}
.Frends_tittle{
    text-align: center;
}
.F_swiperWarp{
    position: relative;
}
.F_swiper_bg{
    position: absolute;
}
.F_swiper_tittle{
    position: absolute;
    height: 2.1875rem;
    left: .75rem;
    top: 1.5625rem;
    font-size: .875rem;
    color: #fff;
}
.F_swiper_tittle img{
    position: relative;
    top: .625rem;
    width: 4.0625rem;
}
.swiper-slide{
    width: 100%;
    height: 12.5rem;
    background-color: #fff;
}
.F_swiper{  
    padding: 0 .8125rem;
    position: absolute;
    height: 16.875rem;
    width: 100%;
    border-radius: .5rem;
    overflow: hidden;
    top: 4.625rem;
  
}
.swiper-slide{
    width: 5.625rem;
}
.swiper-container{  
    border-radius: .5rem;
    background-color: #fff;
    height: 16.875rem;
}
  .swiper-container {
    width: 100%;
    height: 16.875rem;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
.swiper-slide img{
    width: 3.75rem;
}
.swiper-scrollbar {
    width: 20%;
    left: 40%;
    height: .3125rem;
    bottom: .625rem;
    border-radius: .3125rem;
    position: absolute;
    -ms-touch-action: none;
    background: rgba(97, 7, 7, 0.1);
    z-index: 9;
}
.slide_box{
    position: absolute;
    top: 0;
    padding: 1.125rem .1875rem .1875rem;
}
.slide_tittle{
    font-size: .875rem;
}
.slide_tag{
    font-size: .75rem;
    color: #999;
}
.slide_m{
    margin-top: 1.25rem;
}
.ProductWarp{
    background: #eee;
    width: 100%;
    padding: .9375rem 0 3.625rem .9375rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 21rem;
}

.box{
    width: 50%;
    background-color: #eee;
    padding-right: .9375rem;
}
.product{
    border-radius: .5rem;
    overflow: hidden;
    margin-top: .9375rem;
    width: 100%;
    background-color: #fff;
}
.product_tittle{
    font-size: .875rem;
    padding: .625rem .625rem .625rem .625rem;
}
.product_foot{
    color: #7f7f7f;
    padding: .625rem .625rem .9375rem .625rem;
    height: 2.8125rem;
    display: flex;
    justify-content: space-between;
    font-size: .75rem;
    align-items: center;
}
.foot_left img{
    width: 1.5rem;
    border-radius: 50%;
    vertical-align: middle;
}
</style>