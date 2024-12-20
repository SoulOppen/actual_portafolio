<script setup>
import { useThemeStore } from '@/stores/theme.store'
const themeStore = useThemeStore()
const handleClick = () => {
  themeStore.setColor()
}
</script>
<template>
  <button @click="handleClick">change color</button>
</template>
