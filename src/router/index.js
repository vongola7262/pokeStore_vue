import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/admin/LoginPage.vue')
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('../views/admin/DashBoard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/admin/ProductList.vue')
      },
      {
        path: 'orderlist',
        name: 'orderlist',
        component: () => import('../views/admin/OrderList.vue')
      },
      {
        path: 'voucher',
        name: 'voucher',
        component: () => import('../views/admin/VoucherList.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/main/NotFound.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/main/UserBoard.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/main/HomeView.vue')
      },
      {
        path: 'typeList/:id',
        name: 'typeList',
        component: () => import('../views/main/TypeList.vue'),
        props: route => ({
          id: route.params.id
        })
      },
      {
        path: 'product/:id',
        name: 'productId',
        component: () => import('../views/main/ProductDetail.vue'),
        props: route => ({
          id: route.params.id
        })
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/main/contact/ContactUs.vue'),
        children: [
          {
            path: '',
            name: 'form',
            component: () => import('../views/main/contact/UserForm.vue')
          },
          {
            path: 'success',
            name: 'success',
            component: () => import('../views/main/contact/FormSuccess.vue')
          }
        ]
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/main/order/OrderPage.vue'),
        children: [
          {
            path: '',
            name: 'orderlist',
            component: () => import('../views/main/order/OrderList.vue')
          },
          {
            path: 'checkout/:id',
            name: 'checkout',
            component: () => import('../views/main/order/CheckOut.vue'),
            props: route => ({
              id: route.params.id
            })
          },
          {
            path: 'cartsuccess',
            name: 'cartsuccess',
            component: () => import('../views/main/order/OrderSuccess.vue')
          }
        ]
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/main/cart/ProductCart.vue'),
        children: [
          {
            path: '',
            name: 'cartlist',
            component: () => import('../views/main/cart/CartList.vue')
          },
          {
            path: 'cartform',
            name: 'cartform',
            component: () => import('../views/main/cart/CartForm.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
