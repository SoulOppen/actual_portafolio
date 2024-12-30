<script setup>
import { onMounted, ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useThemeStore } from './stores/theme.store'
import { useExperienceStore } from '@/stores/experience.store'
import { useProjectStore } from '@/stores/project.store'
import NavComponent from './components/NavComponent.vue'
import ChangeColorButton from './components/ChangeColorButtonComponent.vue'
import ContactButton from './components/ContactButtonComponent.vue'
import Inside from './components/InsideComponent.vue'

const themeStore = useThemeStore()
const experienceStore = useExperienceStore()
const projectStore = useProjectStore()
const dialog = ref(false)
const añoActual = new Date().getFullYear()
const openDialog = () => (dialog.value = !dialog.value)
onMounted(async () => {
  themeStore.setDarkModeBasedOnSystemPreference()
  try {
    await experienceStore.addExperience()
    await projectStore.addProject()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <header class="bg-electricBlue">
    <div
      class="flex flex-col md:flex-row flex-wrap justify-between items-center mx-auto md:w-3/4 lg:w-4/5"
    >
      <RouterLink to="/">
        <FontAwesomeIcon :icon="faHome" />
      </RouterLink>
      <NavComponent />
      <div class="flex flex-wrap item-center p-2 gap-2">
        <ContactButton @openContact="openDialog" />
        <ChangeColorButton />
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer
    class="flex flex-col md:flex-row flex-wrap justify-between items-center bg-electricBlue text-center px-12"
  >
    <div class="text-center flex-1">©{{ añoActual }} Ariel Oppenheimer</div>
    <div class="flex flex-wrap justify-evenly gap-6">
      <a href="https://github.com/SoulOppen" class="text-lg">
        <FontAwesomeIcon :icon="faSquareGithub" />
      </a>
      <a href="https://www.linkedin.com/in/ariel-oppenheimer-lewin-76b05a83/" class="text-lg">
        <FontAwesomeIcon :icon="faLinkedin" />
      </a>
    </div>
  </footer>
  <dialog
    v-if="dialog"
    class="fixed inset-0 flex items-center justify-center h-screen w-full mx-auto bg-black/60"
  >
    <Inside @close="() => (dialog = false)" />
  </dialog>
</template>
