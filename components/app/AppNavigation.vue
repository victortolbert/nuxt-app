<script lang="ts" setup>
interface NavigationItem {
  // eslint-disable-next-line vue/prop-name-casing
  _path: string
  title: string
  children: NavigationItem[]
}

interface Props {
  navigationTree: NavigationItem[]
}

defineProps<Props>()
</script>

<template>
  <ul class="flex items-center gap-4">
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <AppNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
    </li>
  </ul>
</template>
