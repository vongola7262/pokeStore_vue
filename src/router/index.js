import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/ProductList.vue')
      },
      {
        path: 'orderlist',
        name: 'orderlist',
        component: () => import('../views/OrderList.vue')
      },
      {
        path: 'voucher',
        name: 'voucher',
        component: () => import('../views/VoucherList.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/ProductCart.vue')
      },
      {
        path: 'typeList',
        name: 'typeList',
        component: () => import('../views/TypeList.vue')
      },
      {
        path: 'product/:id',
        name: 'productId',
        component: () => import('../views/ProductDetail.vue'),
        props: route => ({
          id: route.params.id
        })
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/ContactUs.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
