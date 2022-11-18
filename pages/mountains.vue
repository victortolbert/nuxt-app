<script lang="ts" setup>
const { data: mountain } = await useFetch('/api/mountain')
</script>

<template>
  <div>
    <pre>{{ mountain }}</pre>
  </div>
</template>
