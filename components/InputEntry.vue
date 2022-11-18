<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="off"
      class="px-4 py-2 mt-5 w-[250px] text-center bg-transparent border rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none"
      @keydown.enter="go"
    >
    <div>
      <button class="inline-block px-4 py-1 m-3 text-sm text-white bg-teal-600 rounded cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50" :disabled="!name" @click="go">
        GO
      </button>
    </div>
  </div>
</template>
