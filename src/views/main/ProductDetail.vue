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
    <!-- <div class="moreProduct">
      <swiper
        :navigation="true"
        :modules="modules"
        :space-between="30"
        :slides-per-view="3"
        :loop="true"
        :autoplay="{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="item in moreProducts"
          :key="item.id"
        >
          <div class="imgBox"
            @click.prevent="getProductDetail(item.id)"
          >
            <img :src="item.imageUrl" :alt="item.title">
            <p>{{ item.title }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div> -->
  </section>
</template>

<script>
import LoadingImg from '@/components/LoadingImg.vue'
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Navigation, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  props: ['id'],
  components: {
    LoadingImg
    // Swiper,
    // SwiperSlide
  },
  data () {
    return {
      product: null,
      moreProducts: [],
      product_qty: 1,
      isLoading: false
      // modules: [Navigation, Autoplay]
    }
  },
  methods: {
    // 取得產品內容
    getProduct (id) {
      this.isLoading = true
      const ax = this.axios
      const apiOne = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      const apiAll = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      function getData (api) {
        return ax.get(api)
      }

      this.axios.all([getData(apiOne), getData(apiAll)]).then(res => {
        // 主要產品
        const one = res[0]
        this.product = one.data.product
        this.product_num = one.data.product.num

        // 同分類其他產品
        const all = res[1].data.products
        const type = one.data.product.category
        const typeList = []
        all.forEach(item => {
          if (item.category === type && item.id !== id) {
            typeList.push(item)
          }
        })
        this.moreProducts = typeList
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
    },
    getProductDetail (id) {
      this.$router.push(`/product/${id}`)
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
