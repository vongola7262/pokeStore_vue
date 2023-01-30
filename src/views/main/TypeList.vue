<template>
  <LoadingPage :active="isLoading" :opacity="0.9" :background-color="`#fff`">
    <img
      src="../../assets/images/pika.gif"
      alt=""
      style="width: 250px; height: 250px"
    />
  </LoadingPage>
  <section class="banner">
    <img src="../../assets/images/banner/banner2.jpg" alt="" />
    <h2>商品列表</h2>
  </section>
  <section class="mainList">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <ul class="typeList">
            <li
              v-for="(item, index) in typeList"
              :key="index"
              :class="{ active: item.id == searchList.type }"
              @click.prevent="chooseItem(item.id)"
            >
              <h5>{{ item.text }}</h5>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="row keywordBox">
              <div class="input-group">
                <input type="text"
                  class="form-control"
                  placeholder="關鍵字搜尋"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  v-model="keyword"
                >
                <button class="btn btn-primary"
                  type="button"
                  @click.prevent="search"
                >
                  搜尋
                </button>
                <button class="btn btn-secondary"
                  type="button"
                  @click.prevent="empty"
                >
                  清除
                </button>
              </div>
            </div>
          <div class="row listBox">
            <div class="col-md-4" v-for="item in pageDetail" :key="item.id">
              <div class="card" @click.prevent="getProductDetail(item.id)">
                <div class="imgBox">
                  <img :src="item.imageUrl" class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <div class="priceBox">
                    <p>特價NT$ {{ item.price }}</p>
                  </div>
                  <button type="button" class="btn btn-primary">
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <div v-if="typeProducts.length == 0" class="col-md-4">
              <div class="emptyCard">
                <h5 class="card-title">沒有商品</h5>
                <p class="card-text">
                  暫時沒有搜尋的商品<br>請重新搜尋
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <UserPageList :num="pageTotal" :now-Page="page" @newpage="resetPage"></UserPageList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserPageList from '@/components/UserPageList.vue'

export default {
  props: ['id'],
  components: {
    UserPageList
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
          id: 'Tshirt',
          text: '運動用品'
        },
        {
          id: 'sunscreen',
          text: '防曬系列'
        },
        {
          id: '3C',
          text: '3C行動裝置'
        },
        {
          id: 'phoneCase',
          text: '寶可夢手機殼'
        }
      ],
      // 關鍵字
      keyword: null,
      // 搜尋內容
      searchList: {
        word: null,
        type: null
      },
      // 全部data
      products: [],
      // 搜尋結果data
      typeProducts: [],
      // 當前頁碼
      page: null,
      // 總共幾頁
      pageTotal: 0,
      // 每頁12筆
      perpage: 12,
      // 待機狀態
      isLoading: false
    }
  },
  methods: {
    getProducts (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        this.products = res.data.products
        this.calc(res.data.products.length)
        this.page = 1
        this.searchList.type = id
        this.isLoading = false
      })
    },
    calc (n) {
      const r = this.perpage
      this.pageTotal = Math.ceil(n / r)
    },
    resetPage (i) {
      this.page = i
    },
    getProductDetail (id) {
      this.$router.push(`/product/${id}`)
    },
    chooseItem (type) {
      this.searchList.type = type
    },
    search () {
      this.searchList.word = this.keyword
    },
    empty () {
      this.searchList.word = null
      this.keyword = null
    }
  },
  watch: {
    searchList: {
      handler (n) {
        const type = n.type
        const typeList = []
        const keyword = n.word
        let keywordList = null
        this.products.forEach(item => {
          if (type === 'all') {
            typeList.push(item)
          } else {
            if (item.category === type) {
              typeList.push(item)
            }
          }
        })
        if (keyword !== null) {
          keywordList = typeList.filter(item => item.title.match(keyword))
        } else {
          keywordList = typeList
        }
        this.calc(keywordList.length)
        this.typeProducts = keywordList
        this.page = 1
      },
      deep: true
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
      this.typeProducts.forEach((item, index) => {
        const num = index + 1
        if (num >= minData && num <= maxData) {
          pageData.push(item)
        }
      })
      return pageData
    }
  },
  created () {
    const { id } = this.$route.params
    this.getProducts(id)
  }
}
</script>

<style lang="sass">
section.banner
    width: 100%
    height: 250px
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
    .typeList
      list-style-type: none
      padding: 0
      li
        padding: 10px 5px
        cursor: pointer
        &.active,&:hover
          background-color: #D9BD9C
          h5
            color: #fff
        h5
          margin: 0
    .keywordBox
      justify-content: flex-end
      margin-bottom: 16px
      .input-group
        width: auto
    .listBox
      .col-md-4
        margin-bottom: 24px
    .card
      overflow: hidden
      height: 100%
      width: 100%
      cursor: pointer
      .imgBox
        width: 100%
        height: 0
        padding-bottom: 66.66%
        position: relative
        overflow: hidden
        img
          width: 100%
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          transition: all 0.5s
      &:hover
        .imgBox
          img
            width: 120%
      .card-body
        .priceBox
          display: flex
</style>
