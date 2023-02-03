<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="mainCartList">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in cartList" :key="item.id">
        <p>{{ item.product.title }}</p>
        <input
          type="number"
          name="itemQty"
          id="itemQty"
          v-model="item.qty"
          min="1"
          @change.prevent="updateCart(item)"
        />
        <p v-if="item.coupon">
          優惠價 {{ item.final_total }}(折扣{{ item.coupon.percent }}%)
        </p>
        <p v-else>特價 {{ item.final_total }}</p>
        <button type="button" @click.prevent="removeItem(item.id)">
          <p>刪除</p>
        </button>
      </li>
    </ul>
    <button type="button" @click.prevent="cleanAll">
      <p>全部清空</p>
    </button>
    <div class="inputCode">
      <input type="text" placeholder="輸入優惠碼" v-model="Code" />
      <button type="button" @click.prevent="enterCode">
        <p>套用</p>
      </button>
    </div>
    <p>原價 {{ total }}</p>
    <p>折價 {{ total - final_total }}</p>
    <p>總金額 {{ final_total }}</p>
    <a href="#" @click.prevent="nextStep()">
      <p>下一步</p>
    </a>
  </section>
</template>

<script>
import LoadingImg from '@/components/LoadingImg.vue'

export default {
  components: {
    LoadingImg
  },
  data () {
    return {
      cartList: null,
      total: null,
      final_total: null,
      Code: null,
      isLoading: false
    }
  },
  methods: {
    // 取得所有資料
    getCartList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        this.cartList = res.data.data.carts
        this.total = res.data.data.total
        this.final_total = res.data.data.final_total
        this.isLoading = false
      })
    },
    // 更新單筆數量
    updateCart (item) {
      const { id, qty, product_id: proId } = item
      const cartItem = {
        product_id: proId,
        qty: qty
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.axios.put(api, { data: cartItem }).then((res) => {
        console.log(res)
        this.getCartList()
      })
    },
    // 刪除單筆
    removeItem (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.axios.delete(api).then((res) => {
        console.log(res)
        this.getCartList()
      })
    },
    // 全部刪除
    cleanAll () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.axios.delete(api).then((res) => {
        console.log(res)
        this.getCartList()
      })
    },
    // 套用優惠碼
    enterCode () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const code = {
        code: this.Code
      }
      this.axios.post(api, { data: code }).then((res) => {
        console.log(res)
        this.getCartList()
      })
    },
    // 結帳
    nextStep () {
      this.$router.push({ name: 'cartform' })
    }
  },
  created () {
    this.getCartList()
  }
}
</script>
