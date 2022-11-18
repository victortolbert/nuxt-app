<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    icon?: string
    disabled?: boolean
    type?: string
  }>(),
  {
    modelValue: '',
    disabled: false,
    type: 'text',
  },
)
const emit = defineEmits<{ (...args: any): void }>()
const input = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div class="flex items-center px-2 py-1 border rounded n-text-input bg-white dark:bg-[#222] focus-within:ring-2 focus-within:ring-context/50 focus-within:border-context border-gray-400/50">
    <slot name="icon">
      <Icon v-if="icon" :name="icon" class="mr-0.4em text-1.1em opacity-50" />
    </slot>
    <input
      v-model="input"
      class="!outline-none flex-auto bg-white dark:bg-[#222]"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>
