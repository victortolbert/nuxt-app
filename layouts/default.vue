<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div class="flex flex-col min-h-screen p-16">
    <header class="">
      <AppNavigation :navigation-tree="navigation" />
    </header>

    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
