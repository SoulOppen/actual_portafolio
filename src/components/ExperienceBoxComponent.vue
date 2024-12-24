<script setup>
import { onMounted } from 'vue'
import { useExperienceStore } from '@/stores/experience.store'
const experienceStore = useExperienceStore()
onMounted(async () => {
  await experienceStore.addExperience()
})
</script>
<template>
  <div class="lg:hidden mx-auto overflow-y-auto h-[70vh] w-4/5">
    <article v-for="exp in experienceStore.experience" :key="exp.id" class="m-4 p-2 border-4">
      <header class="flex justify-between">
        <div>
          <p>{{ exp.title }}{{ exp.contract_type === 'Part-time' ? '(Part Time)' : '' }}</p>
          <p>{{ exp.company }}</p>
        </div>
        <div class="text-center w-2/5 md:w-1/4">
          <p>{{ exp.duration }}</p>
          <p>{{ exp.location }}</p>
        </div>
      </header>
      <main>
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="(item, index) in exp.details" :key="index">{{ item }}</li>
        </ul>
      </main>
    </article>
  </div>
</template>
