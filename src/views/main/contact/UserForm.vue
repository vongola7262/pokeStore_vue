<template>
  <section class="contactForm">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-5 contactlayout">
          <div class="contactBox">
            <h2>聯絡我們</h2>
            <ul class="contactList">
              <li>
                <h5>電話:</h5>
                <a href="tel:0265656556">
                  <h6>+ 0265656556</h6>
                </a>
              </li>
              <li>
                <h5>Email:</h5>
                <a href="mailto:pokestore@gmail.com">
                  <h6>pokestore@gmail.com</h6>
                </a>
              </li>
              <li>
                <h5>服務時間:</h5>
                <h6>8:00 ~ 17:00</h6>
              </li>
              <li>
                <h5>官方帳號:</h5>
                <ul class="linkGruop">
                  <li v-for="item in iconList" :key="item.title">
                    <a :href="item.link" class="imgBox" target="_bank">
                      <img :src="item.img" :alt="item.title">
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5 col-md-7">
          <Form @submit="onS">
            <div class="formMain">
              <div class="inputGroup nameGroup">
                <div class="textBox">
                  <label for="userName">
                    <h5>姓名</h5>
                  </label>
                  <ErrorMessage name="userName" />
                </div>
                <Field
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="請輸入姓名"
                  autocomplete="off"
                  :rules="{ required: true }"
                  v-model="userName"
                />
              </div>
              <div class="group">
                <div class="inputGroup">
                  <div class="textBox">
                    <label for="userPhone">
                      <h5>電話</h5>
                    </label>
                    <ErrorMessage name="userPhone" />
                  </div>
                  <Field
                    type="tel"
                    name="userPhone"
                    id="userPhone"
                    placeholder="請輸入電話"
                    autocomplete="off"
                    :rules="{ required: true, numeric: true, length: 10 }"
                    v-model="userPhone"
                  />
                </div>
                <div class="inputGroup">
                  <div class="textBox">
                    <label for="userEmail">
                      <h5>Email</h5>
                    </label>
                    <ErrorMessage name="userEmail" />
                  </div>
                  <Field
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    placeholder="請輸入Email"
                    autocomplete="off"
                    :rules="{ email: true, required: true }"
                    v-model="userEmail"
                  />
                </div>
              </div>
              <div class="inputGroup">
                <div class="textBox">
                  <label for="userText">
                    <h5>留言給我們</h5>
                  </label>
                  <ErrorMessage name="userText" />
                </div>
                <Field
                  as="textarea"
                  rows="4"
                  type="text"
                  name="userText"
                  id="userText"
                  v-model="userText"
                  autocomplete="off"
                  :rules="{ required: true }"
                />
              </div>
            </div>
            <div class="buttonBox">
              <button type="submit" class="nextBtn">
                <h5>送出</h5>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, length, numeric } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

defineRule('required', required)
defineRule('email', email)
defineRule('length', length)
defineRule('numeric', numeric)

configure({
  // Generates an English message locale generator
  generateMessage: localize('zh-TW', {
    messages: {
      required: '請填寫{field}',
      email: '請填寫正確格式',
      length: '請填寫正確格式 ( 10碼 )',
      numeric: '只能填數字'
    },
    names: {
      userName: '姓名',
      userPhone: '電話',
      userEmail: 'Email',
      userText: '想說的話'
    }
  })
})

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data () {
    return {
      userName: null,
      userPhone: null,
      userEmail: null,
      userText: null,
      meetTime: null,
      iconList: [
        {
          title: 'facebook',
          img: './assets/images/icon/facebook.png',
          link: 'https://www.facebook.com/Pokemon.Official.Taiwan/'
        },
        {
          title: 'youtube',
          img: './assets/images/icon/youtube.png',
          link: 'https://www.youtube.com/channel/UCUsB9KTwSGgPlIARzdaKb_Q'
        }
      ]
    }
  },
  methods: {
    onS (values) {
      this.$router.push({ name: 'success' })
    }
  }
}
</script>

<style lang="sass">
section.contactForm
  background-color: #f0dec9
  padding: 80px 0
  .contactlayout
    display: flex
    justify-content: center
    align-items: center
    @media screen and (max-width:767px)
      justify-content: flex-start
    @media screen and (max-width:575px)
      width: 90%
      margin: 0 auto
  h2
    color: #734230
    font-size: 42px
    margin-bottom: 30px
  .contactList
    list-style: none
    padding: 0
    margin: 0
    @media screen and (max-width:767px)
      display: flex
      flex-wrap: wrap
    @media screen and (max-width:575px)
      flex-direction: column
      flex-wrap: nowrap
    li
      margin-bottom: 30px
      @media screen and (max-width:767px)
        width: 50%
      @media screen and (max-width:575px)
        width: 100%
      a
        text-decoration: none
      h5
        font-weight: 700
        margin-bottom: 10px
      h5,h6
        color: #734230
  .linkGruop
    list-style-type: none
    padding: 0
    margin: 0
    display: flex
    li
      margin-right: 20px
      width: auto
      a
        display: block
        cursor: pointer
        width: 40px
        img
          width: 100%
  form
    max-width: 800px
    padding: 28px 20px
    border-radius: 8px
    background-color: #fff
    box-shadow:  8px 8px 14px #734230
    position: relative
    overflow: hidden
    &::before,&::after
      content: ''
      display: block
      background-repeat: no-repeat
      background-size: cover
      background-position: center
      background-image: url('/public/assets/images/pokemon/Poké_Balls_3.png')
      position: absolute
    &::before
      width: 60px
      height: 60px
      bottom: 15%
      left: -300px
      transform: rotate(-30deg)
    &::after
      width: 100px
      height: 100px
      top: 40%
      right: -200px
      transform: rotate(60deg)
    .nameGroup
      max-width: 50%
      @media screen and (max-width:575px)
        max-width: 100%
    .inputGroup
      display: flex
      flex-direction: column
      padding: 0px 8px 8px 8px
      margin-bottom: 20px
      h5
        color: #734230
        letter-spacing: 1px
        font-size: 18px
        margin-bottom: 15px
      input,textarea
        font-size: 18px
        font-family: 'Noto Sans TC',sans-serif
        letter-spacing: 1.2px
        padding: 10px 15px
        border-radius: 8px
        background-color: #F2F2F2
        border-style: none
        outline: none
      input.radioBox
        accent-color: #734230
      textarea
        resize: none
        letter-spacing: 1px
      input::placeholder
        color: #3C4959
        opacity: 0.7
      h6
        font-size: 18px
        color: #3C4959
        opacity: 0.9
        margin-bottom: 15px
      .radiolist
        input
          margin-right: 10px
        &:last-child
          label
            h6
              margin-bottom: 0
      .textBox
        display: flex
        align-items: flex-end
        span
          font-family: 'Noto Sans TC',sans-serif
          font-size: 14px
          letter-spacing: 1.5px
          margin-left: 8px
          margin-bottom: 15px
          color: #C43C2C
    .titleBox
      margin: 0 8px 50px 8px
      padding: 22px 0
      border-bottom: 2px solid #734230
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      h2,h4
        color: #734230
        position: relative
      h4
        font-size: 18px
        margin-top: 15px
        @media screen and (max-width:575px)
          margin-top: 5px
      h2:before
        content: ''
        display: block
        width: 30px
        height: 30px
        background-repeat: no-repeat
        background-size: cover
        background-position: center
        background-image: url('/public/assets/images/pokemon/Poké_Balls_3.png')
        position: absolute
        top: 50%
        left: -60px
        transform: translateY(-40%)
        @media screen and (max-width:575px)
          left: -45px
    .formMain
      width: 90%
      margin: 0 auto
      @media screen and (max-width:575px)
        width: 100%
    .group,.timeList
      display: flex
      flex-direction: column
      .inputGroup,.radiolist
        flex: 1
    .buttonBox
      display: flex
      justify-content: center
      margin: 30px 8px 0 8px
      border-top: 2px solid #734230
      padding: 30px 0 12px 0
      .nextBtn
        border-radius: 8px
        height: 60px
        border-style: none
</style>
