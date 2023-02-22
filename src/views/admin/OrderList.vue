<template>
  <LoadingImg :active="isLoading"></LoadingImg>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">序號</th>
        <th>訂單編號</th>
        <th width="120">訂購人</th>
        <th width="120">金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orderList" :key="item.id">
        <td>{{index +1}}</td>
        <td>{{item.id}}</td>
        <td class="text-right">{{item.user.name}}</td>
        <td class="text-right">NT$ {{item.total}}</td>
        <td>
          <span :class="{ 'text-success': item.is_paid}">
            {{item.is_paid}}
          </span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click.prevent="deleteOrder(item.id)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="btnBox" v-if="orderList.length > 2">
    <button type="button" class="btn btn-danger" @click.prevent="deleteAllOrder">全部刪除</button>
  </div>
  <div v-if="orderList.length > 0">
    <PageList :pages="pages" @nextpage="getOrder"></PageList>
  </div>
</template>

<script>
import LoadingImg from '@/components/LoadingImg.vue'
import PageList from '@/components/PageList.vue'
export default {
  components: {
    PageList,
    LoadingImg
  },
  data () {
    return {
      orderList: [],
      pages: {},
      isLoading: false
    }
  },
  methods: {
    getOrder (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      this.isLoading = true
      this.axios.get(api).then(res => {
        this.isLoading = false
        this.orderList = res.data.orders
        this.pages = res.data.pagination
      })
    },
    // 刪除訂單
    deleteOrder (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.isLoading = true
      this.axios.delete(api).then(res => {
        this.getOrder()
      })
    },
    // 刪除全部訂單
    deleteAllOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.isLoading = true
      this.axios.delete(api).then(res => {
        this.getOrder()
      })
    }
  },
  created () {
    this.getOrder()
  }
}
</script>

<style lang="sass">
  .btnBox
    width: 100%
    display: flex
    justify-content: flex-end
</style>
