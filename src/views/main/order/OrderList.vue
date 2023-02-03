<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section>
    <div>
        <input
          type="text"
          placeholder="請輸入關鍵字"
          v-model="keyword"
        >
        <button
          type="button"
          @click.prevent="keyWordSearch(true)"
        >
          <p>搜尋</p>
        </button>
        <button
          type="button"
          @click.prevent="keyWordSearch(false)"
        >
          <p>清除</p>
        </button>
    </div>
    <div>
      <table class="table align-middle">
        <thead>
          <th></th>
          <th>訂單編號</th>
          <th>訂購人姓名</th>
          <th>訂單總金額</th>
          <th>訂單狀態</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for=" (item, index) in pageDetail" :key="item.id">
            <td>{{ index +1 }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.user.name }}</td>
            <td>NT$ {{ item.total }}</td>
            <td>
                <p v-if="item.is_paid">已付款</p>
                <p v-else>待付款</p>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click.prevent="checkOrder(item.id)"
              >
                查看更多
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <UserPageList
        :num="pageTotal"
        :now-Page="page"
        @newpage="resetPage">
      </UserPageList>
    </div>
  </section>
</template>

<script>
import UserPageList from '@/components/UserPageList.vue'
import LoadingImg from '@/components/LoadingImg.vue'

export default {
  components: {
    UserPageList,
    LoadingImg
  },
  data () {
    return {
      // 待機狀態
      isLoading: false,
      // 全部data
      orderList: [],
      // 搜尋後data
      finalList: [],
      // 輸入關鍵字
      keyword: '',
      // 關鍵字
      search: '',
      // 起始頁數(api用)
      startPage: 1,
      // 全部頁數
      pageTotal: 0,
      // 每頁10筆
      perpage: 10,
      // 當前頁碼
      page: null
    }
  },
  methods: {
    // 取得所有訂單
    getOrderList (page) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        const newdata = [...this.orderList, ...res.data.orders]
        this.orderList = newdata
        if (res.data.pagination.has_next) {
          this.getOrderList(this.startPage += 1)
        } else {
          this.calc(this.orderList.length)
          this.page = 1
          this.finalList = this.orderList
          this.isLoading = false
        }
      })
    },
    // 查看更多
    checkOrder (id) {
      this.$router.push(`/order/checkout/${id}`)
    },
    // 訂單編號搜尋 / 清除
    keyWordSearch (s) {
      if (s === true) {
        this.search = this.keyword
      } else {
        this.search = ''
        this.keyword = ''
      }
      this.search = this.keyword
    },
    // 頁數計算
    calc (n) {
      const r = this.perpage
      this.pageTotal = Math.ceil(n / r)
    },
    resetPage (i) {
      this.page = i
    }
  },
  watch: {
    search (k) {
      this.finalList = this.orderList.filter(item => item.id.match(k))
      this.calc(this.finalList.length)
      this.page = 1
    }
  },
  computed: {
    pageDetail () {
      const pageTotal = this.pageTotal
      const perpage = this.perpage
      let currentPage = this.page
      if (currentPage > pageTotal) {
        currentPage = pageTotal
      }
      const minData = (currentPage * perpage) - perpage + 1
      const maxData = (currentPage * perpage)

      const pageData = []
      this.finalList.forEach((item, index) => {
        const num = index + 1
        if (num >= minData && num <= maxData) {
          pageData.push(item)
        }
      })
      return pageData
    }
  },
  created () {
    this.getOrderList(this.startPage)
  }
}
</script>
