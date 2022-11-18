<script setup lang="ts">
defineProps({
  source: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <ProseP>
    <!--
    <GithubLink v-slot="data" :source="source" :edit="false">
      <NuxtLink :href="data?.url" target="_blank" rel="noopener" class="flex items-center gap-1 text-sm font-semibold hover:text-primary-500">
        <Icon name="fa-brands:github" class="w-5 h-5 mr-1" />
        <span>Show Source</span>
      </NuxtLink>
    </GithubLink>
    -->
  </ProseP>
</template>
