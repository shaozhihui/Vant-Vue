<template>
    <div>
          <!-- 头部区域 -->
        <van-sticky>
            <div class="Frends_head">
                <van-row>
                    <van-col span="5"><van-icon name="wap-home-o" size="28" @click="gohome"/></van-col>
                    <van-col span="14" class="Frends_tittle">网易严选</van-col>
                    <van-col span="3"><van-icon name="search"  size="28" @click="gose"/></van-col>
                    <van-col span="2"><van-icon name="cart-o"  size="28"/></van-col>
                </van-row>
            </div>
        </van-sticky>
        <div class="user_img">
            <p> <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt=""></p>
           
        </div>
        <div class="user_btn">
            <div class="phone_btn"> <van-icon name="phone-o" size="20"/> &nbsp;手机号快捷登录</div>
            <div class="emal_btn"><van-icon name="envelop-o" size="20"/>&nbsp;邮箱账号登录</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'shopcar',
    data(){
        return{

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
<style scoped>
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
.user_img{
    padding: 5rem 0 0 0 ;
    text-align: center;
    width: 100%;
}
.user_img img{
    width: 8.4375rem;
}
.user_btn{
    padding: 3.125rem 1.25rem 0 1.25rem ;
    text-align: center;
    width: 100%;
}
.phone_btn,.emal_btn{
    font-size: .875rem;
    line-height: 3.125rem;
    height: 3.125rem;
    width: 100%;
    margin-bottom: 1rem;
}
.phone_btn{
    background-color: #DD1A21;
    border:#DD1A21;
    color: #fff;
}
.emal_btn{
    border:1px solid #DD1A21;
    color: #DD1A21;
}
.Frends_tittle {
    text-align: center;
}
</style>
