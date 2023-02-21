import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('productStore', {
  state: () => ({
    productsList: [],
    product: null,
    moreProducts: [],
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
    // 取得所有產品 及 單一產品
    getProduct (id) {
      this.isLoading = true
      const apiOne = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      const apiAll = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      function getData (api) {
        return axios.get(api)
      }

      axios.all([getData(apiOne), getData(apiAll)]).then(res => {
        // 主要產品
        const one = res[0]
        this.product = one.data.product

        // 同分類其他產品
        const all = res[1].data.products
        const { category, id } = one.data.product
        const typeList = []
        all.forEach(item => {
          if (item.category === category && item.id !== id) {
            typeList.push(item)
          }
        })
        this.moreProducts = typeList
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
        this.isLoading = false
      })
    }
  }
})
