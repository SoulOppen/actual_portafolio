<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div
    class="bg-darkBg text-darkText dark:text-lightText dark:bg-lightBg shadow-md rounded-lg overflow-hidden"
  >
    <img :src="project.imagen" :alt="project.nombre" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ project.nombre }}</h2>
      <p>{{ project.descripcion }}</p>
      <div class="mt-4">
        <span class="text-sm">Tecnologías: {{ project.tecnologias.join(',') }}</span>
      </div>
    </div>
  </div>
</template>
