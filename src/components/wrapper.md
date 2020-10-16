---
permalink: /components/wrapper/
prev: ../
---

# Wrapper

A wrapper class is the most basic class you need to apply before turning raw data into a chart.

## Main Class

You need to add the `.charts-css` class on the `<table>` element itself:

```html
<table class="charts-css">
  ...
</table>
```

This main class will reset, contain, pad and remove all other styles. But it won't transform the data table into chart, yet.

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

Only then you can start adding some inner components like [axes](/charts/axes), [tooltips](/charts/tooltip) etc.

```html
<table class="charts-css bar show-primary-axis show-4-secondary-axes show-data-axes">
  ...
</table>
```

## Customizing the Wrapper

The wrapper element can be customized using CSS, here is a basic example:

```css
#my-chart.charts-css {
  background-color: #eee;
  background-image: url(path/to/your/logo.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100px 100px;
}
```
