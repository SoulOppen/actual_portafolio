<script setup>
import { computed } from 'vue'
import { useProjectStore } from '@/stores/project.store'
import Title from '@/components/TitleComponent.vue'
import Paragraph from '@/components/ParagraphComponent.vue'
const projectStore = useProjectStore()
const props = defineProps({
  id: {
    type: String,
  },
})
const actualProject = computed(() => projectStore.projectItem(props.id))
console.log(actualProject.value)
</script>
<template>
  <Title>{{ actualProject.nombre }}</Title>
  <div class="mx-auto w-4/5 md:w-3/5 lg:w-1/2">
    <img :src="actualProject.imagen" class="aspect-[16/9] object-cover" />
    <Paragraph>{{ actualProject.descripcion }}</Paragraph>
    <h2>Tecnología:</h2>
    <ul class="pl-6">
      <li v-for="tech in actualProject.tecnologias" :key="tech" class="list-disc">
        {{ tech }}
      </li>
    </ul>
  </div>
</template>
