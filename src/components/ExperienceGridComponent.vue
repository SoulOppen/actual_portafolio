<script setup>
import { ref, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useExperienceStore } from '@/stores/experience.store'
import ExperienceItem from './ExperienceItemComponent.vue'
const experienceStore = useExperienceStore()
const render = ref(0)
const max = experienceStore.experienceLength
const inicio = computed(() => render.value === 0)
const exp = computed(() => experienceStore.experienceItem(render.value) || {})
const final = computed(() => render.value === max - 1)
const incRender = () => (render.value += 1)
const decRender = () => (render.value -= 1)
</script>
<template>
  <section
    class="hidden lg:grid mx-auto h-[60dvh] grid-cols-[20px_1fr_20px] w-4/5 justify-items-center content-center items-center gap-2"
  >
    <div>
      <button v-if="!inicio" @click="decRender">
        <FontAwesomeIcon :icon="faArrowCircleLeft" class="text-blue-600 text-4xl" />
      </button>
    </div>
    <ExperienceItem :experience="exp" />
    <div>
      <button v-if="!final" @click="incRender">
        <FontAwesomeIcon :icon="faArrowCircleRight" class="text-blue-600 text-4xl" />
      </button>
    </div>
  </section>
</template>
