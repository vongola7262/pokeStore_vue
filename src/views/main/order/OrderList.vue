<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="orderList">
    <div class="container-md">
      <div class="input-textBox">
        <label for="inputNum">
          <h5>快速搜尋</h5>
        </label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入訂單編號"
            id="inputNum"
            v-model="keyword"
          >
          <button
            class="btn btn-search"
            type="button"
            @click.prevent="keyWordSearch(true)"
          >
            <p>搜尋</p>
          </button>
          <button
            type="button"
            class="btn btn-clean"
            @click.prevent="keyWordSearch(false)"
          >
            <p>清除</p>
          </button>
        </div>
      </div>
      <div class="listBox table-responsive-md">
        <table
          class="table align-middle"
          :class="{ more: pageDetail.length != 0 }"
        >
          <thead>
            <th></th>
            <th>
              <h6>訂單編號</h6>
            </th>
            <th>
              <h6>訂購人</h6>
            </th>
            <th class="totalPrice">
              <h6>總金額</h6>
            </th>
            <th>
              <h6>狀態</h6>
            </th>
            <th></th>
          </thead>
          <tbody>
            <tr v-for=" (item, index) in pageDetail" :key="item.id">
              <td>
                <p>{{ index +1 }}</p>
              </td>
              <td>
                <p>{{ item.id }}</p>
              </td>
              <td>
                <p>{{ item.user.name }}</p>
              </td>
              <td class="totalPrice">
                <p>NT$ {{ item.total }}</p>
              </td>
              <td>
                  <p v-if="item.is_paid" class="payed">已付款</p>
                  <p v-else class="unpay">待付款</p>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-more"
                  @click.prevent="checkOrder(item.id)"
                >
                  <p>查看更多</p>
                </button>
              </td>
            </tr>
            <tr v-if="pageDetail.length == 0 " class="noneList">
              <td colspan="6">
                <h4>查無訂單，請重新搜尋</h4>
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

<style lang="sass">
section.orderList
  padding: 40px 0
  .input-textBox
    max-width: 600px
    display: flex
    align-items: center
    margin: 0 auto 40px auto
    @media screen and (max-width:767px)
      flex-direction: column
      align-items: flex-start
    label
      margin-right: 10px
      width: 120px
      text-align: right
      @media screen and (max-width:767px)
        text-align: left
        margin-bottom: 10px
      h5
        color: #734230
    .input-group
      display: flex
      input
        border-color: #f0dec9
      input:focus
        box-shadow: none
        border-color: none
      button
        &:active
          border-color: #f0dec9
        &.btn-search
          background-color: #D9BD9C
        &.btn-clean
          background-color: #f0dec9
        p
          letter-spacing: 4px
  .listBox
    border-top: 2px solid #D9BD9C
    padding: 12px 0
    min-height: 50vh
    .totalPrice
      @media screen and (max-width:767px)
        display: none
    table
      &.more
        min-width: 600px
    thead
      th
        padding: 8px
        h6
          color: #734230
          padding: 0
    tbody
      tr
        border-color: #f0dec9
        transition: all 0.3s
        &:hover
            background-color: #f0dec9
        &.noneList
            text-align: center
            &:hover
              background-color: #fff
            td
              border: none
              height: 40vh
        td
          .payed
            color: #81A69B
            font-weight: 700
          .unpay
            color: #F24141
            font-weight: 700
          button
            background-color: #D9BD9C
            &:hover
              background-color: #D98841
              p
                color: #fff
</style>
