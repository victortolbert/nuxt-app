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

    <figure>
      <nuxt-img src="/mountains.jpg" />

      <figcaption class="text-center text-gray-600 text-xs mt-3">
        Photo by <a href="https://unsplash.com/@kydroon" target="_blank" class="underline">Kurt Cotoaga</a> on <a href="https://unsplash.com/s/photos/mountain" target="_blank" class="underline">Unsplash</a>
      </figcaption>
    </figure>

    <h1 class="text-xl opacity-50">
      Nuxt birthday
    </h1>
    <p class="text-4xl">
      {{ date }}
    </p>

    <label for="locale-chooser">Preview a different locale</label>
    <select id="locale-chooser" v-model="locale" class="m-auto w-50 border n-border-base rounded p-1">
      <option v-for="l of locales" :key="l" :value="l">
        {{ l }}
      </option>
    </select>

    <div>{{ $myPlugin() }}</div>

    <MyModal />

    <h1>{{ config.title }}</h1>

    <p>{{ config.description }}</p>

    <button v-if="config.showButton">
      I am a button
    </button>
  </div>
</template>
