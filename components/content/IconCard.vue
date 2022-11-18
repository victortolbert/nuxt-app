<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default title',
  },
  description: {
    type: String,
    default: 'Default description',
  },
  icon: {
    type: String,
    default: 'tabler:markdown',
  },
})
</script>

<template>
  <div class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded">
    <component is="icon" :name="icon" class="w-20 h-20" />
    <h2 class="text-3xl font-semibold mb-2">
      {{ title }}
    </h2>
    <p>{{ description }}</p>
  </div>
</template>
