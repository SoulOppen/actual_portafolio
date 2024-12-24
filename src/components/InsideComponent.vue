<script setup>
import { reactive } from 'vue'
import Title from '@/components/TitleComponent.vue'
import Box from '@/components/BoxComponent.vue'
import BoxItem from '@/components/BoxItemComponent.vue'
const info = reactive([
  { name: 'Email', text: 'arieloppenheimer@gmail.com' },
  { name: 'Github', text: 'https://github.com/SoulOppen' },
  { name: 'Linkedin', text: 'https://www.linkedin.com/in/ariel-oppenheimer-lewin-76b05a83/' },
])
const emits = defineEmits(['close'])
const close = () => {
  emits('close')
}
</script>
<template>
  <div
    class="bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText h-[80dvh] overflow-y-auto w-4/5"
  >
    <div class="flex justify-between items-center content-center pointer-events-auto">
      <Title>Contacto</Title>
      <div
        class="flex justify-center items-center rounded-full w-6 self-start m-2 bg-darkBg dark:bg-lightBg dark:text-lightText text-darkText cursor-pointer transition-transform duration-100 hover:scale-125"
        @click="close"
      >
        X
      </div>
    </div>
    <Box v-for="item of info" :key="item.name" :name="item.name">
      <BoxItem :text="item.text" />
    </Box>
  </div>
</template>
