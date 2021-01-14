<template>
  <div :class="`radio radio--${orientation}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    orientation: { type: String, default: 'horizontal' },
  },
  mounted() {
    this.$on('cv:change', (val) => this.$emit('change', val));
  },
};
</script>
