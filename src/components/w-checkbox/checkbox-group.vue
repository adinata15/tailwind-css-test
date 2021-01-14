<template>
  <div :class="`checkbox checkbox--${orientation}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    orientation: { type: String, default: 'horizontal' },
  },
  mounted() {
    this.$on('cv:change', (val) => this.$emit('change', val));
  },
};
</script>
