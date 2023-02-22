<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="checkDetail">
    <div class="checkoutBox">
      <div v-if="orderStatus" class="checkoutList">
        <h3>訂單編號: {{ orderId }}</h3>
        <div class="checkoutDetail">
          <h4>商品資訊</h4>
          <table class="table align-middle">
            <thead>
              <th>
                <p>品名</p>
              </th>
              <th>
                <p>數量</p>
              </th>
              <th class="text-end">
                <p>單價</p>
              </th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>
                  <p>{{ item.product.title }}</p>
                </td>
                <td>
                  <p>{{ item.qty }} {{ item.product.unit }}</p>
                </td>
                <td class="text-end">
                  <p>NT$ {{ item.final_total }}</p>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end totalStatus">
                  <h4>總計: NT${{ order.total }}</h4>
                </td>
              </tr>
            </tfoot>
          </table>
          <h4>訂購人資訊</h4>
          <table class="table">
            <tbody>
              <tr>
                <th>
                  <p>姓名</p>
                </th>
                <td>
                  <p>{{ order.user.name }}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p>電話</p>
                </th>
                <td>
                  <p>{{ order.user.tel }}</p>
                </td>
              </tr>
              <tr>
                <th width="100">
                  <p>Email</p>
                </th>
                <td>
                  <p>{{ order.user.email }}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p>地址</p>
                </th>
                <td>
                  <p>{{ order.user.address }}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p>收件時段</p>
                </th>
                <td v-if="order.user.meetTime ==1 ">
                  <p>8:00 ~ 12:00</p>
                </td>
                <td v-else-if="order.user.meetTime ==2 ">
                  <p>13:00 ~ 17:00</p>
                </td>
                <td v-else>
                  <p>18:00 ~ 21:00</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p>備註</p>
                </th>
                <td>
                  <p>{{ order.message }}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end payBtn">
            <div class="backBtn">
              <div
                class="backStep"
                @click.prevent="backList"
              >
                <p>返回列表</p>
              </div>
            </div>
            <div class="nextBox">
              <div class="text-end totalStatus">
                <h4 v-if="!order.is_paid" class="text-wait">付款狀態: 待付款</h4>
                <h4 v-else class="text-succ">付款狀態: 已完成</h4>
              </div>
              <div class="btngroup" v-if="!order.is_paid">
                <button
                  type="button"
                  class="btn btnWait"
                  @click.prevent="payLater"
                >
                  <p>繼續購物</p>
                </button>
                <button
                  type="button"
                  class="btn btnPay"
                  @click.prevent="payOrder(orderId)"
                >
                  <p>付款去</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoadingImg from '@/components/LoadingImg.vue'

export default {
  props: ['id'],
  components: {
    LoadingImg
  },
  data () {
    return {
      isLoading: false,
      orderStatus: false,
      orderId: null,
      order: null
    }
  },
  methods: {
    // 取得訂單編號
    getOrder (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`
      this.axios.get(api).then(res => {
        this.order = res.data.order
        this.isLoading = false
        this.orderStatus = true
      })
    },
    // 付款
    payOrder (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`
      this.axios.post(api).then(res => {
        if (res.data.success === true) {
          this.$router.push({ name: 'cartsuccess' })
        }
      })
    },
    // 稍後付款
    payLater () {
      this.$router.push({ path: '/typeList/all' })
    },
    // 返回
    backList () {
      this.$router.push({ name: 'orderlist' })
    }
  },
  created () {
    const { id } = this.$route.params
    this.orderId = id
    this.getOrder(id)
  }
}
</script>

<style lang="sass">
section.checkDetail
  padding: 60px 0
  background-color: #f0dec9
  @media screen and (max-width:575px)
    padding: 40px 0
.checkoutBox
  width: 80%
  max-width: 800px
  margin: 0 auto
  background-color: #fff
  overflow: hidden
  border-radius: 20px
  border: 1px solid #D9BD9C
  box-shadow: 8px 8px 14px #734230
  @media screen and (max-width:575px)
    width: 90%
  @media screen and (max-width:339px)
    width: 95%
  .checkoutList
    padding: 40px 20px
    @media screen and (max-width:575px)
      padding: 20px 10px
    h3
      padding-bottom: 40px
      text-align: center
      color: #734230
      margin: 0
      border-bottom: 2px solid #D9BD9C
      word-wrap: break-word
      @media screen and (max-width:575px)
        font-size: 22px
        letter-spacing: 2px
        padding-bottom: 20px
        line-height: 1.5
    .checkoutDetail
      width: 90%
      margin: 0 auto
      @media screen and (max-width:575px)
        width: 100%
      h4
        margin: 15px 0
        color: #734230
        &.text-wait
          color: #F24141
        &.text-succ
          color: #81A69B
      table.table
        margin-bottom: 0
        thead
          th
            padding: 0.5rem
            p
              padding: 0
        tfoot
          td.totalStatus
            border: none
      .payBtn
        padding: 0.5rem
        display: flex
        justify-content: space-between
        align-items: flex-end
        width: 100%
        @media screen and (max-width:575px)
          flex-direction: column
        .backBtn
          width: 20%
          min-width: 120px
          @media screen and (max-width:575px)
            display: flex
            order: 2
            width: 100%
            margin-top: 15px
        button
          margin-left:10px
          &.btnPay
            color: #fff
            background-color: #81A69B
            &:hover
              background-color: #3DC5BA
          &.btnWait
            background-color: #D9BD9C
            color: #734230
            &:hover
              background-color: #d5aa78
          @media screen and (max-width:575px)
            order: 1
</style>
