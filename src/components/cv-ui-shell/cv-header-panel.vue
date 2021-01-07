<template>
  <div
    :id="id"
    :class="[
      `cv-header-panel`,
      `${carbonPrefix}--header-panel`,
      { [`${carbonPrefix}--header-panel--expanded`]: panelExpanded },
    ]"
    :aria-hidden="!panelExpanded ? 'true' : 'false'"
    @focusout="onFocusout"
    @mousedown="onMouseDown"
  >
    <slot></slot>
  </div>
</template>

<script>
import { carbonPrefixMixin } from '../../mixins';
export default {
  name: 'CvHeaderPanel',
  mixins: [carbonPrefixMixin],
  model: {
    event: 'modelEvent',
    prop: 'expanded',
  },
  props: {
    expanded: Boolean,
    id: { type: String, required: true },
  },
  data() {
    return {
      dataExpanded: this.expanded,
    };
  },
  computed: {
    panelExpanded: {
      get() {
        return this.dataExpanded;
      },
      set(val) {
        if (this.dataExpanded !== val) {
          this.dataExpanded = val;
          this.$emit('modelEvent', val);
          this.$emit('panel-resize', this);
        }
      },
    },
  },
  watch: {
    expanded() {
      this.panelExpanded = this.expanded;
    },
  },
  mounted() {
    this.$parent.$emit('cv:panel-mounted', this);
  },
  beforeDestroy() {
    this.$parent.$emit('cv:panel-beforeDestroy', this);
  },
  methods: {
    onFocusout(ev) {
      this.$parent.$emit('cv:panel-focusout', this, ev);
    },
    onMouseDown(ev) {
      if (this.$el == ev.target || this.$el.contains(ev.target)) {
        // ignore mousedown on panel can cause focus event
        ev.preventDefault();
      }
    },
  },
};
</script>
