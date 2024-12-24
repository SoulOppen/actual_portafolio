<script setup>
import { reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
let links = reactive([
  { name: 'home', to: '/' },
  { name: 'experience', to: '/experience' },
  { name: 'projects', to: '/projects' },
  { name: 'about', to: '/about' },
])

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
  </nav>
</template>
