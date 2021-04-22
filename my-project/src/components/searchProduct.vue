<template>
    <div class="SearchProductM">
         <div >
                <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
                    <van-swipe-item  v-for="(item,inx) in SearchArr.data.bannerImg" :key="inx"><img :src="item" alt="" width="100%"></van-swipe-item>
                </van-swipe>
                </div>  
                <div class="Search_right_box" v-for="(item) in SearchArr.data.categoryGroupList" :key="item.id">
                    <p class="Search_right_box_top">{{item.name}}</p>
                    <van-grid :border="false" :column-num="3">
                        <van-grid-item v-for="item2 in item.categoryList" :key="item2.name">
                            <img :src="item2.wapBannerUrl" alt="" width="100%">
                           <div class="product_name"> {{item2.name}} </div>
                        </van-grid-item>
                    </van-grid>
                </div>
    </div>
</template>
<script>

export default {
    name:'searchProduct',
    data(){
        return{
            SearchArr:{
           
            },
            SearchArr0:{
                "data": {
                "bannerImg":['https://yanxuan.nosdn.127.net/46c5c7eb779360c24b474593eb3d87b0.jpg?type=webp&imageView&quality=75&thumbnail=0x196',
                    'https://yanxuan.nosdn.127.net/3066e60cfdd901ee76d0849bbd93dbf8.jpg?type=webp&imageView&quality=75&thumbnail=0x196',
                    'https://yanxuan.nosdn.127.net/0b319b0b8071517d122266c500a7a6de.jpg?type=webp&imageView&quality=75&thumbnail=0x196'
                ],
                "categoryGroupList": [
                {
                    "categoryList": [
                    {
                        "name": "员工精选",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/f68c16727409880d6b7717873c4f2597.png?quality=75&type=webp&imageView"
                    },
                    {
                        "name": "人气好物",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/036640056a47089a8a437cb14dc127e8.png?quality=75&type=webp&imageView"
                    },
                    {
                        "name": "当红新选",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/98860fc568275f12d6416ee4d8a07402.png?quality=75&type=webp&imageView"
                    },
                    {
                        "name": "春季养生",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/2ccfa4679ee2d2493f245ff5e4853ed3.png?quality=75&type=webp&imageView"
                    },
                    {
                    
                        "name": "春夏床品",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/2ccfa4679ee2d2493f245ff5e4853ed3.png?quality=75&type=webp&imageView"
                    },
                    {
                        "name": "99专区",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/1daf43d9a69e50f32cf858b36980b38b.png?quality=75&type=webp&imageView"
                    }
                    ]
                }
                ]
            },
            },
            SearchArr1:{
                "data": {
                "bannerImg":['https://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg?quality=75&type=webp&imageView&thumbnail=0x196'],
                "categoryGroupList": [
                {
                    "id": 85753755,
                    "name": "床品件套",
                    "categoryList": [
                    {
                        "name": "床品件套",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png"
                    },
                    {
                        "name": "好物精选",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/78c6f5437b032f2cfd9be02b5e8f5d65.jpg"
                    },
                    {
                        "name": "疫情防控",
                        "wapBannerUrl": "https://yanxuan-item.nosdn.127.net/5ced487ed76b0a771499f958b3f8e1ce.png"
                    },
                    {
                        "name": "北欧原木",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/28179231bfca5100b8efc2b55daa4d64.png"
                    },
                    {
                    
                        "name": "收纳好物",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/f02d5acdd84f4b4958b37730341cc3c9.png"
                    },
                    {
                        "name": "毛巾浴巾",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/f6eaa94e8920dd4290b9da7c545c8841.png"
                    },
                    {
                        "name": "居家布艺",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/d8f74a5d23c731084779b095e80fb3e3.png"
                    },
                    {
                        "name": "家饰",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/6d1ead305a90735f72664ea9ea3d3eff.png"
                    },
                    {
                        "name": "家庭医疗",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/8df20c3097e78a47d104b653e9b47180.png"
                    },
                    {
                        "name": "晾晒除味",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/36d167a99e28b00dd08aa5e45fd33946.png"
                    },
                    {
                        "name": "抱枕靠垫",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/ef4a874893fb5e76504fb044c2f7cd49.png"
                    },
                    {
                        "name": "地毯窗帘",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/f2e3e9df2cdb7e790e68356ac763cd58.png"
                    },
                    {
                        "name": "餐厨爆款清单",
                        "wapBannerUrl": "https://yanxuan-item.nosdn.127.net/4ccd6ee87a83918474e7e962b06d96fd.png"
                    },
                    {
                        "name": "收纳",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/ccf0ff26ca7bf8bbbc8683a740e28ae9.png"
                    },
                    {
                        "name": "居家拖鞋",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/3e0c0c0f1d842ae66f4fbfd50a571ac1.png"
                    }
                    ]
                },
                {
                    "id": 85757156,
                    "name": "被枕褥毯",
                    "categoryList": [
                    {
                        "name": "被枕盖毯",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/96d109867f08a14af62d2390b7787439.png"
                    },
                    {
                        "name": "床垫床褥",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/b91e14afc5a138df8dbc3236146d24e6.png"
                    }
                    ]
                },
                {
                    "id": 85757557,
                    "name": "办公家具",
                    "categoryList": [
                    {
                        "name": "办公书房家具",
                        "wapBannerUrl": "https://yanxuan-item.nosdn.127.net/07a3a14ee50273af6b90701cfc37571e.png"
                    },
                    {
                        "name": "客餐厅家具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/aeecf63c24567c5a7a51b747a7dcf10a.png"
                    }
                    ]
                },
                {
                    "id": 85757958,
                    "name": "卧室家具",
                    "categoryList": [
                    {
                        "name": "卧室家具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/29a60124243be40301a571e09f8c935c.png"
                    },
                    {
                        "name": "灯具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/9bc4cae742e2b2709974ad074f897493.png"
                    },
                    {
                        "name": "小件家具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/becde30fadf4ec335cd7ad8078798acf.png"
                    }
                    ]
                },
                {
                    "id": 85758559,
                    "name": "厨房电器",
                    "categoryList": [
                    {
                        "name": "厨房电器",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/33ae29eacd675898bf152f71905ff49a.png"
                    }
                    ]
                },
                {
                    "id": 85758760,
                    "name": "锅具清洁",
                    "categoryList": [
                    {
                        "name": "品质锅具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/17cc6774b480037536a0f360bf207676.png"
                    },
                    {
                        "name": "餐厨配件",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/1055eb85d2c5431c8f6623aed74bbbde.png"
                    },
                    {
                        "name": "刀剪砧板",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/f17d41a51a2bb3a1b73f927959cd9ae2.png"
                    }
                    ]
                },
                {
                    "id": 85759362,
                    "name": "餐具水具",
                    "categoryList": [
                    {
                        "name": "餐具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/338c77be5f292272e43869bcc52c8229.png"
                    },
                    {
                        "name": "水具杯壶",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/b24d4e3c402ecb4a95d7d6e8d77a93ba.png"
                    
                    },
                    {
                        "name": "茶咖酒具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/6395f0efc4c720dbc1bee012af23e56e.png"
                    },
                    {
                        "name": "品茗茶具",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/5f73c37a9101efd90953836ac2767bd8.jpg"
                    }
                    ]
                },
                {
                    "id": 85760163,
                    "name": "宠物生活",
                    "categoryList": [
                    {
                        "name": "宠物食品",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/8bceb409edbc6415c91095a82d4d3edf.png"
                    },
                    {
                        "name": "宠物用品",
                        "wapBannerUrl": "https://yanxuan.nosdn.127.net/0dc939d1cb0e437b56e392fbf859f768.png"
                    }
                    ]
                }
                ]
            },
            },
            SearchArr2:{},
            SearchArr3:{},
            SearchArr4:{},
            SearchArr5:{},
            SearchArr6:{},
            SearchArr7:{},
            SearchArr8:{},
            SearchArr9:{},
            SearchArr10:{}
        }
    },
    methods:{
        change:function(inx){
            this.listInx = inx;
            console.log(this.SearchArr.data.bannerImg);
           
        },
        go:function(){
            this.$router.push({path:"/se"})
            this.$store.commit('hide')
        }
    },
    created(){
        this.SearchArr = this.SearchArr0;
    },
    computed: {
        listData() {
            return this.$store.state.searchinx;
        }
    },
        //监听执行
    watch: {
        listData(val) {
            switch (val){
                case 0:
                this.SearchArr = this.SearchArr0;
                break;
                case 1:
                this.SearchArr = this.SearchArr1;
                break;
                
            }
            
            this.SearchArr = this.SearchArr
            console.log(val+'改变了');
        }
    }
}
</script>
<style scoped>
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
.product_name{
    font-size: .75rem;
    padding-bottom: .625rem;
}
.SearchProductM{
    padding-bottom: 3.2rem;
}
</style>