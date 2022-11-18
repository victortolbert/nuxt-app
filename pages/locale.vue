<script lang="ts" setup>
const { locale } = useI18n()
</script>

<template>
  <form>
    <select v-model="locale">
      <option value="en">
        en
      </option>
      <option value="fr">
        fr
      </option>
    </select>
    <p>{{ $t('welcome') }}</p>
  </form>
</template>
