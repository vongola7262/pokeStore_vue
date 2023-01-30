<template>
  <section class="errorPage">
    <div class="mainBox">
      <div class="mainText animate__animated animate__tada">
        <h4>404!</h4>
        <h2>頁面不存在</h2>
      </div>
      <p>將在{{ secound }}秒後自動回到首頁</p>
      <router-link :to="{ name: 'index' }" class="nextBtn">
        <h5>回到首頁</h5>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      secound: 6
    }
  },
  methods: {
    counted () {
      if (this.secound > 1) {
        this.secound -= 1
        setTimeout(this.counted, 1000)
      } else {
        this.$router.push({ name: 'index' })
      }
    }
  },
  created () {
    this.counted()
  }
}
</script>

<style lang="sass">
section.errorPage
    width: 100%
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    .mainBox
        text-align: center
        h2,h4,p
            font-family: 'Noto Sans TC',sans-serif
        h2,h4
            color: #734230
            letter-spacing: 10px
        h2
            font-size: 80px
        h4
            font-size: 40px
        p
            margin-top: 20px
            margin-bottom: 60px
</style>
