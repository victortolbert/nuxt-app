<script>
export default {
  created() {
    // eslint-disable-next-line no-console
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
