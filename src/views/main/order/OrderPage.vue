<template>
  <BannerImg :banner="bannerDetail"></BannerImg>
  <router-view></router-view>
</template>

<script>
import BannerImg from '@/components/BannerImg.vue'
import { useSeoMeta } from 'unhead'

useSeoMeta({
  title: '商品訂單'
})

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
