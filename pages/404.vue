<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: 'full-page',
})
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div class="text-4xl">
      <Icon name="carbon:warning" />
    </div>

    <div>Not found</div>

    <div>
      <button class="m-3 mt-8 text-sm btn" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
