<script setup>
import { useExperienceStore } from '@/stores/experience.store'
import ExperienceItem from '@/components/ExperienceItemComponent.vue'
const experienceStore = useExperienceStore()
</script>
<template>
  <section class="lg:hidden mx-auto overflow-y-auto h-[70vh] w-4/5">
    <ExperienceItem v-for="exp in experienceStore.experience" :key="exp.id" :experience="exp" />
  </section>
</template>
