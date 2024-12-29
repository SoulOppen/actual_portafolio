import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', () => {
  const dark = ref('')
  function changeColor() {
    if (dark.value === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }
  function setDarkModeBasedOnSystemPreference() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    dark.value = prefersDark ? 'dark' : ''
    changeColor()
  }
  function setColor() {
    dark.value = dark.value == 'dark' ? '' : 'dark'
    changeColor()
  }
  return { dark, setColor, setDarkModeBasedOnSystemPreference }
})
