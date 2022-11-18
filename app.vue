<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' },
  ],
  bodyAttrs: {
    class: 'test',
  },
  link: [
    {
      rel: 'icon', type: 'image/svg+xml', href: '/logo.svg',
    },
    {
      rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css',
    },
    {
      rel: 'stylesheet', href: '/kendo-exemplar.css',
    },
  ],
  script: [
    { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBvOoQe7xFg-XaWj9w_l7ODbMqb4BK0B9E&libraries=places' },
    { children: 'console.log(\'Hello world\')' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
