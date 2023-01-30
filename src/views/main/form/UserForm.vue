<template>
  <section class="mainForm">
    <Form @submit="onS">
      <div class="titleBox">
        <h2>請留下聯絡資訊</h2>
        <h4>我們將盡快回覆</h4>
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
            <h5>方便連絡的時段</h5>
            <ErrorMessage name="meetTime" />
          </div>
          <div class="timeList">
            <div class="radiolist">
              <Field
                type="radio"
                name="meetTime"
                id="morning"
                value="morning"
                v-model="meetTime"
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
                value="night"
                v-model="meetTime"
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
                value="else"
                v-model="meetTime"
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
      meetTime: '時段',
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
      meetTime: null
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
section.mainForm
  background-color: #f0dec9
  padding: 80px 0
  form
    width: 80%
    max-width: 800px
    margin: 0 auto
    padding: 28px 20px
    border-radius: 8px
    background-color: #fff
    box-shadow:  8px 8px 14px #734230
    position: relative
    &::before,&::after
      content: ''
      display: block
      background-repeat: no-repeat
      background-size: cover
      background-position: center
      background-image: url('/src/assets/images/Poké_Balls_3.png')
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
      .radiolist
        input
          margin-right: 10px
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
        background-image: url('/src/assets/images/Poké_Balls_3.png')
        position: absolute
        top: 50%
        left: -60px
        transform: translateY(-40%)
    .formMain
      width: 90%
      margin: 0 auto
    .group,.timeList
      display: flex
      .inputGroup,.radiolist
        flex: 1
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
