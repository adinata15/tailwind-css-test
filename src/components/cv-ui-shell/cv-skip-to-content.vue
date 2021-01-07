<template>
  <component
    :is="tagType"
    v-bind="linkProps"
    :class="`cv-skip-to-content ${carbonPrefix}--skip-to-content`"
    v-on="$listeners"
  >
    <slot>Skip to main content</slot>
  </component>
</template>

<script>
import { linkMixin, carbonPrefixMixin } from '../../mixins';

export default {
  name: 'CvSkipToContent',
  mixins: [linkMixin, carbonPrefixMixin],
};
</script>
