<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <ToastMessage></ToastMessage>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import emitter from '@/methods/mitt'
import ToastMessage from '@/components/ToastMessage.vue'

export default {
  components: {
    Navbar,
    ToastMessage
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.axios.defaults.headers.common.Authorization = myCookie
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.axios.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push({ name: 'login' })
      }
    })
  }
}
</script>
