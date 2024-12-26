<script setup>
import ItemProyect from '@/components/ItemProyectComponent.vue'
const L = [, , ,]
</script>
<template>
  <section class="hidden lg:block">
    <div class="grid grid-cols-4 gap-6 w-5/6 mx-auto g-2">
      <ItemProyect v-for="l in L" :key="l"></ItemProyect>
    </div>
    <div class="flex justify-center p-2">
      <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Anterior
      </button>
      <span class="mx-4 self-center">{{ currentPage }} de {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Siguiente
      </button>
    </div>
  </section>
</template>
