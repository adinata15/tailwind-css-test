# Radio-button

## Radio-group

### Usage

```html
<radio-group @change="actionChange">
  <radio-button variant="primary" label="radio-1" value="value-1" checked />
  <radio-button variant="primary" label="radio-2" value="value-2" />
  <radio-button variant="primary" label="radio-3" value="value-3" disabled />
</radio-group>
```

### Attributes

- orientation: 'horizontal' (default), 'vertical'.

## Radio-button

### Usage

```html
<radio-group @change="actionChange">
  <radio-button
    name="group1"
    variant="primary"
    label="radio-1"
    value="value-1"
    checked
  />
  <radio-button
    name="group1"
    variant="primary"
    label="radio-2"
    value="value-2"
  />
  <radio-button
    name="group1"
    variant="primary"
    label="radio-3"
    value="value-3"
    disabled
  />
</radio-group>
```

### Attributes

- variant: 'primary' (default), 'secondary'.
- labelPosition: 'right' (default), 'left'.
- checked: 'false' (default), 'true'.
- disabled: 'false' (default), 'true'.
- label: displayed label.
- value: intrinsic radio button values.

```html
<radio-group orientation="vertical" @change="actionChange">
  <radio-button
    name="group1"
    variant="primary"
    label="radio-1"
    value="value-1"
  />
  <radio-button
    name="group1"
    variant="primary"
    label="radio-2"
    value="value-2"
  />
  <radio-button
    name="group1"
    variant="primary"
    label="radio-3"
    value="value-3"
    disabled
  />
</radio-group>
```
