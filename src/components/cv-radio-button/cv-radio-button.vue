<template>
  <div
    :class="[
      `cv-radio-button ${carbonPrefix}--radio-button-wrapper`,
      { [`${carbonPrefix}--radio-button-wrapper--label-left`]: labelLeft },
    ]"
  >
    <input
      v-bind="$attrs"
      :id="uid"
      ref="input"
      :checked="isChecked"
      :class="`${carbonPrefix}--radio-button`"
      type="radio"
      :value="value"
      v-on="inputListeners"
    />
    <!-- symbol causes problem in codepen? -->
    <label :for="uid" :class="`${carbonPrefix}--radio-button__label`">
      <span :class="`${carbonPrefix}--radio-button__appearance`"></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
import {
  uidMixin,
  radioMixin,
  carbonPrefixMixin,
  methodsMixin,
} from '../../mixins';

export default {
  name: 'CvRadioButton',
  inheritAttrs: false,
  mixins: [
    uidMixin,
    radioMixin,
    carbonPrefixMixin,
    methodsMixin({ input: ['blur', 'focus'] }),
  ],
  props: {
    labelLeft: Boolean,
  },
};
</script>
