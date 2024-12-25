<script setup>
import { ref, computed } from 'vue'
import { useExperienceStore } from '@/stores/experience.store'
const experienceStore = useExperienceStore()
const render = ref(0)
const max = experienceStore.experienceLength
const inicio = computed(() => render.value === 0)
const exp = computed(() => experienceStore.experienceItem(render.value))
const final = computed(() => render.value === max - 1)
const incRender = () => (render.value += 1)
const decRender = () => (render.value -= 1)
</script>
<template>
  <section
    class="hidden lg:grid mx-auto h-[60dvh] grid-cols-[20px_1fr_20px] w-4/5 justify-items-center content-center items-center gap-2"
  >
    <div><button v-if="!inicio" @click="decRender"><=</button></div>
    <article class="m-4 p-2 border-4 w-full">
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
    <div><button v-if="!final" @click="incRender">=></button></div>
  </section>
</template>
