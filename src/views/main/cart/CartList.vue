<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="mainCartList">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <ul class="list-group">
            <li class="list-group-item"
              v-for="item in cartList"
              :key="item.id"
            >
              <div class="col-md-4">
                <div class="imgBox">
                  <img :src="item.product.imageUrl" :alt="item.product.title">
                </div>
              </div>
              <div class="col-md-8">
                <h4>{{ item.product.title }}</h4>
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
                <button
                  type="button"
                  @click.prevent="removeItem(item.id)"
                >
                  <p>刪除</p>
                </button>
              </div>
            </li>
          </ul>
          <div class="cleanBtnn">
            <button
              type="button"
              @click.prevent="cleanAll"
            >
              <p>全部清空</p>
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <h5>購物車資訊</h5>
          <div class="inputCode">
            <input
              type="text"
              placeholder="輸入優惠碼"
              v-model="Code"
            />
            <button
              type="button"
              @click.prevent="enterCode"
            >
              <p>套用</p>
            </button>
          </div>
          <p>金額小計 {{ total }}</p>
          <p>折價 {{ total - final_total }}</p>
          <p>運費 0</p>
          <p>總計 {{ final_total }}</p>
          <a href="#" @click.prevent="nextStep()">
            <p>結帳</p>
          </a>
        </div>
      </div>
    </div>
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
<style lang="sass">
  section.mainCartList
    padding: 60px 0
  .list-group-item
    display: flex
  .imgBox
    width: 100%
    img
      width: 100%
</style>
