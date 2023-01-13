<template>
  <main>
    <section class="homePage" id="homePage">
      <div class="centerBox">
        <div class="titleBox">
          <div class="mainBox">
            <h6>歡迎光臨!</h6>
            <h1>這裡是寶可夢中心</h1>
            <p>
              停下腳步休息喝口水，讓寶可夢吃點零食，<br />補充冒險所需的物資，精靈球、藥水一切應有盡有，<br />與朋友、家人們一同踏上充滿刺激與歡樂的旅程。
            </p>
          </div>
        </div>
      </div>
      <div class="morePageBtn"></div>
    </section>
    <section class="productList">
      <div class="container">
        <div
          class="row"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          data-aos-offset="400"
        >
          <div
            class="col-lg-4 col-md-6 productType"
            v-for="(item, index) in productType"
            :key="index"
          >
            <div class="iconBox">
              <div class="iconBox2">
                <div class="iconBox3">
                  <img :src="item.icon" :alt="item.title" />
                </div>
              </div>
            </div>
            <div class="mainBox">
              <h6>{{ item.subStandard }}</h6>
              <h4>{{ item.title }}</h4>
              <p>{{ item.detail }}</p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="moreProduct">
              <router-link :to="{ name: 'cart' }" class="moreBtn">
                <h4>查看更多</h4>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="productSwiper">
      <ProductSwiper></ProductSwiper>
    </section>
    <section class="learnMore">
      <div class="centerBox">
        <div
          class="moreText"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-offset="400"
        >
          <h2>不只是寶可夢 ?</h2>
          <p>
            隨著Pokemon Go的推出，全球再次迎來全新的寶可夢浪潮。
            <br />由於遊戲設定促使了玩家走出家門，到當地各個社區地標、公園、歷史建築踩點。
            <br />許多冷門地點都開始熱鬧了起來，也讓過往不怎麼關心社區身邊事物的民眾，重新認識自己居住的區域。
            <br />
            <br />我們希望由這份契機，讓民眾更加親近自己的生活環境，踏出戶外，漸漸而走入大自然的懷抱，
            <br />增加家人朋友間的互動與歡懷，因此不定時會推出家庭購物優惠，與多人同樂優惠，
            <br />遊玩的同時也不忘親近大自然。
          </p>
        </div>
        <div
          class="promoCode"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="400"
        >
          <div class="timeText">
            <h2>2023新年折扣碼</h2>
            <p>即日起到 1/31 輸入優惠碼享 8 折優惠！</p>
          </div>
          <div class="codeText">
            <h3>Pokemon23</h3>
          </div>
          <router-link :to="{ name: 'cart' }" class="useCode">
            <h4>使用優惠碼</h4>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ProductSwiper from '@/components/ProductSwiper.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  components: {
    ProductSwiper
  },
  data () {
    return {
      productType: [
        {
          title: '潮流訓練家專區',
          detail: '大人小孩各年齡層一應具全，一年四季都有寶可夢陪伴。',
          subStandard: '最新登場',
          icon: './images/flame.png'
        },
        {
          title: '最新話題焦點',
          detail: '各大品牌聯名商品，時下討論度最高的熱門服飾。',
          subStandard: '熱銷聯名',
          icon: './images/lightning.png'
        },
        {
          title: '各大運動用品',
          detail: '室內室外運動都適合，外出散步也能成為焦點。',
          subStandard: '外出必備',
          icon: './images/cap.png'
        },
        {
          title: '高係數防曬乳',
          detail: '抵抗太陽光，外出同時也保護自身身體，出門不可少。',
          subStandard: '抵抗紫外線',
          icon: './images/sunscreen.png'
        },
        {
          title: '3C行動裝置',
          detail:
            '輔助遊玩的好幫手，讓手機喘口氣休息的同時，繼續探索寶可夢世界。',
          subStandard: '隨處探索',
          icon: './images/smart-watch.png'
        },
        {
          title: '寶可夢手機殼',
          detail: '強力防摔手機殼，保護手機，放心遊玩。',
          subStandard: '訓練家專屬',
          icon: './images/phone-case.png'
        }
      ]
    }
  },
  created () {
    AOS.init({})
  }
}
</script>

<style lang="sass">
$green: #5A8C8C
$lightGreen: #81A69B
$darkGreen: #3A7D8C

$brown: #D9BD9C
$darkBrown: #f0dec9
$darkBrown2: #D98841

$black: #313b46
$lightBlack: #747A8C

.waitLoading
  background-color: #313b46
  width: 100%
  height: 100vh
  position: fixed
  top: 0
  left: 0
  z-index: 10000
  display: flex
  justify-content: center
  align-items: center
  img
    height: 100px
section.homePage
  width: 100%
  min-height: 100vh
  background-image: url('/src/assets/images/banner.jpg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  position: relative
  display: flex
  justify-content: center
  align-items: center
  &::before
    content: ''
    display: block
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background-color: black
    opacity: 0.1
  .centerBox
    position: absolute
    top: 15%
    z-index: 2
    display: flex
  .titleBox
    background: rgba(120,116,109,0.9)
    padding: 10px
    opacity: 0
    -webkit-transform: rotateY(-90deg)
              transform: rotateY(-90deg)
    animation: flip-vertical-right 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both
    .mainBox
      padding: 30px 50px
      border: 1px solid #ffffff
    h1
      font-size: 50px
      color: #ffffff
      margin: 20px 0
    h6
      font-size: 24px
      color: #ffffff
    p
      font-size: 18px
      color: #ffffff
  .morePageBtn
    cursor: pointer
    width: 35px
    height: 35px
    background-image: url('/src/assets/images/Poké_Balls.png')
    background-size: contain
    position: absolute
    left: 50%
    transform: translateY(-50%)
    bottom: 8%
    animation: learn-more 3s infinite
  @keyframes flip-vertical-right
    0%
      opacity: 0
      -webkit-transform: rotateY(-90deg)
              transform: rotateY(-90deg)
    30%
      opacity: 0.3
    100%
      opacity: 1
      -webkit-transform: rotateY(0deg)
              transform: rotateY(0deg)
  @keyframes learn-more
    0%
      bottom: 8%
    50%
      bottom: 3%
    99%
      bottom: 8%
section.productSwiper
  padding: 150px 0
  background-color: $darkBrown
section.productList
  padding: 150px 0
  background-color: $brown
  .productType
    display: flex
    align-items: center
    margin: 40px 0
    .iconBox
      width: 110px
      height: 110px
      display: flex
      justify-content: center
      align-items: center
      .iconBox2,.iconBox3
        width: 70%
        height: 80%
        clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)
        background-color: $darkBrown2
        display: flex
        justify-content: center
        align-items: center
        .iconBox3
          width: 90%
          height: 90%
          background-color: #ffffff
          img
            width: 60%
    .mainBox
      flex: 3
      height: 100%
      h6
        color: #bb6e2b
        font-weight: 700
        letter-spacing: 5px
      h4
        color: #3C4959
        font-weight: 700
        letter-spacing: 0
      p
        color: #3C4959
        font-size: 14px
        letter-spacing: 1.5px
  .moreProduct
    display: flex
    justify-content: flex-end
    padding-top: 40px
section.learnMore
  padding: 100px 0 150px 0
  background-color: $brown
  h2
    font-size: 36px
    color: #734230
    margin-bottom: 30px
  p
    color: $black
  .moreText
    margin-bottom: 60px
  .promoCode
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .codeText
      display: flex
      justify-content: center
      align-items: center
      width: 80%
      max-width: 400px
      height: 180px
      border: 10px solid #F5D777
      background-color: #fff
      position: relative
      z-index: 2
      h3
        font-size: 36px
      &::before,&::after
        content: ''
        display: block
        background-repeat: no-repeat
        background-size: contain
        background-position: bottom
        position: absolute
      &::before
        width: 120px
        height: 140px
        background-image: url('/src/assets/images/pick3.png')
        position: absolute
        bottom: -40px
        left: -100px
      &::after
        width: 180px
        height: 150px
        background-image: url('/src/assets/images/eby1.png')
        position: absolute
        bottom: -20px
        right: -100px
    .timeText
      text-align: center
      padding-top: 20px
      h2
        font-size: 36px
        color: #734230
        margin-bottom: 10px
      p
        color: #313b46
        margin-bottom: 30px
        letter-spacing: 0
    .useCode
      text-decoration: none
      border-radius: 10px
      padding: 10px
      border: 2px solid #734230
      margin-top: 30px
      transition: all 0.3s
      &:hover
        background-color: #734230
        h4
          color: #f0dec9
      h4
        font-size: 24px
        letter-spacing: 2px
        margin: 0
        color: #734230
        transition: all 0.3s
</style>
