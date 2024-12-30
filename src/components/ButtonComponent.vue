<script setup>
const props = defineProps({
  to: {
    type: String,
  },
})
</script>
<template>
  <button
    class="rounded-3xl transition-color duration-300 w-full lg:w-1/3 px-2 py-4 bg-electricBlue hover:bg-accentElectricBlue hover:text-white"
  >
    <a
      :href="props.to"
      target="_blank"
      rel="noopener noreferrer"
      class="flex justify-center items-center gap-4"
    >
      <slot />
    </a>
  </button>
</template>
