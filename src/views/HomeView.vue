<script setup>
import Title from '@/components/TitleComponent.vue'
import Button from '@/components/ButtonComponent.vue'
import Paragraph from '@/components/ParagraphComponent.vue'
</script>
<template>
  <section class="item-center grid grid-rows-[auto_1fr] h-full justify-center">
    <Title>Ariel Oppenheimer L.</Title>
    <div class="flex flex-col justify-center mx-auto w-4/5 gap-12 lg:flex-row lg:items-center">
      <div class="mx-auto md:w-4/5 lg:w-1/4">
        <img
          src="@/assets/img/yo.png"
          alt="img de computador"
          class="object-cover transform transition-transform duration-300 aspect-[2/5] align-middle mx-auto drop-shadow-[0_4px_4px_rgb(0,0,0)] dark:drop-shadow-[0_4px_4px_rgb(255,255,255)] hover:scale-110"
        />
      </div>
      <div class="lg:w-3/4">
        <h2 class="text-2xl font-mono p-4">Acerca de mi</h2>
        <Paragraph>
          Desarrollador front-end especializado en Vue, con experiencia en interfaces de usuario
          interactivas y optimización de aplicaciones web. Enfocado en la creación de componentes
          reutilizables y código limpio, usando Vuex, Vue Router y herramientas como Webpack.
          Apasionado por mejorar la experiencia del usuario y el rendimiento de las aplicaciones.
        </Paragraph>
        <div class="flex flex-wrap justify-evenly gap-8 p-6">
          <Button to="https://github.com/SoulOppen"> Github </Button>
          <Button to="https://www.linkedin.com/in/ariel-oppenheimer-lewin-76b05a83/">
            LinkedIn
          </Button>
        </div>
        <img
          src="@/assets/img/developer_portafolio.png"
          alt="img de computador"
          class="aspect-square rounded-full object-cover lg:h-full align-middle mx-auto w-3/4 md:w-1/4"
        />
      </div>
    </div>
  </section>
</template>
