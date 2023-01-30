<template>
  <UserBar></UserBar>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <UserFooter></UserFooter>
  </footer>
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
