<template>
  <button
    class="cv-button"
    :class="buttonClassOpts()"
    role="button"
    v-on="inputListeners"
  >
    <slot></slot>

    <CvSvg
      v-if="icon || iconHref"
      :svg="icon || iconHref"
      :class="`${carbonPrefix}--btn__icon`"
    />
  </button>
</template>

<script>
import buttonMixin from './button-mixin';
import { carbonPrefixMixin } from '../../mixins';
import CvSvg from '../cv-svg/_cv-svg';

export default {
  name: 'CvButton',
  components: { CvSvg },
  mixins: [buttonMixin, carbonPrefixMixin],
};
</script>
