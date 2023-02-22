<template>
  <section class="banner">
    <img :src="banner.img" alt="" />
    <h2>{{ banner.title }}</h2>
  </section>
</template>

<script>
export default {
  props: ['banner']
}
</script>

<style lang="sass">
section.banner
    width: 100%
    height: 200px
    position: relative
    overflow: hidden
    display: flex
    justify-content: center
    align-items: center
    @media screen and (max-width:575px)
      height: 140px
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
        min-height: 200px
        @media screen and (max-width:575px)
          min-height: 160px
    h2
        position: relative
        z-index: 3
        color: #734230
        font-size: 42px
        letter-spacing: 20px
        text-shadow:  #fff 1px 0 10px
        margin-bottom: 0
        @media screen and (max-width:575px)
          font-size: 32px
          letter-spacing: 10px
</style>
