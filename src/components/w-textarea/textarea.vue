<template>
  <label :class="`textarea textarea--${orientation} textarea--${variant}`">
    <span :class="`textarea-label`">Name</span>
    <span>
      <input :class="`textarea-input--${size}`" :placeholder="`${placeholder}`" />
      <svg v-if="iconPath" viewbox="2 2 auto" class="textarea-input__icon">
        <path :d="`${iconPath}`"></path>
      </svg>
    </span>
  </label>
</template>

<script>
import textAreaMixin from './textarea-mixin';

export default {
  name: 'Textarea',
  mixins: [textAreaMixin],
};
</script>
