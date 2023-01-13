<template>
  <UserBar></UserBar>
  <router-view></router-view>
  <UserFooter></UserFooter>
</template>

<script>
import UserBar from '@/components/UserBar.vue'
import UserFooter from '@/components/UserFooter.vue'
export default {
  components: {
    UserBar,
    UserFooter
  },
  data () {
    return {}
  }
}
</script>
