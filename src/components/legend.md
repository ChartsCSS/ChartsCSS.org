---
permalink: /components/legend/
next: ../../charts/
---

# Legend

Chart legend displays the labels of the datasets appear on a chart. The chart visualize the raw data, the legend visualize the datasets.

## Legend Structure

The legend is a separate component with a separate HTML tag. You have the freedom to position the legend wherever you want. Just like any other HTML tag. 

Note: Currently legend required to use `<ul>` or `<ol>` tags. In the next versions you will have the freedom to use any HTML tag.

## Legend Position

So if you choose to display the chart legend. You can position it wherever you want. Just use with flexbox `flex-direction: columns;` or with grid `grid-template-columns: 100px 1fr;`, or any other layout.

```html
<div class="my-chart-container">

  <ul class="charts-css legend">
  </ul>

  <table class="charts-css bar">
  </table>

</div>
```

## Legend Class

Use the `.legend` class to style your chart legend.

```html
<ul class="charts-css legend">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<legend-example orientation="row">
<ul class="charts-css legend">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

## Legend Orientation

By default legend dataset labels vertically are aligned vertically. Usually used to position the legend beside the chart.

To aligning legend dataset labels horizontally, use the `.legend-inline` class. Usually used to position the legend above or below the chart.

```html
<ul class="charts-css legend legend-inline">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<legend-example orientation="column">
<ul class="charts-css legend legend-inline">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

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

<legend-example orientation="row">
<ul class="charts-css legend legend-circle">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

### Ellipse

Use the `.legend-ellipse` class to display a circular shape label.

```html
<ul class="charts-css legend legend-ellipse">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<legend-example orientation="row">
<ul class="charts-css legend legend-ellipse">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

### Square

Use the `.legend-square` class to display a square shape label.

```html
<ul class="charts-css legend legend-square">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<legend-example orientation="row">
<ul class="charts-css legend legend-square">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

### Rectangle

Use the `.legend-rectangle` class to display a rectangular shape label.

```html
<ul class="charts-css legend legend-rectangle">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<legend-example orientation="row">
<ul class="charts-css legend legend-rectangle">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

### Rhombus

Use the `.legend-rhombus` class to display a circular shape label.

```html
<ul class="charts-css legend legend-rhombus">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<legend-example orientation="row">
<ul class="charts-css legend legend-rhombus">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

### Line

Use the `.legend-line` class to display a line shape label.

```html
<ul class="charts-css legend legend-line">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<legend-example orientation="row">
<ul class="charts-css legend legend-line">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

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

<legend-example orientation="row">
<style>
#custom-legend-1 {
  color: #ccc;
  background-color: #333;
  box-shadow: 0 0 15px #000;
}
</style>
<ul class="charts-css legend legend-square" id="custom-legend-1">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>

To target an individual legend element, we can do something like:

```css
.legend > li:nth-of-type(2) {
  color: red;
}
```

<legend-example orientation="row">
<style>
#custom-legend-2 {
  color: #ccc;
  background-color: #333;
  box-shadow: 0 0 15px #000;
}
#custom-legend-2 > li:nth-of-type(2) {
  color: red;
}
</style>
<ul class="charts-css legend legend-square" id="custom-legend-2">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
</legend-example>