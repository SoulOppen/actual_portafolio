<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div
    class="aspect-[9/15] grid grid-rows-[auto_1fr_auto] bg-darkBg text-darkText dark:text-lightText dark:bg-lightBg shadow-md rounded-lg overflow-hidden"
  >
    <img :src="project.imagen" :alt="project.nombre" class="w-full h-32 object-cover" />
    <div class="p-4 flex flex-col justify-between">
      <h2 class="font-semibold mb-2 line-clamp-2">{{ project.nombre }}</h2>
      <p class="line-clamp-4">{{ project.descripcion }}</p>
      <div class="mt-4">
        <span class="text-sm">Tecnologías: {{ project.tecnologias.join(',') }}</span>
      </div>
    </div>
    <div class="flex justify-evenly border-t-2 border-slate-400 p-2">
      <a href="">Ver página</a>
      <RouterLink :to="`/projects/${project.id}`">Ver más</RouterLink>
    </div>
  </div>
</template>
