import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/goods'
import Comment from 'components/comment'
import Seller from 'components/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goods',
      name: 'goods',
      component: Home
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
