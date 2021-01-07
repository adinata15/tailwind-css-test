<template>
  <ul
    data-progress
    data-progress-current
    :class="[
      `cv-progress ${carbonPrefix}--progress`,
      { [`${carbonPrefix}--progress--vertical`]: vertical },
    ]"
  >
    <slot>
      <cv-progress-step
        v-for="(step, index) in steps"
        :key="`step:${index}`"
        ref="steps"
        :label="step"
        :complete="initialStep > index"
      />
    </slot>
  </ul>
</template>

<script>
import CvProgressStep from './cv-progress-step';
import { carbonPrefixMixin } from '../../mixins';

export default {
  name: 'CvProgress',
  components: {
    CvProgressStep,
  },
  mixins: [carbonPrefixMixin],
  props: {
    initialStep: { type: Number, default: 0 },
    steps: Array,
    vertical: Boolean,
  },
  computed: {
    state() {
      return () => {
        console.warn('CvProgress: method deprecated');
        return;
      };
    },
  },
  created() {
    // add these on created otherwise cv:mounted is too late.
    this.$on('cv:completed', (srcComponent) =>
      this.onCvCompleted(srcComponent)
    );
    this.$on('cv:mounted', (srcComponent) => this.onCvMount(srcComponent));
    this.$on('cv:beforeDestroy', (srcComponent) =>
      this.onCvBeforeDestroy(srcComponent)
    );
  },
  methods: {
    onCvMount() {
      this.processState();
    },
    onCvBeforeDestroy() {
      this.processState();
    },
    onCvCompleted() {
      this.processState();
    },
    processState() {
      const steps = this.$children.filter((child) => child.$_CvProgressStep);
      let newStep = -1;
      for (let i = 0; i < steps.length; i++) {
        if (!steps[i].complete && newStep < 0) {
          newStep = i;
          steps[i].internalState = 0;
        } else {
          steps[i].internalState = newStep < 0 ? 1 : -1;
        }
      }
    },
    getCurrent() {
      console.warn('CvProgress: method deprecated');
    },
    getSteps() {
      console.warn('CvProgress: method deprecated');
    },
    setCurrent() {
      console.warn('CvProgress: method deprecated');
    },
  },
};
</script>
