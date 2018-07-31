import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from "@/views/Title"
import Image from "@/views/Image"
import cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  // mode: "history",     // http://127.0.0.1:8080/goods/8111/user/admin
  mode: "hash",     // http://127.0.0.1:8080/#/goods/8111/user/admin
  routes: [
    // 子路由
    // {
    //   path: '/goods/',
    //   name: 'GoodsList',
    //   component: GoodsList,
    //   children: [
    //     {
    //       path: "title",
    //       name: "title",
    //       component: Title
    //     },
    //     {
    //       path: "image",
    //       name: "image",
    //       component: Image
    //     }
    //   ],
    // },

    // 命名视图
    {
      path: '/',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        title: Title,
        image: Image
      }
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: cart,
    }
  ]
})
