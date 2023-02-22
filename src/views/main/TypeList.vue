<template>
  <LoadingImg :loadStatus="isLoading"></LoadingImg>
  <BannerImg :banner="bannerDetail"></BannerImg>
  <HintCard :isHint="hintStatus"></HintCard>
  <section class="mainList">
    <div class="container-md">
      <div class="row keywordBox">
        <div class="input-group">
          <input type="text"
            class="form-control"
            placeholder="關鍵字搜尋"
            v-model="keyword"
          >
          <button
            class="btn btn-search"
            type="button"
            @click.prevent="search(true)"
          >
            搜尋
          </button>
          <button
            class="btn btn-clean"
            type="button"
            @click.prevent="search(false)"
          >
            清除
          </button>
        </div>
      </div>
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
          <div class="row listBox">
            <div class="col-sm-6 col-lg-4 listlayout" v-for="item in pageDetail" :key="item.id">
              <div class="card" @click.prevent="getProductDetail(item.id)">
                <div class="imgBox">
                  <img :src="item.imageUrl" class="card-img-top" alt="" />
                </div>
                <div class="card-body">
                  <div class="textBox">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p class="origin">原價NT$ {{ item.origin_price }}</p>
                    <p>特價NT$ {{ item.price }}</p>
                  </div>
                  <div class="btnBox">
                    <button
                      type="button"
                      class="btn btn-addCart"
                      @click.stop="addCart(item.id)"
                    >
                      <p>加入購物車</p>
                    </button>
                  </div>
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
          <div class="row" v-if="pageTotal > 1">
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
import LoadingImg from '@/components/LoadingImg.vue'
import BannerImg from '@/components/BannerImg.vue'
import HintCard from '@/components/HintCard.vue'

import productStore from '@/stores/productStore.js'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  props: ['id'],
  components: {
    UserPageList,
    LoadingImg,
    BannerImg,
    HintCard
  },
  data () {
    return {
      bannerDetail: {
        title: '商品列表',
        img: './assets/images/banner/banner2.jpg'
      },
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
        // 全部data
        products: [],
        // 關鍵字
        word: null,
        // 類型
        type: null
      },
      // 搜尋結果data
      typeProducts: [],
      // 當前頁碼
      page: null,
      // 總共幾頁
      pageTotal: 0,
      // 每頁12筆
      perpage: 12
    }
  },
  methods: {
    ...mapActions(productStore, ['getAllProducts']),
    ...mapActions(cartStore, ['addCart']),
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
    search (s) {
      if (s === true) {
        this.searchList.word = this.keyword
      } else {
        this.searchList.word = null
        this.keyword = null
      }
    }
  },
  watch: {
    productsList (n) {
      this.searchList.products = n
    },
    searchList: {
      handler (n) {
        const type = n.type
        const typeList = []
        const keyword = n.word
        const products = n.products
        let keywordList = null

        products.forEach(item => {
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
    ...mapState(statusStore, ['isLoading', 'hintStatus']),
    ...mapState(productStore, ['productsList']),
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
    this.searchList.type = this.$route.params.id
    this.getAllProducts()
  }
}
</script>

<style lang="sass">
section.mainList
    padding: 60px 0
    min-height: 100vh
    width: 100%
    @media screen and (max-width:575px)
      padding: 40px 0
    .container-md
      @media screen and (max-width:767px)
        max-width: 604px
        width: 90%
      @media screen and (max-width:575px)
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
        input
          border-color: #f0dec9
        input:focus
          box-shadow: none
          border-color: none
        button
          &:active
            border-color: #f0dec9
          &.btn-search
            background-color: #D9BD9C
          &.btn-clean
            background-color: #f0dec9
          p
            letter-spacing: 4px
        @media screen and (max-width:575px)
          width: 100%
    .listBox
      .listlayout
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
        display: flex
        flex-direction: column
        justify-content: space-between
        h5,p
          margin-bottom: 10px
        h5
          min-height: 50px
        p
          font-size: 18px
        .origin
          font-size: 14px
          opacity: 0.5
          margin-bottom: 0
        .btnBox
          width: 100%
          button
            width: 100%
            background-color: #D9BD9C
            p
              letter-spacing: 4px
              margin-bottom: 0
            &:active
              border-color: #f0dec9
            &:hover
              background-color: #f0dec9
</style>
