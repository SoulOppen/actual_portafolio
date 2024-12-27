<script setup>
import { ref, computed } from 'vue'
import ItemProyect from '@/components/ItemProyectComponent.vue'
import { useProjectStore } from '@/stores/project.store'
const projectStore = useProjectStore()
const currentPage = ref(1)
const totalPages = computed(() => projectStore.projectPages)
const changePage = (number) => {
  currentPage.value = number
}
</script>
<template>
  <section class="hidden md:block">
    <div class="grid grid-col-3 lg:grid-cols-4 gap-6 w-5/6 mx-auto g-2">
      <ItemProyect
        v-for="project in projectStore.pagesProject(currentPage)"
        :key="project.id"
        :project="project"
      />
    </div>
    <div class="grid grid-cols-3 justify-items-center p-2 w-1/3 mx-auto">
      <button @click="changePage(currentPage - 1)">
        <p
          v-if="currentPage > 1"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Anterior
        </p>
      </button>
      <span class="mx-4 self-center">{{ currentPage }} de {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)">
        <p
          v-if="currentPage < totalPages"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Siguiente
        </p>
      </button>
    </div>
  </section>
</template>
