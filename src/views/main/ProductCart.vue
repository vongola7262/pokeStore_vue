<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in cartList" :key="item.id">
      <p>{{ item.product.title }}</p>
      <p>特價 {{ item.product.price }}</p>
      <p>數量 {{ item.qty }}</p>
      <p>總價 {{ item.total }}</p>
    </li>
  </ul>
  <p>原價 {{ total }}</p>
  <p>總價 {{ final_total }}</p>
</template>

<script>
export default {
  data () {
    return {
      cartList: null,
      total: null,
      final_total: null
    }
  },
  methods: {
    getCartList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(api).then(res => {
        console.log(res.data.data)
        this.cartList = res.data.data.carts
        this.total = res.data.data.total
        this.final_total = res.data.data.final_total
      })
    }
  },
  created () {
    this.getCartList()
  }
}
</script>
