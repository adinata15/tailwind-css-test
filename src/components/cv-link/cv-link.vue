<template>
  <component
    :is="tagType"
    v-bind="linkProps"
    class="cv-link"
    :class="[
      `${carbonPrefix}--link`,
      { [`${carbonPrefix}--link--inline`]: inline },
    ]"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
import { linkMixin, carbonPrefixMixin } from '../../mixins';

export default {
  name: 'CvLink',
  mixins: [linkMixin, carbonPrefixMixin],
  props: {
    inline: Boolean,
  },
};
</script>
