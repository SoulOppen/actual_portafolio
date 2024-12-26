<script setup>
import { ref, onMounted } from 'vue'
import { useExperienceStore } from '@/stores/experience.store'

import Title from '@/components/TitleComponent.vue'
import ExperienceBox from '@/components/ExperienceBoxComponent.vue'
import ExperienceGrid from '@/components/ExperienceGridComponent.vue'
const experienceStore = useExperienceStore()
const isLoading = ref(true)
onMounted(async () => {
  try {
    await experienceStore.addExperience()
  } catch (error) {
    console.error('Error al agregar experiencia:', error)
  } finally {
    isLoading.value = false
  }
})
</script>
<template>
  <Title>Experiencia Laboral</Title>
  <div v-if="isLoading">Cargando experiencia...</div>
  <div v-else>
    <ExperienceBox />
    <ExperienceGrid />
  </div>
</template>
