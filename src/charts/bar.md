---
permalink: /charts/bar/
prev: ../
---

# Bar <Badge type="tip" vertical="top" text="Beta" />

::: tip Note
Documentation will be available soon.
:::

Bar charts display raw data as horizontal bars.

## Usage

To visualize your data, the main `.charts-css` class should be followed by the `.bar` class.

```html
<table class="charts-css bar">
    ...
</table>
```

## Labels

You can control the labels positions and size.

### Labels Position

The chart displays horizontal bars. By default the labels are displayed before the chart (depending on the document direction, LTR or RTL). To display the labels after the chart, simply add `.labels-after` class.

```html
<table class="charts-css bar labels-after">
    ...
</table>
```

### Labels Size

Some chart use long labels others use short ones. To customize the label size use the `--bar-labels-size` variable.

```html
<table class="charts-css bar labels-after" style="--bar-labels-size: 200px">
    ...
</table>
```

## Order

You can reverse the order of the elements without changing the HTML markup.

### Reverse Data Order

You can change the order of the data with a simple class. To reverse the order use the `.reverse` class.

```html
<table class="charts-css bar reverse">
    ...
</table>
```

### Reverse Datadets Order

You can also change the order of the datasets with a simple class. To reverse datasets order use the `.reverse-datasets` class.

```html
<table class="charts-css bar reverse-datasets">
    ...
</table>
```

## Spacing

By default there is no space between the bars. Currently there are no utility class to control the spacing, but you can change this with simple CSS.

### Row Spacing

To change the spacing between rows add `padding` to the `tr` element.

```css
.charts-css.bar tr {
    padding-block-start: 4px;
    padding-block-end: 4px;
}
```

### Datasets Spacing

When the chart has multiple datasets in a single row, you can add spacing between datasets by add `padding` to the `td` element.

```css
.charts-css.bar td {
    padding-block-start: 2px;
    padding-block-end: 2px;
}
```

## Axes

All axes are hidden by default. To display axes you can use the built-in axes classes.

### Main Axis

The main axis separate the labels from the chart itself. To display the main axis use the `.show-main-axis` class.

```html
<table class="charts-css bar show-main-axis">
    ...
</table>
```

### Horizontal Axes

Horizontal axes are based on the amount of rows (`<tr>` tags), therefor horizontal axes are auto-generated and you can either hide or show them. To display horizontal axes use the `.show-x-axes` class.

```html
<table class="charts-css bar show-x-axes">
    ...
</table>
```

### Vertical Axes

Vertical axes are based on the data itself (the content of the `<td>` tags), therefor vertical axes are not auto generated and you need to decide how man axes to show. To display vertical axes use the `.show-*-y-axes` class.

```html
<table class="charts-css bar show-4-y-axes">
    ...
</table>
```

### Styling Axes

To control the axes style you can change the following CSS variables.

```css
.custom-chart-style {
    --main-axis-color: rgba(0, 0, 0, 1);
    --main-axis-style: solid;
    --main-axis-width: 1px;
    --axis-color: rgba(0, 0, 0, 0.15);
    --axis-style: solid;
    --axis-width: 1px;
}
```
