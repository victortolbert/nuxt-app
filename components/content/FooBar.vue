<script setup>
defineProps({
  icon: {
    type: String,
    default: '🙂',
  },
})
</script>

<template>
  <p>
    I'm feeling {{ icon }} today!
  </p>
</template>
