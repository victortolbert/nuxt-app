<script>
import { DropDownButton } from '@progress/kendo-vue-buttons'

export default {
  components: {
    DropDownButton,
  },
  data() {
    return {
      items: [
        'Adjuster',
        'Service Technician',
      ],
    }
  },
}
</script>

<template>
  <div>
    <div class="row example-wrapper">
      <div class="col-xs-12 col-sm-6 example-col">
        <DropDownButton
          icon="plus"
          text="Add User"
          :items="items"
          theme-color="primary"
        />
      </div>
    </div>
  </div>
</template>
