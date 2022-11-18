<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="focus:outline-none" @click="toggleDark">
    <icon v-if="$colorMode.value === 'dark'" name="carbon:sun" />
    <icon v-else name="carbon:moon" />
  </button>
</template>
