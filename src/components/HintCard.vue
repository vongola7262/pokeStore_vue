<template>
    <div
        class="hintBox"
        :class="{ active: isHint.active }"
    >
        <div v-if="isHint.status" class="imgBox">
            <img :src="success" alt="">
        </div>
        <div v-else class="imgBox">
            <img :src="error" alt="">
        </div>
        <p :class="{ error: !isHint.status}">
            {{ isHint.text }}
        </p>
    </div>
</template>

<script>
export default {
  props: ['isHint'],
  data () {
    return {
      success: './assets/images/icon/checked.png',
      error: './assets/images/icon/cancel.png'
    }
  }
}
</script>

<style lang="sass">
    .hintBox
        position: fixed
        top: 10%
        right: 5%
        width: 90%
        max-width: 250px
        background-color: #fff
        z-index: 555
        border-radius: 10px
        background: #D9BD9C
        box-shadow:  8px 8px 5px #898989
        display: none
        align-items: center
        padding: 10px
        &.active
            display: flex
            animation: failout  6s forwards
        .imgBox
            display: flex
            justify-content: center
            width: 80px
            margin-right: 10px
        img
            width: 60px
        p
            font-size: 14px
            font-weight: 700
            letter-spacing: 2px
            &.error
                color: #F24141
        @keyframes failout
            0%
                opacity: 1
            100%
                opacity: 0
</style>
