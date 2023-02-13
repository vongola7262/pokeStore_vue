<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-6 porLeft"
        data-aos="flip-left"
        data-aos-duration="1500"
        data-aos-offset="400"
      >
        <h2>潮流新品</h2>
        <div class="swiperBox swiperboxL">
          <swiper
            :slides-per-view="1"
            :space-between="50"
            :navigation="true"
            :modules="modules"
          >
            <swiper-slide
              v-for="(item, index) in Hot"
              :key="index"
            >
              <div class="imgBox swiperL" @click.prevent="getProductDetail(item.id)">
                <img :src="item.imageUrl" :alt="item.title" />
                <div class="titleBox">
                  <h5>NT$ {{ item.price }}</h5>
                  <h3>{{ item.title }}</h3>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div
        class="col-lg-6 porRight"
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-delay="1000"
      >
        <div class="textBox">
          <div class="swiperBox">
            <swiper
              :slides-per-view="1"
              :space-between="50"
              :navigation="true"
              :modules="modules"
            >
              <swiper-slide
                v-for="(item, index) in Joint"
                :key="index"
              >
                <div class="imgBox swiperR" @click.prevent="getProductDetail(item.id)">
                  <img :src="item.imageUrl" :alt="item.title" />
                  <div class="titleBox">
                    <h5>NT$ {{ item.price }}</h5>
                    <h3>{{ item.title }}</h3>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <h2>熱銷聯名</h2>
      </div>
      <div class="col-lg-12">
        <div class="moreProduct">
          <a href="#" class="moreBtn" @click.prevent="goType('/typeList/all')">
            <h4>查看更多</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['swiperHot', 'swiperJoint'],
  setup (props) {
    const router = useRouter()
    let Hot = null
    let Joint = null
    watchEffect(() => {
      Hot = props.swiperHot
      Joint = props.swiperJoint
    })
    function getProductDetail (id) {
      router.push(`/product/${id}`)
    }
    function goType (n) {
      router.push(n)
    }
    return {
      Hot,
      Joint,
      goType,
      getProductDetail,
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
      @media screen and (max-width:575px)
        font-size: 30px
.swiperBox
    position: relative
    &.swiperboxL
      @media screen and (max-width:991px)
        width: 90%
        margin: 0 auto
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
      background-image: url('/public/assets/images/pokemon/pick2.png')
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
        .imgBox
            position: relative
            overflow: hidden
            width: 100%
            height: 0
            cursor: pointer
            &::before
              content: ''
              display: block
              width: 100%
              height: 100%
              background-color: rgba(54,54,54,0.8)
              position: absolute
              left: 0
              top: 0
              z-index: 2
              opacity: 0
              transition: all 0.5s
            img
              width: 100%
              position: absolute
              top: 50%
              transform: translateY(-50%)
            &.swiperL
              padding-bottom: 66.66%
            &.swiperR
              padding-bottom: 150%
            .titleBox
              position: absolute
              left: 10%
              bottom: 10%
              z-index: 3
              opacity: 0
              transition: all 0.8s
              display: flex
              flex-direction: column
              justify-content: center
              h3,h5
                color: #fff
            &:hover
              &::before,.titleBox
                opacity: 1

.porRight
  position: relative
  @media screen and (max-width:991px)
    margin-top: 100px
  h2
    font-size: 36px
    color: #734230
    margin: 0
    letter-spacing: 10px
    writing-mode: vertical-lr
    position: absolute
    right: 12%
    top: 10%
    @media screen and (max-width:1399px)
      right: 5%
    @media screen and (max-width:1199px)
      right: 2%
    @media screen and (max-width:991px)
      right: 20%
    @media screen and (max-width:767px)
      right: 10%
    @media screen and (max-width:575px)
      font-size: 30px
  .textBox
    width: 80%
    max-width: 350px
    margin: 0 auto
    @media screen and (max-width:1199px)
      width: 70%
    @media screen and (max-width:991px)
      position: relative
      right: 50px
      width: 80%
      max-width: 400px
    @media screen and (max-width:767px)
      width: 70%
    .swiperBox
      &::before
        height: 90%
        right: -100px
      &::after
        content: ''
        display: block
        width: 100px
        height: 200px
        background-image: url('/public/assets/images/pokemon/pick1.png')
        background-repeat: no-repeat
        background-size: contain
        background-position: center
        position: absolute
        left: auto
        right: -65px
        bottom: 10px
        z-index: 2
        @media screen and (max-width:575px)
          width: 70px
          height: 140px
          bottom: -50px
      .swiper-slide
        img
          width: auto
          height: 100%
          left: 50%
          top: auto
          transform: translateX(-50%)
        .titleBox
          width: 80%
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%,-50%)
.moreProduct
  display: flex
  justify-content: center
  padding-top: 40px
</style>
