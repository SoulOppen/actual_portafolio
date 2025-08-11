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
</script>
<template>
  <Title>{{ actualProject.nombre }}</Title>
  <div
    class="flex flex-col lg:-flex-row flex-wrap justify-center items-center lg:h-3/4 w-4/5 mx-auto"
  >
    <div class="lg:w-1/2">
      <img :src="actualProject.imagen" />
    </div>

    <div class="lg:w-2/5">
      <Paragraph>{{ actualProject.descripcion }}</Paragraph>
      <h2>Tecnología:</h2>
      <ul class="pl-6">
        <li v-for="tech in actualProject.tecnologias" :key="tech" class="list-disc">
          {{ tech }}
        </li>
      </ul>

      <a
        :href="actualProject.pagina"
        target="_blank"
        rel="noopener noreferrer"
        class="block rounded-full px-4  text-center transition-color duration-100 bg-electricBlue hover:bg-accentElectricBlue hover:text-white w-1/2 mx-auto p-2"
        >ver página
      </a>
    </div>
  </div>t
</template>
