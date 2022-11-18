<script lang="ts" setup>
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)
const config = useAppConfig()
</script>

<template>
  <div>
    <h1>Google Fonts</h1>
    <div style="font-family: 'Roboto';">
      Roboto
    </div>
    <div style="font-family: 'Mulish';">
      Mulish
    </div>

    <InputEntry />

    <h1 class="text-xl opacity-50">
      Nuxt birthday
    </h1>
    <p class="text-4xl">
      {{ date }}
    </p>

    <label for="locale-chooser">Preview a different locale</label>
    <select id="locale-chooser" v-model="locale" class="p-1 m-auto border rounded w-50 n-border-base">
      <option v-for="l of locales" :key="l" :value="l">
        {{ l }}
      </option>
    </select>

    <h1>{{ config.title }}</h1>

    <p>{{ config.description }}</p>

    <button v-if="config.showButton">
      I am a button
    </button>
  </div>
</template>
