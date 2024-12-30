<script setup>
import { reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
let links = reactive([
  { name: 'experiencia', to: '/experience' },
  { name: 'proyectos', to: '/projects' },
  { name: 'información pagina', to: '/about' },
])

let active = (path) => path === route.path
</script>
<template>
  <nav
    class="flex flex-col md:flex-row flex-1 flex-wrap justify-center items-center gap-8 mx-auto max-lg:w-3/4"
  >
    <RouterLink
      v-for="link of links"
      :key="link.name"
      :to="link.to"
      :class="active(link.to) ? 'text-coral font-bold' : ''"
      >{{ link.name.toLocaleUpperCase() }}
    </RouterLink>
  </nav>
</template>
