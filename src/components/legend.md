---
permalink: /components/legend/
---

# Legend

Chart legend displays the labels of the data sets appear on a chart. The chart visualize the raw data, the legend visualize the data sets.

## Legend Structure

The legend is a separate component with a separate HTML tag. You have the freedom to position the legend wherever you want. Just like any other HTML tag. 

Note: Currently legend required to use `<ul>` or `<ol>` tags. In the next versions you will have the freedom to use any HTML tag.

## Legend Class

Use the `.legend` class to style your chart legend.

```html
<ul class="charts-css legend">
    <li> Label 1 </li>
    <li> Label 2 </li>
    <li> Label 3 </li>
</ul>
```

## Legend Orientation

### Vertical Legend

Use the `.legend-block` class to aligning your chart legend dataset labels vertically.

```html
<ul class="charts-css legend legend-block">
    <li> Label 1 </li>
    <li> Label 2 </li>
    <li> Label 3 </li>
</ul>
```

Usually used to position the legend above or below the chart.

### Horizontal Legend

Use the `.legend-inline` class to aligning your chart legend dataset labels horizontally.

```html
<ul class="charts-css legend legend-inline">
    <li> Label 1 </li>
    <li> Label 2 </li>
    <li> Label 3 </li>
</ul>
```

Usually used to position the legend beside the chart.

## Legend Shape

### Circle

Use the `.legend-circle` class to display a circular shape label.

```html
<ul class="charts-css legend legend-circle">
    <li> Label 1 </li>
    <li> Label 2 </li>
    <li> Label 3 </li>
</ul>
```

### Square

Use the `.legend-square` class to display a square shape label.

```html
<ul class="charts-css legend legend-square">
    <li> Label 1 </li>
    <li> Label 2 </li>
    <li> Label 3 </li>
</ul>
```

### Rectangle

Use the `.legend-rectangle` class to display a rectangular shape label.

```html
<ul class="charts-css legend legend-rectangle">
    <li> Label 1 </li>
    <li> Label 2 </li>
    <li> Label 3 </li>
</ul>
```

### Line

Use the `.legend-line` class to display a line shape label.

```html
<ul class="charts-css legend legend-line">
    <li> Label 1 </li>
    <li> Label 2 </li>
    <li> Label 3 </li>
</ul>
```

## Custom Styles

You can change every aspect of the legend element using CSS. Simply target the CSS selector and apply your own style.

For example, lets change the text color, the background color and add a box-shadow:

```css
.legend {
    color: #ccc;
    background-color: #333;
    box-shadow: 0 0 15px #000;
}
```

To target an individual legend element, we can do something like:

```css
.legend > li:nth-of-type(2) {
    color: red;
}
```
