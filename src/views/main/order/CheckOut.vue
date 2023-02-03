<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section>
    <div class="my-5 row justify-content-center">
      <div class="col-md-6">
        <div v-if="orderStatus">
          <h4>訂單編號 {{ orderId }}</h4>
          <table class="table align-middle">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }} / {{ item.product.unit }}</td>
                <td class="text-end">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>

          <table class="table">
            <tbody>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>收件時段</th>
                <td v-if="order.user.meetTime ==1 ">8:00 ~ 12:00</td>
                <td v-else-if="order.user.meetTime ==2 ">13:00 ~ 17:00</td>
                <td v-else>18:00 ~ 21:00</td>
              </tr>
              <tr>
                <th>備註</th>
                <td>{{ order.message }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end" v-if="!order.is_paid">
            <button
              type="button"
              class="btn btn-secondary"
              @click.prevent="payLater"
            >
              稍後付款
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="payOrder(orderId)"
            >
              付款去
            </button>
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
          console.log(res)
          this.$router.push({ name: 'cartsuccess' })
        } else {
          console.log('error')
          this.$router.push({ name: 'cartsuccess' })
        }
      })
    },
    // 稍後付款
    payLater () {
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
