<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
const page = (text) => text.includes('https')
</script>
<template>
  <a
    v-if="page(props.text)"
    :href="props.text"
    target="_blank"
    rel="noopener noreferrer"
    class="truncate text-sm lg:text-base hover:text-accentElectricBlue"
  >
    {{ props.text }}
  </a>
  <p v-else class="truncate text-sm lg:text-base">{{ props.text }}</p>
</template>
