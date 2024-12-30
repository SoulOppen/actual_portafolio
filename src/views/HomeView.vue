<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Title from '@/components/TitleComponent.vue'
import Button from '@/components/ButtonComponent.vue'
import Paragraph from '@/components/ParagraphComponent.vue'
import yo from '@/assets/img/yo.png'
import developer from '@/assets/img/developer_portafolio.png'
</script>
<template>
  <section class="grid grid-rows-[auto_1fr]">
    <Title>Ariel Oppenheimer L.</Title>
    <div class="flex flex-col items-center gap-2 mx-auto w-4/5 lg:flex-row">
      <div class="mx-auto h-[60dvh] lg:w-1/4">
        <img
          :src="yo"
          alt="img de computador"
          class="object-contain w-full h-full transform transition-transform duration-300 mx-auto drop-shadow-[0_4px_4px_rgb(0,0,0)] dark:drop-shadow-[0_4px_4px_rgb(255,255,255)] lg:hover:scale-125"
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
          <Button to="https://github.com/SoulOppen">
            <FontAwesomeIcon :icon="faSquareGithub" class="text-4xl" />
            Github
          </Button>
          <Button to="https://www.linkedin.com/in/ariel-oppenheimer-lewin-76b05a83/">
            <FontAwesomeIcon :icon="faLinkedin" class="text-4xl" />
            LinkedIn
          </Button>
        </div>
        <img
          :src="developer"
          alt="img de computador"
          class="rounded-full mx-auto w-1/3 lg:w-1/4 xl:w-1/5"
        />
      </div>
    </div>
  </section>
</template>
