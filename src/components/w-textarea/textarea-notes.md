# Text area

## Usage

```html
<text-area
  size="lg"
  orientation="horizontal"
  placeholder="type here"
  icon-path="iconPath"
  @change="actionChange"
/>
```

## Attributes

- variant: 'primary' (default), 'secondary', ghost, or 'danger'. Optional.
- size: 'sm' (small), 'md' (medium - default), 'lg' (large), 'xl' (extra large).
- orientation: 'vertical' (default), 'horizontal'.
- placeholder: placeholder for the input area. Optional.
- iconPath: It takes an Vue Component. It needs to be an SVG path (the string after `d=`). Optional.
  Example:
  <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>

> SVG library: http://svgicons.sparkk.fr/