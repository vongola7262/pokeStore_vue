<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="mainProduct">
    <!-- {{ product }} -->
    {{ product }}
    <button
      type="button"
      class="btn btn-primary"
      @click.prevent="addCart()"
    >
      加入購物車
    </button>
    <div class="numberList">
      <button
        type="button"
        class="btn btn-primary"
        @click.prevent="qtyUpdate(true)"
      >
        <h5>+</h5>
      </button>
      <h5>{{ product_qty }}</h5>
      <button
        type="button"
        class="btn btn-primary"
        v-bind="{disabled: product_qty <= 1}"
        @click.prevent="qtyUpdate(false)"
      >
        <h5>-</h5>
      </button>
    </div>
  </section>
</template>

<script>
import LoadingImg from '@/components/LoadingImg.vue'

export default {
  props: ['id'],
  components: {
    LoadingImg
  },
  data () {
    return {
      product: null,
      product_qty: 1,
      isLoading: false
    }
  },
  methods: {
    // 取得產品內容
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        this.product = res.data.product
        this.product_num = res.data.product.num
        this.isLoading = false
      })
    },
    // 數量變更
    qtyUpdate (type) {
      if (type === true) {
        this.product_qty += 1
      } else {
        this.product_qty -= 1
      }
    },
    // 加入購物車
    addCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        data: {
          product_id: this.product.id,
          qty: this.product_qty
        }
      }
      this.axios.post(url, cart).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    const { id } = this.$route.params
    this.getProduct(id)
  }
}
</script>
