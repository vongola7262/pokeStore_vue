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
            <li v-for="(item, index) in pageList" :key="index">
              <a href="#" class="nav-link" @click.prevent="goNext(item.link)">
                <p>{{ item.name }}</p>
              </a>
            </li>
          </ul>
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
export default {
  data () {
    return {
      img: './assets/images/pokemon/pokemonStore.png',
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
          link: '/typeList/all'
        },
        {
          name: '購物車',
          link: '/cart'
        },
        {
          name: '訂單查詢',
          link: '/order'
        },
        {
          name: '聯絡我們',
          link: '/contact'
        }
      ]
    }
  },
  methods: {
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
  p
    color: #000000
    font-weight: 500
    letter-spacing: 4px
    font-size: 18px
    transition: all 0.3s
  @keyframes nav-line
    0%
      left: -100%
    100%
      left: 0%
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
