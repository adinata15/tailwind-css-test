<template>
  <button
    :class="`${carbonPrefix}--overflow-menu ${carbonPrefix}--toolbar-action`"
    type="button"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
import { carbonPrefixMixin } from '../../mixins';
export default {
  name: 'CvDataTableAction',
  mixins: [carbonPrefixMixin],
  mounted() {
    // ensure SVG has
    if (this.$el.children[0].classList) {
      this.$el.children[0].classList.add(
        `${this.carbonPrefix}--toolbar-action__icon`
      );
    } else if (this.$el.children[0].class) {
      // IE 11 and Edge pre-crhomium
      this.$el.children[0].setAttribute(
        'class',
        `${this.$el.children[0].getAttribute('class')} ${
          this.carbonPrefix
        }--toolbar-action__icon`
      );
    }
  },
};
</script>
