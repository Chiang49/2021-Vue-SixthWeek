import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products',
        name: '商品列表',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/product/:id',
        name: '單一商品',
        component: () => import('../views/product.vue')
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/Cart.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
