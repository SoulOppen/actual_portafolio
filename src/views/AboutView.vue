<script setup>
import Title from '@/components/TitleComponent.vue'
import Paragraph from '@/components/ParagraphComponent.vue'
</script>
<template>
  <section class="mx-auto w-11/12 md:w-4/5 lg:3/4">
    <Title>About</Title>
    <Paragraph>
      Gracias por visitar mi portafolio. Agradezco sinceramente tu tiempo e interés en conocer mi
      trabajo. Este espacio refleja mi trayectoria, habilidades y aspiraciones. ¡Espero que lo
      disfrutes!
    </Paragraph>
    <Paragraph>
      La página fue desarrollada en Vue 3, integrando Vue Router para el ruteo, Pinia para la
      gestión de estados y Tailwind CSS para el diseño, utilizando Vite como herramienta de
      construcción para un desarrollo ágil y eficiente.
    </Paragraph>
    <Paragraph>
      El código fuente está disponible en
      <a
        href="https://github.com/SoulOppen/actual_portafolio"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-violet"
      >
        GitHub.
      </a>
    </Paragraph>
  </section>
</template>
