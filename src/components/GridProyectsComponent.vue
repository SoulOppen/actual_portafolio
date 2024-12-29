<script setup>
import { ref, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
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
  <section class="hidden lg:block">
    <div class="grid lg:grid-cols-4 gap-6 w-5/6 mx-auto g-2">
      <ItemProyect
        v-for="project in projectStore.pagesProject(currentPage)"
        :key="project.id"
        :project="project"
      />
    </div>
    <div class="grid grid-cols-3 justify-items-center p-2 w-1/3 mx-auto">
      <button @click="changePage(currentPage - 1)">
        <FontAwesomeIcon
          v-if="currentPage > 1"
          :icon="faArrowCircleLeft"
          class="text-electricBlue text-4xl"
        />
      </button>
      <span class="mx-4 self-center">{{ currentPage }} de {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)">
        <FontAwesomeIcon
          v-if="currentPage < totalPages"
          :icon="faArrowCircleRight"
          class="text-electricBlue text-4xl"
        />
      </button>
    </div>
  </section>
</template>
