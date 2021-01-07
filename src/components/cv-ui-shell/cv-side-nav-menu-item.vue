<template>
  <li :class="`${carbonPrefix}--side-nav__menu-item`">
    <component
      :is="tagType"
      :class="[
        `${carbonPrefix}--side-nav__link`,
        { [`${carbonPrefix}--side-nav__link--current`]: active },
      ]"
      v-bind="{ ...$attrs, ...linkProps }"
      role="menuitem"
      v-on="$listeners"
    >
      <cv-side-nav-link-text>
        <slot />
      </cv-side-nav-link-text>
    </component>
  </li>
</template>

<script>
import { linkMixin, carbonPrefixMixin } from '../../mixins';
import CvSideNavLinkText from './_cv-side-nav-link-text';

export default {
  name: 'CvSideNavMenuItem',
  components: { CvSideNavLinkText },
  mixins: [linkMixin, carbonPrefixMixin],
  inheritAttrs: false,
  props: {
    active: Boolean,
  },
};
</script>
