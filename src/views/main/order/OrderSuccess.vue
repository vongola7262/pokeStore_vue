<template>
  <section class="formSuccess">
    <div class="mainBox">
      <div
        class="mainText
        animate__animated
        animate__fadeIn
        animate__slower"
      >
        <h2>購買成功</h2>
      </div>
      <div class="succDetail">
        <p>有任何疑問歡迎</p>
        <router-link :to="{ name: 'form' }">
          <p>聯絡我們</p>
        </router-link>
      </div>
      <router-link :to="{ name: 'index' }" class="nextBtn">
        <h5>回到首頁</h5>
      </router-link>
    </div>
  </section>
</template>

<style lang="sass">
section.formSuccess
    background-color: #f0dec9
    padding: 80px 0
    min-height: 75vh
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    .mainBox
        text-align: center
        h2,p
          font-family: 'Noto Sans TC',sans-serif
        h2
          font-size: 80px
          color: #734230
          letter-spacing: 10px
          position: relative
          @media screen and (max-width:575px)
            font-size: 36px
          &::before,&::after
            content: ''
            display: block
            width: 40px
            height: 40px
            background-repeat: no-repeat
            background-size: cover
            background-position: center
            background-image: url('/public/assets/images/pokemon/Poké_Balls_4.png')
            position: absolute
            top: 50%
            transform: translateY(-20%)
            @media screen and (max-width:575px)
              width: 30px
              height: 30px
          &::before
            left: -80px
            @media screen and (max-width:575px)
              left: -40px
          &::after
            right: -80px
            @media screen and (max-width:575px)
              right: -40px
        p
          margin-top: 20px
          margin-bottom: 60px
          font-size: 24px
          @media screen and (max-width:575px)
            font-size: 18px
            margin-bottom: 40px
            margin-top: 0
        h5
          font-size: 24px
        .nextBtn
          background-color: #fff
          &:hover
            background-color: #734230
            h5
                color: #f0dec9
        .succDetail
          display: flex
          justify-content: center
          a
            color: #734230
            text-decoration: none
</style>
