<template>
  <div class="h-full flex flex-col items-center justify-center text-center p-4">
    <h1 class="text-6xl font-bold text-coral">404</h1>
    <p class="text-2xl font-medium mt-4">Página no encontrada</p>
    <p class="mt-2">Lo sentimos, la página que estás buscando no existe o fue movida.</p>
    <router-link
      to="/"
      class="mt-6 inline-block bg-electricBlue hover:bg-accentElectricBlue font-medium py-2 px-4 rounded-lg"
    >
      Volver a la página principal
    </router-link>
  </div>
</template>
