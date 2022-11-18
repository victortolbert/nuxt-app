<script lang="ts" setup>
// const posts = await $fetch('https://jsonplaceholder.typicode.com/posts')
const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<template>
  <div class="posts">
    <NuxtLayout name="custom">
      Default slot
      {{ posts }}
    </NuxtLayout>
  </div>
</template>
