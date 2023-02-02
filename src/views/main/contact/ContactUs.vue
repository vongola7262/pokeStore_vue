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
        title: '聯絡我們',
        img: './assets/images/banner/banner4.jpg'
      }
    }
  }
}
</script>
