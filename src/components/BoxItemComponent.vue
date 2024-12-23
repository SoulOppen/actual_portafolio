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
    class="hover:text-accentElectricBlue"
  >
    {{ props.text }}
  </a>
  <p v-else>{{ props.text }}</p>
</template>
