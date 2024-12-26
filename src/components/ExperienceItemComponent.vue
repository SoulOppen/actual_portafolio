<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
console.log('Props recibidas:', props)
</script>
<template>
  <article
    class="my-4 mx-auto p-2 border-4 border-lightText dark:border-darkText w-3/4 lg:h-[50vh]"
  >
    <header class="flex justify-between">
      <div>
        <p>
          {{ experience.title }}{{ experience.contract_type === 'Part-time' ? '(Part Time)' : '' }}
        </p>
        <p>{{ experience.company }}</p>
      </div>
      <div class="text-center w-2/5 md:w-1/4">
        <p>{{ experience.duration }}</p>
        <p>{{ experience.location }}</p>
      </div>
    </header>
    <main>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="(item, index) in experience.details" :key="index">{{ item }}</li>
      </ul>
    </main>
  </article>
</template>
