<template>
  <div :class="`radio-button radio-button--${variant}`">
    <label
      v-if="labelPosition === `left`"
      :for="uid"
      :class="`radio-button__label`"
    >
      <span :class="`radio-button__appearance`"></span>
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :id="uid"
      ref="input"
      :checked="checked"
      :class="`radio-button`"
      type="radio"
      :value="value"
    />
    <label
      v-if="labelPosition === `right`"
      :for="uid"
      :class="`radio-button__label`"
    >
      <span :class="`radio-button__appearance`"></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  inheritAttrs: false,
  model: {
    event: 'change',
  },
  props: {
    variant: { type: String, default: 'primary' },
    labelPosition: { type: String, default: 'right' },
    checked: { type: Boolean, default: null },
    label: { type: String, default: null },
    value: { type: String, default: null },
  },
};
</script>
