<script setup>
import { reactive, ref } from 'vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme.store'
import NavComponent from './components/NavComponent.vue'
import ChangeColorButton from './components/ChangeColorButtonComponent.vue'
import Title from './components/TitleComponent.vue'
import Box from './components/BoxComponent.vue'
const themeStore = useThemeStore()
const dialog = ref(false)
const info = reactive([
  { name: 'Email', text: 'arieloppenheimer@gmail.com' },
  { name: 'Github', text: 'https://github.com/SoulOppen' },
  { name: 'Linkedin', text: 'https://www.linkedin.com/in/ariel-oppenheimer-lewin-76b05a83/' },
])
const añoActual = new Date().getFullYear()
const openDialog = () => (dialog.value = !dialog.value)
const page = (text) => text.includes('https')
themeStore.setDarkModeBasedOnSystemPreference()
</script>

<template>
  <header class="bg-electricBlue">
    <div class="flex flex-wrap mx-auto md:w-3/4 lg:w-4/5">
      <NavComponent @openContact="openDialog" />
      <ChangeColorButton />
    </div>
  </header>
  <main class="pb-4">
    <RouterView />
  </main>
  <footer class="bg-electricBlue text-center">©{{ añoActual }} Ariel Oppenheimer</footer>
  <dialog
    v-if="dialog"
    class="fixed inset-0 flex items-center justify-center h-screen w-full mx-auto bg-black/60"
  >
    <div class="bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText w-4/5">
      <div class="flex justify-between items-center content-center pointer-events-auto">
        <Title>Contacto</Title>
        <div
          class="flex justify-center items-center rounded-full w-6 self-start m-2 bg-darkBg dark:bg-lightBg dark:text-lightText text-darkText cursor-pointer"
          @click="() => (dialog = false)"
        >
          X
        </div>
      </div>
      <Box v-for="item of info" :key="item.name" :name="item.name">
        <a
          v-if="page(item.text)"
          :href="item.text"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-accentElectricBlue"
        >
          {{ item.text }}
        </a>
        <p v-else>{{ item.text }}</p>
      </Box>
    </div>
  </dialog>
</template>
