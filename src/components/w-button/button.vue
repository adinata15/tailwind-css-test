<template>
  <button :class="`button button--${size} button--${variant}`" role="button">
    <svg v-if="iconPath && (iconPosition === `left`)" viewbox="2 2 auto" class="button__icon">
      <path :d="`${iconPath}`"></path>
    </svg>
    <slot> </slot>
    <svg v-if="iconPath && (iconPosition === `right`)" viewbox="2 2 auto" class="button__icon">
      <path :d="`${iconPath}`"></path>
    </svg>
  </button>
</template>

<script>
import buttonMixin from './button-mixin';

export default {
  name: 'Button',
  mixins: [buttonMixin],
};
</script>
