<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      form: {
        address: {
          street_number: null,
          route: '',
          locality: '',
          administrative_area_level_2: '',
          administrative_area_level_1: '',
          country: '',
          postal_code: '',
          latitude: '',
          longitude: '',
        }
      },
    }
  },
  methods: {
    getAddressData(addressData, placeResultData, id) {
      this.form.address = addressData
    },
  },
})
</script>

<template>
  <div>
    <article class="prose">
      <GoogleAutocomplete
        id="map"
        classname="w-full rounded-lg border-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        v-on:placechanged="getAddressData"
        placeholder="Start typing"
      />
      <ContentDoc />
    </article>
    <pre>{{ form }}</pre>
  </div>
</template>
