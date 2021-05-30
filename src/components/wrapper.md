---
permalink: /components/wrapper/
prev: ../
---

# Wrapper

A wrapper includes the general HTML structure and the chart structure in order to turn raw data into a chart.

## General Anatomy

The full structure of a chart includes a wrapper `<div>` with inner components including the data `<table>` and the legend list.

```html
<div id="my-chart">

  <ul class="charts-css legend">
  </ul>

  <table class="charts-css bar|column|area|line">
  </table>

</div>
```

Note that only the `<table>` is required. The wrapper elements and the legend are optional fields.

| Type            | Field        | Element         |
|:----------------|:-------------|:----------------|
| Wrapper Element | **Optional** | Any             |
| Chart Legend    | **Optional** | `<ul>` / `<ol>` |
| Chart Data      | **Required** | `<table>`       |

## Data Table

To turn the data table into a chart, you need to add the `.charts-css` class on the `<table>` element itself:

```html
<table class="charts-css">
  ...
</table>
```

This class will reset, contain, pad and remove all other styles. But it won't transform the data table into a chart, yet.

## Chart Classes

To visualize the data you need to decide which [chart type](/charts/) you want to use and add the chart class after to the main class. For example, to display a column chart we need to add the `.column` class.

```html
<table class="charts-css column">
  ...
</table>
```

To transform it to a bar chart we need to add the `.bar` class.

```html
<table class="charts-css bar">
  ...
</table>
```

Only then you can start adding some inner components like [axes](/components/axes), [tooltips](/components/tooltips) etc.

```html
<table class="charts-css bar show-primary-axis show-4-secondary-axes show-data-axes">
  ...
</table>
```

## Customizing the Chart

A simple customization will include the `height` and `max-width` of the chart. Chart `width` is `100%` by default.

```css
#my-chart .bar {
  height: 300px;
  max-width: 600px;
  margin: 0 auto;
}
```

In addition you can add any CSS, for example you can add your brand logo in the background.

```css
#my-chart .bar {
  background-image: url(path/to/your/logo.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100px 100px;
}
```

## Responsive Wrapper

Media queries can be used to set different dimensions for different screen sizes.

```css
#my-chart .bar {
  height: 300px;
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 600px) {
  #my-chart .bar {
    height: 400px;
    max-width: 800px;
  }
}

@media (min-width: 1000px) {
  #my-chart .bar {
    height: 500px;
    max-width: 1000px;
  }
}
```
