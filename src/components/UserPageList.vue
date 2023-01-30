<template>
  <ul class="pagination" id="pageid">
    <li class="page-item" :class="{ disabled: !hasPage }">
      <a
        class="page-link"
        href="#"
        :data-page="nowPage - 1"
        @click.prevent="pageChange(nowPage - 1)"
      >
        上一頁
      </a>
    </li>
    <li
      class="page-item"
      v-for="item in num"
      :key="item"
      :class="{ active: item === nowPage }"
    >
      <a
        class="page-link"
        href="#"
        :data-page="item"
        @click.prevent="pageChange(item)"
      >
        {{ item }}
      </a>
    </li>
    <li class="page-item" :class="{ disabled: !hasNext }">
      <a
        class="page-link"
        href="#"
        :data-page="nowPage + 1"
        @click.prevent="pageChange(nowPage + 1)"
      >
        下一頁
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['num', 'nowPage'],
  // emits: ['newPage'],
  methods: {
    pageChange (i) {
      this.$emit('newpage', i)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    hasPage () {
      return this.nowPage > 1
    },
    hasNext () {
      return this.nowPage < this.num
    }
  }
}
</script>

<style lang="sass">
.pagination
  justify-content: center
  margin: 16px 0
</style>
