<script lang="ts" setup>
const version = 2 + 1
const { x, y } = useMouse()
const { locale } = useI18n()
</script>

<template>
  <div class="hello">
    Hello Nuxt {{ version }}!
    <div>pos: {{ x }}, {{ y }}</div>
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
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>
