<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const colorSchema = ref('')
function setDarkModeBasedOnSystemPreference() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  colorSchema.value = prefersDark ? 'dark' : ''
}
watch(colorSchema, (newVal) => {
  if (newVal === 'dark') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})
setDarkModeBasedOnSystemPreference()
</script>

<template>
  <header class="bg-electricBlue">
    <nav class="flex flex-wrap justify-evenly mx-auto max-lg:w-3/4">
      <RouterLink to="/">
        <img src="" />
      </RouterLink>
      <RouterLink to="/about">Experiencia</RouterLink>
      <RouterLink to="/about">Proyectos</RouterLink>
      <RouterLink to="/about">Proyectos</RouterLink>
    </nav>
  </header>
  <main class="">
    <RouterView />
  </main>
  <footer class="bg-electricBlue text-center">©2024 Ariel Oppenheimer</footer>
</template>
