<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <button class="inline-block p-2 text-white bg-teal-600 rounded-full cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="dec()">
      <Icon class="block" name="carbon:subtract" />
    </button>

    <div class="inline-block m-auto font-mono w-15">
      {{ count }}
    </div>

    <button class="inline-block p-2 text-white bg-teal-600 rounded-full cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" @click="inc()">
      <Icon class="block" name="carbon:add" />
    </button>
  </div>
</template>
