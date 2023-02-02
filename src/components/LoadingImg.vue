<template>
    <LoadingPage :active="loadStatus" :opacity="0.9" :background-color="`#fff`">
        <img
        :src="img"
        alt=""
        style="width: 250px; height: 250px"
        />
    </LoadingPage>
</template>

<script>
export default {
  props: ['loadStatus'],
  data () {
    return {
      img: './assets/images/pokemon/pika.gif'
    }
  }
}
</script>
