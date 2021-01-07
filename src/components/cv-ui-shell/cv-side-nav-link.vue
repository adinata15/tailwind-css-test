<template>
  <li :class="`${carbonPrefix}--side-nav__item`">
    <component
      :is="tagType"
      :class="[
        'cv-side-nav-item-link',
        `${carbonPrefix}--side-nav__link`,
        { [`${carbonPrefix}--side-nav__link--current`]: active },
      ]"
      v-bind="{ ...$attrs, ...linkProps }"
      v-on="$listeners"
    >
      <cv-side-nav-icon v-if="hasNavIcon" small>
        <slot name="nav-icon" />
      </cv-side-nav-icon>
      <cv-side-nav-link-text>
        <slot />
      </cv-side-nav-link-text>
    </component>
  </li>
</template>

<script>
import { linkMixin, carbonPrefixMixin } from '../../mixins';
import CvSideNavIcon from './cv-side-nav-icon';
import CvSideNavLinkText from './_cv-side-nav-link-text';

export default {
  name: 'CvSideNavLink',
  components: { CvSideNavIcon, CvSideNavLinkText },
  mixins: [linkMixin, carbonPrefixMixin],
  inheritAttrs: false,
  props: {
    active: Boolean,
    icon: Object,
  },
  data() {
    return {
      hasNavIcon: false,
    };
  },
  mounted() {
    this.checkSlots();
  },
  updated() {
    this.checkSlots();
  },
  methods: {
    checkSlots() {
      this.hasNavIcon = !!this.$slots['nav-icon'];
    },
  },
};
</script>
