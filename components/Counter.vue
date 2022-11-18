<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <button class="p-2 rounded-full" @click="dec()">
      <icon name="carbon:subtract" />
    </button>

    <div class="font-mono w-15 m-auto inline-block">
      {{ count }}
    </div>

    <button class="p-2 rounded-full" @click="inc()">
      <icon name="carbon:add" />
    </button>
  </div>
</template>
