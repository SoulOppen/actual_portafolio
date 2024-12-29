<script setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useThemeStore } from '@/stores/theme.store'
const themeStore = useThemeStore()
const icono = computed(() => (themeStore.dark === '' ? faSun : faMoon))
const handleClick = () => {
  themeStore.setColor()
}
</script>
<template>
  <button @click="handleClick" class="rounded-full aspect-square w-6 bg-accentElectricBlue">
    <FontAwesomeIcon :icon="icono" />
  </button>
</template>
