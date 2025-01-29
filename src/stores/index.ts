import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('index', () => {
  const showMenu = ref(false)

  const toggleShowMenu = () => {
    showMenu.value = !showMenu.value
  }

  return { showMenu, toggleShowMenu }
})
