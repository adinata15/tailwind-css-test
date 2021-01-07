<template>
  <button
    :id="uid"
    :class="[
      `cv-header-global-action`,
      `${carbonPrefix}--header__action`,
      { [`${carbonPrefix}--header__action--active`]: dataActive },
    ]"
    type="button"
    aria-haspopup="true"
    :aria-controls="ariaControls"
    :aria-expanded="active ? 'true' : 'false'"
    v-on="$listeners"
    @click="gaToggle"
    @focusout="gaFocusout"
  >
    <slot />
  </button>
</template>

<script>
import { uidMixin, carbonPrefixMixin } from '../../mixins';

export default {
  name: 'CvHeaderGlobalAction',
  mixins: [uidMixin, carbonPrefixMixin],
  props: {
    active: Boolean,
    ariaControls: String,
  },
  data() {
    return {
      dataActive: this.active,
    };
  },
  computed: {
    panelExpanded: {
      get() {
        return this.dataActive;
      },
      set(val) {
        // do not emit 'cv:panel-control-toggle'
        this.dataActive = val;
      },
    },
  },
  watch: {
    expanded() {
      if (this.active !== this.dataActive) {
        this.gaToggle();
      }
    },
  },
  mounted() {
    this.$parent.$emit('cv:panel-control-mounted', this);
  },
  beforeDestroy() {
    this.$parent.$emit('cv:panel-control-beforeDestroy', this);
  },
  methods: {
    gaToggle() {
      this.$el.focus();
      this.$parent.$emit('cv:panel-control-toggle', this);
    },
    gaFocusout(ev) {
      this.$parent.$emit('cv:panel-control-focusout', this, ev);
    },
  },
};
</script>
