<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <section class="mainCartList">
    <div class="container-lg">
      <div v-if="cartList.length == 0" class="emptyText">
        <h3>目前購物車是空的!</h3>
        <a href="#"
          class="viewMore"
          @click.prevent="viewMore"
        >
          <h4>前往商店 GO</h4>
        </a>
      </div>
      <div v-else class="row">
        <div class="col-md-8">
          <div class="cartList">
            <ul class="cart-list-group">
              <li class="list-group-item"
                v-for="item in cartList"
                :key="item.id"
              >
                <div class="cartImageBox">
                  <div class="imgBox">
                    <img :src="item.product.imageUrl" :alt="item.product.title">
                  </div>
                </div>
                <div class="cartDetailList">
                  <h6>{{ item.product.title }}</h6>
                  <div v-if="item.coupon" class="finalPrice">
                    <h5>
                      優惠價 : {{ item.final_total }}
                    </h5>
                    <p class="orginPrice">
                      促銷折扣 : {{ item.total }} {{ item.final_total - item.total }}
                    </p>
                  </div>
                  <div v-else class="finalPrice">
                    <h5>
                      特價 : {{ item.final_total }}
                    </h5>
                  </div>
                  <a href=""
                    class="removeBtn"
                    @click.prevent="removeItem(item.id)"
                  >
                  </a>
                  <div class="unitBox">
                    <button
                      type="button"
                      class="btn remove"
                      v-bind="{disabled: item.qty <= 1 || btnStatus}"
                      @click.prevent="updateCart(item, false)"
                    >
                      <p>-</p>
                    </button>
                    <div class="unitText">
                      <p>
                        {{ item.qty }}
                      </p>
                    </div>
                    <button
                      type="button"
                      class="btn add"
                      v-bind="{disabled: btnStatus }"
                      @click.prevent="updateCart(item, true)"
                    >
                      <p>+</p>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div class="cleanBtn">
              <button
                type="button"
                class="btn"
                @click.prevent="cleanAll"
              >
                <p>全部清空</p>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="paymentDeatil">
            <div class="titleBox">
              <h3>購物車資訊</h3>
              <div class="inputCode input-group">
                <input
                  type="text"
                  placeholder="輸入優惠碼"
                  v-model="Code"
                />
                <button
                  type="button"
                  class="btn btn-primary"
                  @click.prevent="enterCode"
                >
                  <p>套用</p>
                </button>
              </div>
            </div>
            <table class="table">
              <tbody>
                <tr>
                  <th>
                    <p>小計</p>
                  </th>
                  <td class="text-end">
                    <p>{{ total }}</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p>折價</p>
                  </th>
                  <td class="text-end">
                    <p> {{ final_total - total }}</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <p>運費</p>
                  </th>
                  <td class="text-end">
                    <p>0</p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-end">
                    <h4>總計: NT${{ final_total }}</h4>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="nextStepBox">
              <button
                type="button"
                class="btn"
                @click.prevent="nextStep()"
              >
                <p>下一步</p>
              </button>
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
  components: {
    LoadingImg
  },
  data () {
    return {
      cartList: [],
      total: null,
      final_total: null,
      Code: null,
      isLoading: false,
      btnStatus: false
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
    updateCart (item, type) {
      this.btnStatus = true
      let { id, qty, product_id: proId } = item
      if (type === true) {
        qty += 1
      } else {
        qty -= 1
      }
      const cartItem = {
        product_id: proId,
        qty: qty
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.axios.put(api, { data: cartItem }).then((res) => {
        console.log(res)
        this.btnStatus = false
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
    },
    // 前往商品
    viewMore () {
      this.$router.push('/typeList/all')
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
    background-color: #f0dec9
    min-height: 65vh
    position: relative
    @media screen and (max-width:575px)
      padding: 40px 0
  .cartList
    @media screen and (max-width:767px)
      width: 90%
      margin: 0 auto
    @media screen and (max-width:575px)
      width: 100%
  .emptyText
    text-align: center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    width: 90%
    h3
      font-size: 36px
      color: #734230
      margin-bottom: 20px
    a
      text-decoration: none
      h4
        letter-spacing: 2px
        color: #734230
        &:hover
          color: #D98841
  .cart-list-group
    background-color: #fff
    border-radius: 8px
    box-shadow: 8px 8px 14px #734230
    padding: 0
    margin: 0
  .list-group-item
    display: flex
    padding: 25px 40px
    border-bottom: 1px solid #f0dec9
    @media screen and (max-width:991px)
      padding: 15px 20px
    .cartImageBox
      flex: 1
      display: flex
      align-items: center
      margin-right: 40px
      @media screen and (max-width:991px)
        margin-right: 20px
      @media screen and (max-width:767px)
        flex: 2
        margin-right: 40px
      @media screen and (max-width:575px)
        margin-right: 20px
      .imgBox
        width: 100%
        height: 0
        padding-bottom: 61.8%
        position: relative
        overflow: hidden
        img
          width: 100%
          position: absolute
          top: 50%
          transform: translateY(-50%)
    .cartDetailList
      flex: 2
      display: flex
      flex-direction: column
      justify-content: center
      position: relative
      @media screen and (max-width:767px)
        flex: 3
      h6
        margin-bottom: 5px
        font-size: 16px
      .unitBox
        display: flex
        align-items: center
        button
          background-color: #D9BD9C
          padding: 4px 6px
          &.add
            border-radius: 0 5px 5px 0
          &.remove
            border-radius: 5px 0 0 5px
          &:active
            border-color: #D9BD9C
          &:disabled
            background-color: #d5c6b4
            border-color: #d5c6b4
          &:hover
            background-color: #d5aa78
            border-color: #d5aa78
        .unitText
          border: 1px solid #D9BD9C
          height: 100%
          display: flex
          align-items: center
          padding: 0 10px
        p
          font-size: 16px
          margin-left: 5px
          margin: 0
      .finalPrice
        margin-bottom: 5px
        h5
          font-size: 24px
          color: #bb6e2b
          @media screen and (max-width:575px)
            font-size: 20px
        span
          @media screen and (max-width:767px)
            display: none
        p
          color: #F24141
          @media screen and (max-width:575px)
            display: none
      .removeBtn
        position: absolute
        right: 0
        top: 50%
        transform: translateY(-50%)
        display: block
        width: 30px
        height: 50px
        background-image: url('/public/assets/images/icon/remove.png')
        background-repeat: no-repeat
        background-size: contain
        background-position: center
        @media screen and (max-width:767px)
          top: auto
          bottom: 0
          transform: translateY(0)
          background-position: bottom

  .cleanBtn
    padding-top:  40px
    display: flex
    justify-content: flex-end
    button
      background-color: #F24141
      p
        color: #fff
      &:hover
        background-color: #BF0426
  .paymentDeatil
    width: 90%
    margin: 0 auto
    @media screen and (max-width:575px)
      width: 100%
    .titleBox
      margin-bottom: 20px
      border-bottom: 2px solid #734230
      padding-bottom: 20px
      h3
        color: #734230
        margin-bottom: 20px
      .inputCode
        @media screen and (max-width:991px)
          flex-direction: column
        @media screen and (max-width:767px)
          flex-direction: row
        input
          flex: 3
          border-style: none
          padding: 10px
          &:focus-visible
            outline: none
        button
          flex: 1
          width: 79px
          background-color: #D9BD9C
          border-color: #D9BD9C
          @media screen and (max-width:991px)
            width: 100%
            border-radius: 0
            margin-left: 0
          @media screen and (max-width:767px)
            width: auto
            margin-left: -1
            border-radius: 0 8px 8px 0
          &:hover
            background-color: #d5aa78
            border-color: #d5aa78
    .table
      tbody
        border-bottom: 1px solid #734230
      tfoot
        td
          border-bottom: none
          h4
            color: #734230
  .nextStepBox
    display: flex
    justify-content: flex-end
    padding: 0.5rem
    button
      background-color: #81A69B
      p
        color: #fff
      &:hover
        background-color: #3DC5BA
</style>
