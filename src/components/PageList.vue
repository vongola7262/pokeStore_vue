<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage()">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page"
      :class="{'active' : page === pages.current_page}">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{page}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage()">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updatePage (p) {
      this.$emit('nextpage', p)
    },
    nextPage () {
      if (this.pages.has_next) {
        const next = this.pages.current_page + 1
        this.$emit('nextpage', next)
      }
    },
    prevPage () {
      if (this.pages.has_pre) {
        const prev = this.pages.current_page - 1
        this.$emit('nextpage', prev)
      }
    }
  }
}
</script>
