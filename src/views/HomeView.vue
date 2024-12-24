<script setup>
import Title from '@/components/TitleComponent.vue'
import Button from '@/components/ButtonComponent.vue'
import Paragraph from '@/components/ParagraphComponent.vue'
</script>
<template>
  <section class="grid grid-rows-[auto_1fr]">
    <Title>Ariel Oppenheimer L.</Title>
    <div class="lg:flex gap-2 mx-auto w-4/5 lg:flex-row">
      <div class="mx-auto lg:w-1/4 lg:max-h-[80dvh]">
        <img
          src="@/assets/img/yo.png"
          alt="img de computador"
          class="transform transition-transform duration-300 mx-auto drop-shadow-[0_4px_4px_rgb(0,0,0)] dark:drop-shadow-[0_4px_4px_rgb(255,255,255)] scale-75 hover:scale-90"
        />
      </div>
      <div class="mx-auto pb-2 lg:w-3/4">
        <h2 class="text-2xl font-mono p-2">Acerca de mi</h2>
        <Paragraph>
          Desarrollador front-end especializado en Vue, con experiencia en interfaces de usuario
          interactivas y optimización de aplicaciones web. Enfocado en la creación de componentes
          reutilizables y código limpio, usando Vuex, Vue Router y herramientas como Webpack.
          Apasionado por mejorar la experiencia del usuario y el rendimiento de las aplicaciones.
        </Paragraph>
        <div class="flex flex-wrap justify-evenly gap-6 p-4">
          <Button to="https://github.com/SoulOppen"> Github </Button>
          <Button to="https://www.linkedin.com/in/ariel-oppenheimer-lewin-76b05a83/">
            LinkedIn
          </Button>
        </div>
        <img
          src="@/assets/img/developer_portafolio.png"
          alt="img de computador"
          class="rounded-full object-cover mx-auto w-1/4"
        />
      </div>
    </div>
  </section>
</template>
