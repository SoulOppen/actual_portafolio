import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useProjectStore = defineStore('project', () => {
  let project = ref([])
  const projectItem = computed(() => (index) => project.value[index])
  const projectLength = computed(() => {
    return project.value.length
  })
  const projectPages = computed(() => {
    return Math.ceil(projectLength.value / 4)
  })
  const pagesProject = computed(() => {
    return (pag) => project.value.slice((pag - 1) * 4, Math.min(pag * 4, projectLength.value))
  })
  const addProject = async () => {
    try {
      let response = await fetch('projects.json')
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.status} ${response.statusText}`)
      }
      let data = await response.json()
      project.value = data
    } catch (error) {
      console.error('Ocurrió un error:', error)
    }
  }
  return { project, projectItem, projectPages, pagesProject, projectLength, addProject }
})
