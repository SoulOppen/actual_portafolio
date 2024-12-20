<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme.store'
import NavComponent from './components/NavComponent.vue'
import ChangeColorButton from './components/ChangeColorButtonComponent.vue'
import Title from './components/TitleComponent.vue'
const themeStore = useThemeStore()
const dialog = ref(false)
const añoActual = new Date().getFullYear()
const openDialog = () => (dialog.value = !dialog.value)
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
    class="fixed inset-0 flex items-center justify-center h-screen w-full mx-auto bg-black/60 pointer-events-none"
  >
    <div
      class="pointer-event-auto bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText w-4/5"
    >
      <div class="flex justify-between items-center content-center">
        <Title>Contacto</Title>
        <div
          class="flex justify-center items-center rounded-full w-6 self-start m-2 bg-darkBg dark:bg-lightBg dark:text-lightText text-darkText pointer-events-auto cursor-pointer"
          @click="() => (dialog = false)"
        >
          X
        </div>
      </div>
    </div>
  </dialog>
</template>
