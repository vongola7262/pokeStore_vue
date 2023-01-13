<template>
  <LoadingPage
    :active="isLoading"
    :opacity="0.8"
    :background-color="`#fff`"
  >
    <img src="../assets/images/pika.gif" alt="" style="width: 250px;height: 250px">
  </LoadingPage>
  <section class="banner">
    <img src="../assets/images/banner2.jpg" alt="" />
    <h2>商品列表</h2>
  </section>
  <section class="mainList">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <ul v-for="( item, index ) in typeList" :key="index" class="typeList">
            <li>
                <h5>{{ item.text }}</h5>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class="col-md-4" v-for="item in products" :key="item.id">
                    <div class="card" @click.prevent="getProductDetail(item.id)">
                        <img :src="item.imageUrl" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                            <p>{{ item.price }}</p>
                            <p>{{ item.origin_price }}</p>
                            <button
                              type="button"
                              class="btn btn-primary"
                            >
                              Go somewhere
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <PageList :pages="pages" @nextpage="getProducts"></PageList>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageList from '@/components/PageList.vue'

export default {
  components: {
    PageList
  },
  data () {
    return {
      typeList: [
        {
          id: 'all',
          text: '全部商品'
        },
        {
          id: 'hot',
          text: '潮流專區'
        },
        {
          id: 'joint',
          text: '最新聯名'
        },
        {
          id: '3C',
          text: '3C行動裝置'
        },
        {
          id: 'Tshirt',
          text: '運動用品'
        },
        {
          id: 'phoneCase',
          text: '寶可夢手機殼'
        },
        {
          id: 'sunscreen',
          text: '防曬系列'
        }
      ],
      products: [],
      pages: {},
      isLoading: false
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        console.log(res.data)
        this.products = res.data.products
        this.pages = res.data.pagination
        this.isLoading = false
      })
    },
    getProductDetail (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="sass">
section.banner
    width: 100%
    height: 350px
    position: relative
    overflow: hidden
    display: flex
    justify-content: center
    align-items: center
    &::before
        content: ''
        display: block
        width: 100%
        height: 100%
        background-color: rgba(255,255,255, 0.5)
        position: absolute
        left: 0
        top: 0
        z-index: 2
    img
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
        width: 100%
    h2
        position: relative
        z-index: 3
        color: #734230
        font-size: 42px
        letter-spacing: 20px
        text-shadow:  #fff 1px 0 10px
section.mainList
    padding: 60px 0
    min-height: 100vh
    width: 100%
</style>
