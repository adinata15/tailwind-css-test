<template>
  <component
    :is="tagType"
    v-bind="linkProps"
    ref="target"
    data-tile="clickable"
    :class="`cv-tile-clickable ${carbonPrefix}--tile--clickable`"
    tabindex="0"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>
import { linkMixin, carbonPrefixMixin, methodsMixin } from '../../mixins';

export default {
  name: 'CvTileClickable',
  mixins: [
    linkMixin,
    carbonPrefixMixin,
    methodsMixin({ target: ['blur', 'focus'] }),
  ],
};
</script>
