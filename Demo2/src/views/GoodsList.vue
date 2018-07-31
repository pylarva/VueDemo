<template>
  <div>
    这是商品列表页面
    <span>{{ $route.params.goodsId }}</span><br>
    <span>{{ $route.params.name }}</span>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
    <!-- 原生的to跳转-->
    <!--<router-link to="/cart">跳转到购物车页面</router-link>-->

    <!--命名式路由跳转 + 传参-->
    <router-link v-bind:to="{name: 'cart', params:{cartId:123}}" >跳转到购物车页面</router-link>

    <!--编程式路由-->
    <button @click="jump">button - 跳转到购物车页面</button>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            msg: "hello vue"
          }
        },
      methods:{
          jump(){
            // this.$router.push("/cart");
            // this.$router.push({path: '/cart'});
            this.$router.push({path: '/cart?goodsId=123'});
            // this.go(-2);     // 后退2步
          }
      }
    }
</script>

<style scoped>

</style>
