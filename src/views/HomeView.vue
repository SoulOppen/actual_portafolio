<script setup>
import Button from '@/components/ButtonComponent.vue'
</script>
<template>
  <section class="item-center grid grid-rows-[auto_1fr] h-full justify-center">
    <h1 class="text-center text-2xl md:text-3xl lg:text-4xl p-6">Ariel Oppenheimer L.</h1>
    <div class="flex flex-col justify-center mx-auto w-4/5 gap-12 lg:flex-row lg:items-center">
      <div class="mx-auto md:w-4/5 lg:w-1/2">
        <img
          src="@/assets/img/developer_portafolio.png"
          alt="img de computador"
          class="aspect-square rounded-full object-cover h-full align-middle mx-auto md:w-1/2"
        />
      </div>
      <div class="lg:w-1/2">
        <p class="text-balance">
          Desarrollador front-end especializado en Vue, con experiencia en interfaces de usuario
          interactivas y optimización de aplicaciones web. Enfocado en la creación de componentes
          reutilizables y código limpio, usando Vuex, Vue Router y herramientas como Webpack.
          Apasionado por mejorar la experiencia del usuario y el rendimiento de las aplicaciones.
        </p>
        <div class="flex flex-wrap justify-evenly gap-8 p-6">
          <Button to="https://github.com/SoulOppen"> Github </Button>
          <Button to="https://www.linkedin.com/in/ariel-oppenheimer-lewin-76b05a83/">
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.text-balance {
  text-align: justify;
  text-wrap: balance;
  hyphens: auto;
  word-break: break-word;
}
</style>
