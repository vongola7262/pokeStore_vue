import { defineStore } from 'pinia'
// import { axios } from 'axios'

export default defineStore('productStore', {
  state: () => ({
    carts: []
  }),
  actions: {
    addToCard (id, qty = 1) {
      console.log(id, qty)
    }
  }
})
