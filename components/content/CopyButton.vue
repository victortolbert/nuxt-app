<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})

const { copy: copyToClipboard } = useClipboard()

const state = ref('init')

const copy = (e: MouseEvent) => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied'

      setTimeout(() => {
        state.value = 'init'
      }, 1000)
    })
    .catch(() => {
      console.warn('Couldn\'t copy to clipboard!')
    })
}
</script>

<template>
  <button class="px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 bg-gray-800 rounded-lg copy focus:outline-none dark:bg-black" @click="copy">
    <Icon v-if="state === 'copied'" name="fa-check" class="w-4 h-4" />
    <Icon v-else name="fa-copy" class="w-4 h-4" />
  </button>
</template>
