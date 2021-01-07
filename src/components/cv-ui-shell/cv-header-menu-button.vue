<template>
  <button
    :id="uid"
    class="cv-header-menu-button"
    :class="[
      `${carbonPrefix}--header__action`,
      `${carbonPrefix}--header__menu-trigger`,
      `${carbonPrefix}--header__menu-toggle`,
      {
        [`${carbonPrefix}--header__action--active`]: dataActive,
        [`${carbonPrefix}--header__menu-toggle__hidden`]: !hasRail,
      },
    ]"
    type="button"
    aria-haspopup="true"
    :aria-controls="ariaControls"
    :aria-expanded="active ? 'true' : 'false'"
    v-on="$listeners"
    @click="gaToggle"
    @focusout="gaFocusout"
  >
    <Close20 v-if="dataActive" />
    <Menu20 v-if="!dataActive" />
  </button>
</template>

<script>
import { uidMixin, carbonPrefixMixin } from '../../mixins';
import Close20 from '@carbon/icons-vue/es/close/20';
import Menu20 from '@carbon/icons-vue/es/menu/20';

export default {
  name: 'CvHeaderMenuButton',
  components: { Close20, Menu20 },
  mixins: [uidMixin, carbonPrefixMixin],
  props: {
    active: Boolean,
    ariaControls: { type: String, required: true },
  },
  data() {
    return {
      dataActive: this.active,
      hasRail: false,
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
    active() {
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
