<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 porLeft" data-aos="flip-left" data-aos-duration="1500" data-aos-offset="400">
        <h2>潮流新品</h2>
        <div class="swiperBox">
          <swiper
            :slides-per-view="1"
            :space-between="50"
            :navigation="true"
            :modules="modules"
          >
            <swiper-slide>
              <img src="../assets/images/trainer.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/pack.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/shoes.jpg" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/childShoes.jpg" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="moreProduct">
          <router-link :to="{name: 'cart'}" class="moreBtn">
            <h4>查看更多</h4>
          </router-link>
        </div>
      </div>
      <div class="col-md-6 porRight" data-aos="flip-right" data-aos-duration="1500" data-aos-delay="1500">
        <div class="textBox">
          <div class="swiperBox">
            <swiper
              :slides-per-view="1"
              :space-between="50"
              :navigation="true"
              :modules="modules"
            >
              <swiper-slide>
                <img src="../assets/images/t-shirt.jpg" alt="" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <h2>熱銷聯名</h2>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const proList = [
      {
        img: './images/flame.png',
        id: 'pro-1'
      }
    ]
    return {
      proList,
      modules: [Navigation]
    }
  }
}
</script>

<style lang="sass">

.porLeft
  h2
      font-size: 36px
      color: #734230
      margin-bottom: 60px
      text-align: center
      letter-spacing: 10px
.swiperBox
    position: relative
    height: 400px
    &::before
      content: ''
      display: block
      width: 90%
      height: 80%
      background-color: #D98841
      position: absolute
      right: -30px
      top: -30px
    &::after
      content: ''
      display: block
      width: 200px
      height: 180px
      background-image: url('/src/assets/images/pick2.png')
      background-repeat: no-repeat
      background-size: contain
      background-position: center
      position: absolute
      bottom: -10px
      left: -110px
    .swiper
        height: 100%
        border: 1px solid #734230
        .swiper-button-next::after,.swiper-button-prev::after
          color: #D98841
        .swiper-slide
            position: relative
            overflow: hidden
            img
              width: 100%
              position: absolute
              top: 50%
              transform: translateY(-50%)
.porRight
  position: relative
  h2
    font-size: 36px
    color: #734230
    margin: 0
    letter-spacing: 10px
    writing-mode: vertical-lr
    position: absolute
    right: 12%
    top: 10%
  .textBox
    width: 80%
    max-width: 350px
    margin: 0 auto
    .swiperBox
      height: 500px
      &::before
        height: 90%
        right: -100px
      &::after
        content: ''
        display: block
        width: 100px
        height: 200px
        background-image: url('/src/assets/images/pick1.png')
        background-repeat: no-repeat
        background-size: contain
        background-position: center
        position: absolute
        left: auto
        right: -65px
        bottom: 10px
        z-index: 2
      .swiper-slide
        img
          width: auto
          height: 100%
          left: 50%
          top: auto
          transform: translateX(-50%)
.moreProduct
  display: flex
  justify-content: center
  padding-top: 40px
</style>
