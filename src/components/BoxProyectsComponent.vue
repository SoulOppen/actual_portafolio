<script setup>
import ItemProyect from '@/components/ItemProyectComponent.vue'
import { useProjectStore } from '@/stores/project.store'
const projectStore = useProjectStore()
</script>
<template>
  <section class="overflow-y-auto h-[75dvh] lg:hidden">
    <div v-for="project in projectStore.project" :key="project.id" class="py-4 w-3/4 mx-auto">
      <ItemProyect :project="project" />
    </div>
  </section>
</template>
