<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div>
    Pos: {{ x }}, {{ y }}
  </div>
</template>
