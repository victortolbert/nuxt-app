<script setup lang="ts">
const route = useRoute()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <Icon
      name="twemoji:waving-hand"
      class="inline-block text-4xl animate-shake-x animate-duration-5000"
    />

    <h3 class="text-2xl font-medium">
      Hi,
    </h3>

    <div class="text-xl">
      {{ name }}!
    </div>

    <template v-if="user.otherNames.length">
      <p class="my-4 text-sm">
        <span class="opacity-50">Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <NuxtLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </NuxtLink>
          </li>
        </ul>
      </p>
    </template>

    <Counter />

    <div>
      <NuxtLink class="inline-block px-4 py-1 m-3 text-sm text-white bg-teal-600 rounded cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" to="/scratch">
        Back
      </NuxtLink>
    </div>
  </div>
</template>
