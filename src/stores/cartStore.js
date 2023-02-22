import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'

const status = statusStore()

export default defineStore('cartStore', {
  state: () => ({
    cartList: [],
    total: null,
    final_total: null,
    totalNum: 0
  }),
  actions: {
    // 所有商品
    getCartList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      axios.get(api).then((res) => {
        this.cartList = res.data.data.carts
        this.total = res.data.data.total
        this.final_total = res.data.data.final_total
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
      axios.post(url, cart)
        .then(res => {
          this.getCartList()
          this.hintMessage(true, '已加入購物車')
        })
        .catch(res => {
          this.hintMessage(false, res.message)
        })
    },
    // 刪除單筆
    removeItem (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      axios.delete(api)
        .then(res => {
          this.getCartList()
          this.hintMessage(true, '已刪除')
        })
        .catch(res => {
          this.hintMessage(false, res.message)
        })
    },
    // 全部刪除
    cleanAll () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      axios.delete(api)
        .then(res => {
          this.getCartList()
          this.hintMessage(true, '清空購物車')
        })
        .catch(res => {
          this.hintMessage(false, res.message)
        })
    },
    // 更新單筆數量
    updateCart (item, type) {
      status.btnStatus = true
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
      axios.put(api, { data: cartItem })
        .then(res => {
          status.btnStatus = false
          this.getCartList()
        })
        .catch(res => {
          this.hintMessage(false, res.message)
        })
    },
    // 提示跳框
    hintMessage (sas, message) {
      status.hintStatus.active = true
      status.hintStatus.status = sas
      status.hintStatus.text = message
      setTimeout(() => {
        status.hintStatus.active = false
        status.hintStatus.status = false
        status.hintStatus.text = ''
      }, '1000')
    }
  },
  getters: {
    getQty (state) {
      return state.cartList.length
    }
  }
})
