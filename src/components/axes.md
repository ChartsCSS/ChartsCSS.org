---
permalink: /components/axes/
---

# Axes

Chart axes are used to visually categorize and measure the data.

## Axes Types

<!-- ### General Definitions -->

There are 3 types of axes: **Vertical axis**, also known as Y axis. **Horizontal axis**, known as X axis. And **Depth axis**, which is known as Z axis.

Different chart types use different axes systems. For example **Single axis charts** are used by Polar chart. **Dual axes charts** used by Column chart, Bar chart and Line chart. And **Triple axes charts** are used by 3D column chart, 3D pyramid chart and 3D cone chart.

**Chart.css** axes are designed as a separate component. Currently the framework supports only Y & X axis as we don't support triple axes charts (yet).

## Adding Axes

**All axes are hidden by default.** To add axes you need to add the axis CSS class. Each chart type has its own axes system.

You may choose to display no axes, or display only one axis (vertical/horizontal), or both axes. Or style your own custom axes system.

## Bar Chart

### Main Axis

The main axis separate the labels from the chart itself. To display the main axis use the `.show-main-axis` class.

```html
<table class="charts-css bar show-main-axis">
    ...
</table>
```

### Horizontal Axes

Horizontal axes are based on the amount of rows (`<tr>` tags), therefor horizontal axes can be auto-generated using CSS border property. To display horizontal axes use the `.show-x-axes`.

```html
<table class="charts-css bar show-x-axes">
    ...
</table>
```

### Vertical Axes

Vertical axes are based on the data itself (the content of the `<td>` tags), therefor vertical axes cannot be auto generated. To display vertical axes we use linear-gradient. Use the `.show-*-y-axes` to decide how many axes to display.

```html
<table class="charts-css bar show-4-y-axes">
    ...
</table>
```

## Column Chart

### Main Axis

The main axis separate the labels from the chart itself. To display the main axis use the `.show-main-axis` class.

```html
<table class="charts-css column show-main-axis">
    ...
</table>
```

### Vertical Axes

Vertical axes are based on the amount of columns (`<tr>` tags), therefor vertical axes can be auto-generated using CSS border property. To display vertical axes use the `.show-y-axes`.

```html
<table class="charts-css column show-y-axes">
    ...
</table>
```

### Horizontal Axes

Horizontal axes are based on the data itself (the content of the `<td>` tags), therefor horizontal axes cannot be auto generated. To display horizontal axes we use linear-gradient. Use the `.show-*-x-axes` to decide how many axes to display.

```html
<table class="charts-css column show-4-x-axes">
    ...
</table>
```
