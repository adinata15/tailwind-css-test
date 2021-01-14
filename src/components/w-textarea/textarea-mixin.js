export default {
  props: {
    orientation: { type: String, default: 'vertical' },
    placeholder: { type: String, default: '' },
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    iconPath: {
      type: String,
      default: null,
    },
  },
};
