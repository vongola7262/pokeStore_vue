<template>
  <section class="banner">
    <img src="../../assets/images/banner/banner3.jpg" alt="" />
    <h2>聯絡我們</h2>
  </section>
  <router-view></router-view>
</template>

<style lang="sass">
section.banner
    width: 100%
    height: 250px
    position: relative
    overflow: hidden
    display: flex
    justify-content: center
    align-items: center
    &::before
        content: ''
        display: block
        width: 100%
        height: 100%
        background-color: rgba(255,255,255, 0.5)
        position: absolute
        left: 0
        top: 0
        z-index: 2
    img
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
        width: 100%
    h2
        position: relative
        z-index: 3
        color: #734230
        font-size: 42px
        letter-spacing: 20px
        text-shadow:  #fff 1px 0 10px
</style>
