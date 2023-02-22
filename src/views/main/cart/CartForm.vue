<template>
  <section class="mainForm">
    <Form @submit="onS">
      <div class="titleBox">
        <h2>收件資訊</h2>
        <h4>以便我們盡快安排出貨</h4>
      </div>
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
            v-model="user.name"
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
              v-model="user.tel"
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
              v-model="user.email"
            />
          </div>
        </div>
        <div class="inputGroup">
          <div class="textBox">
            <label for="userAddress">
              <h5>地址</h5>
            </label>
            <ErrorMessage name="userAddress" />
          </div>
          <Field
            type="text"
            name="userAddress"
            id="userAddress"
            placeholder="請輸入地址"
            autocomplete="off"
            :rules="{ required: true }"
            v-model="user.address"
          />
        </div>
        <div class="inputGroup">
          <div class="textBox">
            <h5>方便收件時段</h5>
            <ErrorMessage name="meetTime" />
          </div>
          <div class="timeList">
            <div class="radiolist">
              <Field
                type="radio"
                name="meetTime"
                id="morning"
                value="1"
                v-model="user.meetTime"
                class="radioBox"
                :rules="{ required: true }"
              />
              <label for="morning">
                <h6>8:00 ~ 12:00</h6>
              </label>
            </div>
            <div class="radiolist">
              <Field
                type="radio"
                name="meetTime"
                id="night"
                value="2"
                v-model="user.meetTime"
                class="radioBox"
                :rules="{ required: true }"
              />
              <label for="night">
                <h6>13:00 ~ 17:00</h6>
              </label>
            </div>
            <div class="radiolist">
              <Field
                type="radio"
                name="meetTime"
                id="else"
                value="3"
                v-model="user.meetTime"
                class="radioBox"
                :rules="{ required: true }"
              />
              <label for="else">
                <h6>18:00 ~ 21:00</h6>
              </label>
            </div>
          </div>
        </div>
        <div class="inputGroup">
          <div class="textBox">
            <label for="userText">
              <h5>注意事項</h5>
            </label>
            <ErrorMessage name="userText" />
          </div>
          <Field
            as="textarea"
            rows="4"
            type="text"
            name="userText"
            id="userText"
            v-model="messages"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="buttonBox">
        <button type="submit" class="nextBtn">
          <h5>確認資訊</h5>
        </button>
      </div>
    </Form>
  </section>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions } from 'pinia'
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
      meetTime: '時段',
      userAddress: '地址'
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
      user: {
        name: null,
        email: null,
        tel: null,
        address: null,
        meetTime: null
      },
      messages: null
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCartList']),
    onS () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const form = {
        user: this.user,
        message: this.messages
      }
      this.axios.post(api, { data: form }).then(res => {
        const id = res.data.orderId
        if (res.data.success === true) {
          this.$router.push(`/order/checkout/${id}`)
          this.getCartList()
        } else {
          this.$router.push(`/order/checkout/${id}`)
        }
      })
    }
  }
}
</script>

<style lang="sass">
section.mainForm
  background-color: #f0dec9
  padding: 80px 0
  overflow: hidden
  @media screen and (max-width:575px)
    padding: 40px 0
  form
    width: 80%
    max-width: 800px
    margin: 0 auto
    padding: 28px 20px
    border-radius: 8px
    background-color: #fff
    box-shadow:  8px 8px 14px #734230
    position: relative
    @media screen and (max-width:575px)
      width: 90%
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
      margin-bottom: 30px
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
        @media screen and (max-width:991px)
          margin-bottom: 15px
      .radiolist
        input
          margin-right: 10px
        @media screen and (max-width:991px)
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
    .formMain
      width: 90%
      margin: 0 auto
      @media screen and (max-width:575px)
        width: 100%
    .group,.timeList
      display: flex
      .inputGroup,.radiolist
        flex: 1
      @media screen and (max-width:991px)
        flex-direction: column
    .buttonBox
      display: flex
      justify-content: center
      margin: 50px 8px 0 8px
      border-top: 2px solid #734230
      padding: 50px 0 22px 0
      .nextBtn
        border-radius: 8px
        height: 60px
        border-style: none
</style>
