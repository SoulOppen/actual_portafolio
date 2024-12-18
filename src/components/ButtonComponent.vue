<script setup>
const props = defineProps({
  to: {
    type: String,
  },
})
</script>
<template>
  <button class="rounded-3xl w-full lg:w-1/3 px-2 py-4 bg-electricBlue hover:bg-accentElectricBlue">
    <a :href="props.to" target="_blank" rel="noopener noreferrer">
      <slot />
    </a>
  </button>
</template>
