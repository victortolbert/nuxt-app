<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div>
    <AppNavigation :navigation-tree="navigation" />
    <slot />
    <Footer />
  </div>
</template>
