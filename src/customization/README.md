---
prev: ../charts/mixed
next: ./3d-effects
---

# Customization

One of the key features in **Charts.css** is the ability to **_customize visibility using basic CSS_**. Frontend developers can target any HTML element and customize it. This philosophical guideline is what makes the framework so flexible and easy to use.

## Custom Styling 

To add custom CSS simply add an `id` attribute to the `<table>` tag:

```html
<table id="my-chart" class="charts-css bar|column|area|line ...">
  ...
</table>
```
```css
#my-chart {
  ...
}
```

Or add an `id` attribute to a [wrapper element](/components/wrapper/):

```html
<div id="my-chart">

  <table class="charts-css bar|column|area|line multiple ...">
  </table>

  <ul class="charts-css legend">
  </ul>

</div>
```
```css
#my-chart > table {
  ...
}
```

### Best Practice

We recommend adding the chart type to your selector. This way the custom style will apply only to that specific chart type and not all the types.

```css
/* Customize only bar charts */
#my-chart.bar {
  ...
}

/* Customize only pie charts */
#my-chart.pie {
  ...
}
```

This is important because each chart type has its own structure and layout. You don't want unexpected side-effects when switching between charts types.

## Basic Examples

There are many ways to customize the framework. We prepared some basic examples to get you started, covering three topics.

* [3D Effects](/customization/3d-effects/)
* [Motion Effects](/customization/motion-effects/)
* [Animations](/customization/animations/)

have a beautiful design? Create a codepen and share with the community!
