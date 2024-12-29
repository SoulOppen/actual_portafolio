<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
})

const open = ref(false)
const setOpen = () => {
  open.value = !open.value // Cambia el estado de `open`
}
</script>

<template>
  <div class="rounded-md cursor-pointer mx-6 border-2 border-slate-500 m-4 text-darkText text-xl">
    <div @click="setOpen" class="px-2">
      {{ name }}
    </div>
    <div v-if="open" class="px-2 bg-slate-500">
      <slot />
    </div>
  </div>
</template>
