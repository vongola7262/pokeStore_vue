<template>
  <section class="formSuccess">
    <div class="mainBox">
      <div class="mainText animate__animated animate__fadeIn animate__slower">
        <h2>購買成功</h2>
      </div>
      <p>有任何疑問歡迎與我們
        <router-link :to="{ name: 'form' }">
          <p>聯繫</p>
        </router-link>
      </p>
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
    .mainBox
        text-align: center
        h2,p
          font-family: 'Noto Sans TC',sans-serif
        h2
          font-size: 80px
          color: #734230
          letter-spacing: 10px
          position: relative
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
          &::before
            left: -80px
          &::after
            right: -80px
        p
          margin-top: 20px
          margin-bottom: 60px
          font-size: 24px
        h5
          font-size: 24px
        .nextBtn
          background-color: #fff
          &:hover
            background-color: #734230
            h5
                color: #f0dec9
</style>
