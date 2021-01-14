<template>
  <div :class="`checkbox-button checkbox-button--${variant}`">
    <label
      v-if="labelPosition === `left`"
      :for="uid"
      :class="`checkbox-button__label`"
    >
      <span :class="`checkbox-button__appearance`"></span>
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :id="uid"
      ref="input"
      :checked="checked"
      :class="`checkbox-button`"
      type="checkbox"
      :value="value"
    />
    <label
      v-if="labelPosition === `right`"
      :for="uid"
      :class="`checkbox-button__label`"
    >
      <span :class="`checkbox-button__appearance`"></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxButton',
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
