<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['openContact'])
const handleClick = () => {
  emits('openContact')
}
</script>
<template>
  <button @click="handleClick">Contacto</button>
</template>
