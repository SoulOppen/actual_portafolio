<template>
  <p class="text-balance mx-auto w-full">
    <slot />
  </p>
</template>
<style scoped>
.text-balance {
  text-align: justify;
  text-wrap: pretty;
  hyphens: auto;
  word-break: break-word;
}
</style>
