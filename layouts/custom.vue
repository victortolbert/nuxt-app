<script>
export default {
  created() {
    console.log('layout created')
  },
}
</script>

<template>
  <div>
    <strong>Custom layout</strong>
    Header slot:
    <slot name="header">
      Default header slot content for <code>Custom</code> layout
    </slot>

    <slot />
  </div>
</template>
