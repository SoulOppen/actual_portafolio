<script setup>
import { reactive, defineEmits } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
let links = reactive([
  { name: 'home', to: '/' },
  { name: 'about', to: '/about' },
])
const emits = defineEmits(['openContact'])
const handleClick = () => {
  emits('openContact')
}

let active = (path) => path === route.path
</script>
<template>
  <nav class="flex flex-1 justify-evenly mx-auto max-lg:w-3/4">
    <RouterLink
      v-for="link of links"
      :key="link.name"
      :to="link.to"
      :class="active(link.to) ? 'text-coral font-bold' : ''"
      >{{ link.name.toLocaleUpperCase() }}
    </RouterLink>
    <button @click="handleClick">Contacto</button>
  </nav>
</template>
