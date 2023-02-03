<template>
  <BannerImg :banner="bannerDetail"></BannerImg>
  <router-view></router-view>
</template>

<script>
import BannerImg from '@/components/BannerImg.vue'

export default {
  components: {
    BannerImg
  },
  data () {
    return {
      bannerDetail: {
        title: '訂單資訊',
        img: './assets/images/banner/banner3.jpg'
      }
    }
  }
}
</script>
