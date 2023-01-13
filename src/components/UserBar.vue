<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light" :class="{top: isTop}">
      <div class="containBox">
        <router-link :to="{ name: 'index' }" class="navbar-brand">
          <img src="@/assets/images/pokemonStore.png" alt="">
        </router-link>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'typeList' }" class="nav-link">
                <p>商品</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'contact' }" class="nav-link">
                <p>聯絡我們</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'cart' }" class="nav-link">
                <p>購物車</p>
              </router-link>
            </li>
          </ul>
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
      isTop: false,
      backTop: false
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
    backToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  created () {
    window.addEventListener('scroll', this.userBar)
  }
}
</script>
<style lang="sass">
// @import '/src/assets/common.sass'

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
    img
      height: 100%
  .collapse
    justify-content: flex-end
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
      background-image: url('/src/assets/images/arrowhead-up.png')
      background-size: contain
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%,-50%)
</style>
