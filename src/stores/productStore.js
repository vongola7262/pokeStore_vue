import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'

const status = statusStore()

export default defineStore('productStore', {
  state: () => ({
    productsList: [],
    product: null
  }),
  actions: {
    // 取得所有產品
    getAllProducts () {
      status.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      axios.get(api).then((res) => {
        this.productsList = res.data.products
        status.isLoading = false
      })
    },
    // 取得單一產品
    getProduct (id) {
      status.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      axios.get(api).then((res) => {
        this.product = res.data.product
        status.isLoading = false
      })
    }
  }
})
