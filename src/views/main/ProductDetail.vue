<template>
  <LoadingPage :active="isLoading" :opacity="0.8" :background-color="`#fff`">
    <img
      src="../../assets/images/pika.gif"
      alt=""
      style="width: 250px; height: 250px"
    />
  </LoadingPage>
  <section class="mainProduct">
    <!-- {{ product }} -->
    pro
  </section>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      product: null,
      isLoading: false
    }
  },
  methods: {
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        this.product = res.data.product
        this.isLoading = false
      })
    }
  },
  created () {
    const { id } = this.$route.params
    this.getProduct(id)
  }
}
</script>
