<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light" :class="{top: isTop}">
      <div class="containBox">
        <a href="#"
          class="navbar-brand"
          @click.prevent="goIndex"
        >
          <img :src="img" alt="">
        </a>
        <div
          class="navbar-collapse"
          id="navbarText"
          :class="{ close: !phoneStatus && !loadFirst ,open: phoneStatus && !loadFirst}"
        >
          <ul class="navbar-nav mb-lg-0">
            <li v-for="(item, index) in pageList" :key="index" :class="item.class">
              <a href="#" class="nav-link" @click.prevent="goNext(item.link)">
                <p>{{ item.name }}</p>
                <div v-if="item.class === 'cart' && getQty > 0" class="numText">
                  <p>{{ getQty }}</p>
                </div>
              </a>
            </li>
          </ul>
          <div class="coptBox">
            <a href="https://tw.portal-pokemon.com/" target= _blank>
              <img
                :src="footerImg"
                alt="pokemon"
              />
            </a>
            <p>
              Copyright © Jing Yu Sing 2023
              <br/>
              僅個人作品，無商業用途
            </p>
          </div>
        </div>
        <div
          class="hamburger"
          :class="{ close: !phoneStatus && !loadFirst ,open: phoneStatus && !loadFirst}"
          @click.prevent="phoneBar"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <a class="topTip" :class="{top: backTop}" @click.prevent="backToTop">
      </a>
    </nav>
  </header>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  data () {
    return {
      img: './assets/images/pokemon/pokemonStore.png',
      footerImg: './assets/images/pokemon/International_Pokémon_logo.svg.png',
      // 導覽列是否置頂
      isTop: false,
      // 是否出現回最上方
      backTop: false,
      // 手機版選單開關 初始化狀態
      loadFirst: true,
      phoneStatus: false,
      pageList: [
        {
          name: '商品',
          class: 'product',
          link: '/typeList/all'
        },
        {
          name: '購物車',
          class: 'cart',
          link: '/cart'
        },
        {
          name: '訂單查詢',
          class: 'order',
          link: '/order'
        },
        {
          name: '聯絡我們',
          class: 'contact',
          link: '/contact'
        }
      ]
    }
  },
  computed: {
    ...mapState(cartStore, ['totalNum', 'getQty'])
  },
  methods: {
    ...mapActions(cartStore, ['getCartList']),
    userBar () {
      const scrollHeight = window.pageYOffset
      if (scrollHeight > 0) {
        this.isTop = true
        if (scrollHeight > 600) {
          this.backTop = true
        } else {
          this.backTop = false
        }
      } else {
        this.isTop = false
      }
    },
    viewType () {
      if (window.outerWidth > 767) {
        this.phoneStatus = false
        this.loadFirst = true
      }
    },
    backToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    goNext (n) {
      this.$router.push(n)
      this.phoneStatus = false
      this.loadFirst = true
    },
    goIndex () {
      this.$router.push({ name: 'index' })
      this.phoneStatus = false
      this.loadFirst = true
    },
    phoneBar () {
      this.loadFirst = false
      if (this.phoneStatus === true) {
        this.phoneStatus = false
      } else {
        this.phoneStatus = true
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.userBar)
    window.addEventListener('resize', this.viewType)
    this.getCartList()
  }
}
</script>
<style lang="sass">
nav.navbar
  position: fixed
  left: 0
  top: 0
  z-index: 999
  width: 100%
  &.top
    background-color: rgba(255,255 ,255 ,0.8 )
  .containBox
    width: 90%
    max-width: 1800px
    margin: 0 auto
    display: flex
  .navbar-brand
    height: 50px
    @media screen and (max-width:575px)
      height: 40px
    img
      height: 100%
  .navbar-collapse
    justify-content: flex-end
    @media screen and (max-width:767px)
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100vh
      z-index: -1
      transform: scale(0)
      padding: 50px 0
      &::before
        content: ''
        display: none
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
        border-radius: 50%
        width: 200vh
        height: 200vh
        background-color: #D9BD9C
      ul
        opacity: 0
        width: 90%
        margin: 40px auto
        li
          margin: 0
          a
            justify-content: center
            p
              text-align: center
              font-size: 24px
              line-height: 2
      &.open
        animation: phoneOpen2 0.7s forwards
        &::before
          display: block
        ul
          animation: phoneOpen 0.3s 0.7s forwards
      &.close
        animation: phoneClose2 1.2s forwards
        &::before
          display: block
        ul
          animation: phoneClose 0.1s forwards
      @keyframes phoneOpen
        0%
          opacity: 0
        100%
          opacity: 1
      @keyframes phoneClose
        0%
          opacity: 1
        100%
          opacity: 0
      @keyframes phoneOpen2
        0%
          transform: scale(0)
        100%
          transform: scale(1)
      @keyframes phoneClose2
        0%
          transform: scale(1)
        100%
          transform: scale(0)

  .hamburger
    width: 25px
    height: 20px
    display: none
    flex-direction: column
    justify-content: space-between
    cursor: pointer
    position: absolute
    right: 5%
    top: 50%
    transform: translateY(-50%)
    @media screen and (max-width:767px)
      display: flex
    .line
      width: 100%
      height: 2px
      position: relative
      transition: all 0.3s
      background-color: #4a3921
    &.open
      .line:first-child
        transform: rotate(45deg)
        top: 45%
      .line:nth-child(2)
        opacity: 0
      .line:last-child
        transform: rotate(-45deg)
        top: -45%
    &.close
      .line:first-child
        transform: rotate(0deg)
        top: 0%
      .line:nth-child(2)
        opacity: 1
      .line:last-child
        transform: rotate(0deg)
        top: 0%

  li
    margin: 0 10px
    position: relative
    overflow: hidden
    &::before
      content: ''
      display: block
      width: 100%
      height: 2px
      background-color: #313b46
      position: absolute
      left: -100%
      bottom: 0
    &:hover
      &::before
        animation: nav-line 0.5s forwards
      @media screen and (max-width:767px)
        &::before
          animation: none
        p
          color: #734230
    a.nav-link
      display: flex
      align-items: center
      p
        color: #000000
        font-weight: 500
        letter-spacing: 4px
        font-size: 18px
        transition: all 0.3s
      .numText
        display: flex
        justify-content: center
        align-items: center
        min-width: 20px
        height: 20px
        padding: 0 5px
        border-radius: 12px
        background-color: #734230
        p
          font-size: 14px
          color: #fff
          position: relative
          left: 2px
  @keyframes nav-line
    0%
      left: -100%
    100%
      left: 0%
  .coptBox
    display: none
    position: absolute
    bottom: 0
    left: 50%
    transform: translateX(-50%)
    @media screen and (max-width:767px)
      display: flex
      width: 90%
      margin: 0 auto
      border-top: 2px solid #734230
      padding: 30px 0
      justify-content: center
    @media screen and (max-width:575px)
      flex-direction: column
      align-items: center
      padding: 0 0 20px 0
    a
      display: block
      width: auto
      img
        width: 80%
        max-width: 140px
      @media screen and (max-width:575px)
        padding: 20px 0
    p
      text-align: center
      font-size: 14px
      letter-spacing: 2px
  .topTip
    display: none
    position: fixed
    right: 5%
    bottom: 8%
    width: 50px
    height: 50px
    border-radius: 50%
    background-color: rgba(255,255,255,0.4)
    cursor: pointer
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6)
    &.top
      display: block
    &::before
      width: 30px
      height: 30px
      content:''
      display: block
      background-image: url('/public/assets/images/icon/arrowhead-up.png')
      background-size: contain
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%,-50%)
</style>
