<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="mainProduct">
    <div class="container">
      <div class="row" v-if="product !== null">
        <div class="col-md-7">
          <div class="imgBox">
            <img :src="product.imageUrl" alt="product.title">
          </div>
        </div>
        <div class="col-md-5">
          <div class="detailBox">
            <h4>{{ product.title }}</h4>
            <p>{{ product.content }}</p>
            <h6>原價{{ product.origin_price }}</h6>
            <h4>特價{{ product.price }}</h4>
          </div>
          <div class="addBox">
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
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="addCart()"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
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

<style lang="sass">
section.mainProduct
  padding: 60px 0
  .imgBox
    width: 100%
    position: relative
    overflow: hidden
    img
      width: 100%
  .addBox
    display: flex
    .numberList
      display: flex
</style>
