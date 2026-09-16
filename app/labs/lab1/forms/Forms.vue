<script setup lang="ts">
import Buttons from './Buttons.vue'
import Checkboxes from './Checkboxes.vue'
import Dropdowns from './Dropdowns.vue'
import OtherFieldTypes from './OtherFieldTypes.vue'
import RadioButtons from './RadioButtons.vue'
import TextArea from './TextArea.vue'
import TextFields from './TextFields.vue'
import YourForm from './YourForm.vue'
</script>

<template>
  <div id="wd-forms">
    <h4>Form Elements</h4>
    <form id="wd-text-fields">
      <TextFields />
      <TextArea />
      <RadioButtons />
      <Checkboxes />
      <Dropdowns />
      <OtherFieldTypes />
      <Buttons />
      <YourForm />
    </form>
  </div>
</template>
