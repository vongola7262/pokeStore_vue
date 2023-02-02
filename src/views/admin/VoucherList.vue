<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click.prevent="openMenu(false)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in vocList" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filterdate.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未起用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click.prevent="openMenu(true,item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click.prevent="deleteItem(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <PageList :pages="pages" @nextpage="getOrder"></PageList>
    <Modal ref="vcModal" :voucher="tempProducts" @update-coupon="sendItem"></Modal>
  </div>
</template>

<script>
import Modal from '@/components/VoucherMenu.vue'
import PageList from '@/components/PageList.vue'
import LoadingImg from '@/components/LoadingImg.vue'

export default {
  components: {
    Modal,
    PageList,
    LoadingImg
  },
  data () {
    return {
      vocList: [],
      pages: {},
      tempProducts: {},
      isNew: false,
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getOrder (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${page}`
      this.isLoading = true
      this.axios.get(api).then(res => {
        this.isLoading = false
        this.vocList = res.data.coupons
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
      this.$refs.vcModal.showModal()
    },
    sendItem (item) {
      this.tempProducts = item
      console.log(item)
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let send = 'post'
      if (this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        send = 'put'
      }
      this.isLoading = true
      this.axios({
        method: send,
        url: api,
        data: { data: this.tempProducts }
      }).then(res => {
        this.isLoading = false
        this.$refs.vcModal.hiddenModal()
        if (res.data.success) {
          this.getOrder()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功',
            content: '優惠券已更新'
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
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      this.isLoading = true
      this.axios.delete(api, item.id).then((res) => {
        this.isLoading = false
        this.getOrder()
      })
    }
  },
  created () {
    this.getOrder()
  }
}
</script>
