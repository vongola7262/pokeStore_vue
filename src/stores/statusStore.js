import { defineStore } from 'pinia'

export default defineStore('statusStore', {
  state: () => ({
    // 載入動畫
    isLoading: false,
    // 禁止連續點擊
    btnStatus: false,
    // 提示框狀態
    hintStatus: {
      active: false,
      status: false,
      text: ''
    }
  })
})
