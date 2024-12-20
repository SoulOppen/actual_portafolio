<script setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme.store'
import NavComponent from './components/NavComponent.vue'
import ChangeColorButton from './components/ChangeColorButtonComponent.vue'
const themeStore = useThemeStore()
const añoActual = new Date().getFullYear()
themeStore.setDarkModeBasedOnSystemPreference()
</script>

<template>
  <header class="bg-electricBlue">
    <div class="flex flex-wrap mx-auto md:w-3/4 lg:w-4/5">
      <NavComponent />
      <ChangeColorButton />
    </div>
  </header>
  <main class="pb-4">
    <RouterView />
  </main>
  <footer class="bg-electricBlue text-center">©{{ añoActual }} Ariel Oppenheimer</footer>
</template>
