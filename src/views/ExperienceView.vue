<script setup>
import { onMounted } from 'vue'
import Title from '@/components/TitleComponent.vue'
import { useExperienceStore } from '@/stores/experience.store'
const experienceStore = useExperienceStore()
onMounted(async () => {
  await experienceStore.addExperience()
})
</script>
<template>
  <Title>Experiencia Laboral</Title>
  <p>{{ experienceStore.experienceLength }}</p>
</template>
