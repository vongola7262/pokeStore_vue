<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="mainProduct">
    <div class="container-lg">
      <div class="mainBox">
        <div class="row" v-if="product !== null">
          <div class="col-md-7">
            <div class="imgBox">
              <img :src="product.imageUrl" alt="product.title">
            </div>
          </div>
          <div class="col-md-5">
            <div class="detailBox">
              <h3>{{ product.title }}</h3>
              <div class="orginPrice">
                <p>原價: NT${{ product.origin_price }}</p>
              </div>
              <h4>特價: NT${{ product.price }}</h4>
            </div>
            <div class="addBox">
              <div class="unitBox">
                <button
                  type="button"
                  class="btn remove"
                  v-bind="{disabled: product_qty <= 1 }"
                  @click.prevent="updateCart(false)"
                >
                  <p>-</p>
                </button>
                <div class="unitText">
                  <p>
                    {{ product_qty }}
                  </p>
                </div>
                <button
                  type="button"
                  class="btn add"
                  @click.prevent="updateCart(true)"
                >
                  <p>+</p>
                </button>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="addCart(product.id, product_qty)"
              >
                <h5>加入購物車</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="detailText" v-if="product !== null">
        <h4>商品特色</h4>
        <p>{{ product.content }}</p>
      </div>
      <div class="mayProduct" v-if="moreProducts.length >= 3">
        <h4>推薦商品</h4>
        <swiper
          :navigation="true"
          :modules="modules"
          :space-between="10"
          :slides-per-view="3"
          :loop="true"
          :breakpoints="{
            414: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
          }"
          class="mySwiper"
        >
          <swiper-slide
            v-for="item in moreProducts"
            :key="item.id"
          >
            <div class="imgBox"
              @click.prevent="getProduct(item.id)"
            >
              <div class="moreImg">
                <img :src="item.imageUrl" :alt="item.title">
                <span>查看更多</span>
              </div>
              <p>{{ item.title }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import LoadingImg from '@/components/LoadingImg.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

import productStore from '@/stores/productStore.js'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  props: ['id'],
  components: {
    LoadingImg,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      product_qty: 1,
      modules: [Navigation]
    }
  },
  computed: {
    ...mapState(productStore, ['product', 'isLoading', 'productsList']),
    moreProducts () {
      const all = this.productsList
      const { category, id } = this.product
      const typeList = []
      all.forEach(item => {
        if (item.category === category && item.id !== id) {
          typeList.push(item)
        }
      })
      return typeList
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
    ...mapActions(productStore, ['getProduct', 'getAllProducts']),
    // 數量變更
    updateCart (type) {
      if (type === true) {
        this.product_qty += 1
      } else {
        this.product_qty -= 1
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.getProduct(id)
    this.getAllProducts()
  }
}
</script>

<style lang="sass">
section.mainProduct
  padding: 60px 0
  background-color: #f0dec9
  @media screen and (max-width:575px)
    padding: 40px 0
  .container-lg
    width: 90%
    margin: 0 auto
    @media screen and (max-width:414px)
      width: 100%
  .mainBox
    margin: 40px 0
    @media screen and (max-width:575px)
      margin: 20px 0
  .imgBox
    width: 100%
    position: relative
    overflow: hidden
    img
      width: 100%
  .detailBox
    h3
      font-size: 36px
      font-weight: 700
      line-height: 1.8
      color: #734230
      border-bottom: 2px solid #734230
    @media screen and (max-width:575px)
      h3
        font-size: 28px
      margin: 20px 0
    .detail
      margin-bottom: 20px
      h5
        font-weight: 700
        line-height: 1.8
    h4
      font-weight: 500
      letter-spacing: 3px
      color: #734230
      font-size: 28px
      line-height: 1.8
      @media screen and (max-width:575px)
        font-size: 20px
  .orginPrice
    display: flex
    p
      color: #ad8350
      position: relative
      line-height: 1.8
      &::before
        content: ''
        display: block
        width: 100%
        height: 1px
        background-color: #ad8350
        position: absolute
        left: 0
        top: 60%
        transform: translateY(-50%)
  .addBox
    display: flex
    flex-wrap: wrap
    margin: 10px 0
    .unitBox
      display: flex
      align-items: center
      margin-right: 20px
      button
        background-color: #D9BD9C
        &.add
          border-radius: 0 5px 5px 0
        &.remove
          border-radius: 5px 0 0 5px
        &:active
          border-color: #D9BD9C
        &:disabled
          background-color: #d5c6b4
          border-color: #d5c6b4
        &:hover
          background-color: #d5aa78
          border-color: #d5aa78
      .unitText
        border: 1px solid #D9BD9C
        min-width: 60px
        display: flex
        align-items: center
        justify-content: center
        padding: 8px
      p
        font-size: 16px
        margin-left: 5px
        margin: 0
    button
      background-color: #D9BD9C
      border-color: #D9BD9C
      color: #734230
      padding: 8px
      h5
        font-weight: 500
        font-size: 20px
        letter-spacing: 1.5px
      &:hover
        background-color: #d5aa78
        border-color: #d5aa78
  .detailText
    border-top: 2px solid #734230
    margin-bottom: 40px
    h4
      margin: 25px 0
      line-height: 1.8
      color: #734230
      font-weight: 700
  .mayProduct
    border-top: 2px solid #734230
    h4
      margin: 25px 0
      line-height: 1.8
      color: #734230
      font-weight: 700
      @media screen and (max-width:575px)
        margin: 15px 0
    .swiper-button-next,.swiper-button-prev
      width: 50px
      height: 50px
      background-color: #fff
      border-radius: 50%
      box-shadow: 0 0 10px rgb(0 0 0 / 60%)
      &::after
        font-size: 30px
        color: #734230
        font-weight: 700
        position: relative
    .swiper-button-next::after
      left: 5%
    .swiper-button-prev::after
      right: 5%
    .imgBox
      cursor: pointer
      .moreImg
        overflow: hidden
        position: relative
        width: 100%
        height: 0
        padding-bottom: 68.57%
        img
          height: 100%
          transition: all 0.3s
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
        span
          color: #fff
          border: 2px solid #fff
          border-radius: 5px
          padding: 5px 10px
          letter-spacing: 5px
          font-size: 18px
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%,-50%)
          z-index: 5
          display: none
        &::before
          content: ''
          display: block
          width: 100%
          height: 100%
          position: absolute
          left: 0
          top: 0
          background-color: black
          opacity: 0
          z-index: 2
          transition: all 0.3s
      p
        font-size: 16px
        letter-spacing: 1.5p
      &:hover
        .moreImg
          &::before
            opacity: 0.7
          span
            display: block
          img
            transform: translate(-50%,-50%) scale(1.1)
</style>
