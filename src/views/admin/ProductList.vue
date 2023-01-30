<template>
  <LoadingPage
    :active="isLoading"
    :opacity="0.8"
    :background-color="`#fff`"
  >
    <img src="../../assets/images/pika.gif" alt="" style="width: 250px;height: 250px">
  </LoadingPage>
  <div class="text-end">
    <button
     class="btn btn-primary"
     type="button"
     @click.prevent="openMenu(false)"
    >
        新增一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">{{$filter.currency(item.origin_price)}}</td>
        <td class="text-right">{{$filter.currency(item.price)}}</td>
        <td>
          <span v-if="item.is_enabled" span class="text-success">啟用</span>
          <span v-else span class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click.prevent="openMenu(true,item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click.prevent="deleteItem(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PageList :pages="pages" @nextpage="getProducts"></PageList>
  <Modal ref="myModal" :product="tempProducts" @send-item="sendItem"></Modal>
</template>

<script>
import Modal from '@/components/ProductMenu.vue'
import PageList from '@/components/PageList.vue'

export default {
  components: {
    Modal,
    PageList
  },
  data () {
    return {
      products: [],
      pages: {},
      tempProducts: {},
      isNew: false,
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        this.isLoading = false
        this.products = res.data.products
        this.pages = res.data.pagination
      })
    },
    openMenu (isNew, item) {
      if (!isNew) {
        this.tempProducts = {}
      } else {
        this.tempProducts = { ...item }
      }
      this.isNew = isNew
      this.$refs.myModal.showModal()
    },
    sendItem (item) {
      this.tempProducts = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let send = 'post'
      if (this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        send = 'put'
      }
      this.isLoading = true
      this.axios({
        method: send,
        url: api,
        data: { data: this.tempProducts }
      }).then((res) => {
        this.isLoading = false
        this.$refs.myModal.hiddenModal()
        if (res.data.success) {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功',
            content: '商品已更新'
          })
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join(',')
          })
        }
      })
    },
    deleteItem (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.isLoading = true
      this.axios.delete(api, item.id).then((res) => {
        this.isLoading = false
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
