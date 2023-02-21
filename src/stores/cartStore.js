import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('cartStore', {
  state: () => ({
    cartList: [],
    total: null,
    final_total: null,
    totalNum: 0,
    isLoading: false,
    btnStatus: false
  }),
  actions: {
    // 所有商品
    getCartList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      axios.get(api).then((res) => {
        this.cartList = res.data.data.carts
        this.total = res.data.data.total
        this.final_total = res.data.data.final_total
        this.isLoading = false
      })
    },
    // 新增商品
    addCart (id, qtyNum = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        data: {
          product_id: id,
          qty: qtyNum
        }
      }
      axios.post(url, cart).then((res) => {
        this.getCartList()
      })
    },
    // 刪除單筆
    removeItem (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      axios.delete(api).then((res) => {
        this.getCartList()
      })
    },
    // 全部刪除
    cleanAll () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      axios.delete(api).then((res) => {
        this.getCartList()
      })
    },
    // 更新單筆數量
    updateCart (item, type) {
      this.btnStatus = true
      let { id, qty, product_id: proId } = item
      if (type === true) {
        qty += 1
      } else {
        qty -= 1
      }
      const cartItem = {
        product_id: proId,
        qty: qty
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      axios.put(api, { data: cartItem }).then((res) => {
        this.btnStatus = false
        this.getCartList()
      })
    }
  },
  getters: {
    getQty (state) {
      return state.cartList.length
    }
  }
})
