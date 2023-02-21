import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('productStore', {
  state: () => ({
    productsList: [],
    product: null,
    isLoading: false
  }),
  actions: {
    // 取得所有產品
    getAllProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      axios.get(api).then((res) => {
        this.productsList = res.data.products
        this.isLoading = false
      })
    },
    // 取得單一產品
    getProduct (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      axios.get(api).then((res) => {
        this.product = res.data.product
        this.isLoading = false
      })
    }
  }
})
