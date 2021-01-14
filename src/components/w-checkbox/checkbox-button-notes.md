# Checkbox-button

## Checkbox-group

### Usage

```html
<checkbox-group @change="actionChange">
  <checkbox-button
    variant="primary"
    label="checkbox-1"
    value="value-1"
    checked
  />
  <checkbox-button variant="primary" label="checkbox-2" value="value-2" />
  <checkbox-button
    variant="primary"
    label="checkbox-3"
    value="value-3"
    disabled
  />
</checkbox-group>
```

### Attributes

- orientation: 'horizontal' (default), 'vertical'.

## Checkbox-button

### Usage

```html
<checkbox-group @change="actionChange">
  <checkbox-button
    name="group1"
    variant="primary"
    label="checkbox-1"
    value="value-1"
    checked
  />
  <checkbox-button
    name="group1"
    variant="primary"
    label="checkbox-2"
    value="value-2"
  />
  <checkbox-button
    name="group1"
    variant="primary"
    label="checkbox-3"
    value="value-3"
    disabled
  />
</checkbox-group>
```

### Attributes

- variant: 'primary' (default), 'secondary'.
- labelPosition: 'right' (default), 'left'.
- checked: 'false' (default), 'true'.
- disabled: 'false' (default), 'true'.
- label: displayed label.
- value: intrinsic checkbox button values.

```html
<checkbox-group orientation="vertical" @change="actionChange">
  <checkbox-button
    name="group1"
    variant="primary"
    label="checkbox-1"
    value="value-1"
  />
  <checkbox-button
    name="group1"
    variant="primary"
    label="checkbox-2"
    value="value-2"
  />
  <checkbox-button
    name="group1"
    variant="primary"
    label="checkbox-3"
    value="value-3"
    disabled
  />
</checkbox-group>
```
