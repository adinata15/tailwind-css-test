<template>
  <footer :class="`cv-side-nav-footer ${carbonPrefix}--side-nav__footer`">
    <button
      :class="`${carbonPrefix}--side-nav__toggle`"
      type="button"
      v-bind="$attrs"
      :title="assistiveText"
      @click="$emit('toggle-expand')"
    >
      <div :class="`${carbonPrefix}--side-nav__icon`">
        <Close20
          v-if="expanded"
          :class="`${carbonPrefix}--side-nav__icon--collapse ${carbonPrefix}--side-nave-collapse-icon`"
        />
        <ChevronRight20
          v-if="!expanded"
          :class="`${carbonPrefix}--side-nav__icon--expand ${carbonPrefix}--side-nave-expand-icon`"
        />
      </div>
      <span :class="`${carbonPrefix}--assistive-text`">{{
        assistiveText
      }}</span>
    </button>
  </footer>
</template>

<script>
import Close20 from '@carbon/icons-vue/es/close/20';
import ChevronRight20 from '@carbon/icons-vue/es/chevron--right/20';
import { carbonPrefixMixin } from '../../mixins';

export default {
  name: 'CvSideNavFooter',
  components: { ChevronRight20, Close20 },
  mixins: [carbonPrefixMixin],
  inheritAttrs: false,
  props: {
    assistiveText: { type: String, default: 'Open / close side nav' },
    expanded: Boolean,
  },
};
</script>
