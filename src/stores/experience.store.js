import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useExperienceStore = defineStore('experience', () => {
  let experience = ref([])
  const experienceItem = computed(() => (index) => experience.value[index])
  const experienceLength = computed(() => {
    return experience.value.length
  })
  const addExperience = async () => {
    try {
      let response = await fetch('data.json')
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.status} ${response.statusText}`)
      }
      let data = await response.json()
      experience.value = data.experience
    } catch (error) {
      console.error('Ocurrió un error:', error)
    }
  }
  return { experience, experienceItem, experienceLength, addExperience }
})
