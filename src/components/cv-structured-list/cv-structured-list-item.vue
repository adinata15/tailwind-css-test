<template>
  <component
    :is="tagType"
    v-bind="$attrs"
    class="cv-structured-list-item"
    :value="value"
    :model-value="modelValue"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
import CvStructuredListItemStandard from './_cv-structured-list-item-standard';
import CvStructuredListItemSelectable from './_cv-structured-list-item-selectable';

export default {
  name: 'CvStructuredListItem',
  components: { CvStructuredListItemStandard, CvStructuredListItemSelectable },
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    value: { type: String, default: '' },
    modelValue: { type: String },
  },
  computed: {
    tagType() {
      return this.selectable
        ? 'cv-structured-list-item-selectable'
        : 'cv-structured-list-item-standard';
    },
    selectable() {
      return this.$parent.selectable;
    },
  },
  mounted() {
    // pass on cv-structured-list-item-selectable change events
    this.$on('cv:change', (val) => {
      this.$parent.$emit('cv:change', this.value); // emit to parent
      this.$emit('change', val);
    });
  },
};
</script>
