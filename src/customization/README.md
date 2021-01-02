---
prev: ../charts/mixed
next: ./3d-effects
---

# Customization

One of the key features in **Charts.CSS** is the ability to customize the visibility using basic CSS. Frontend developers can target any HTML element and customize it. This philosophical guideline is what makes the framework so flexible and easy to use.

## Custom Styling 

To add your custom CSS simply add either an `id` or a `class` to your `<table>` tag.

```html
<table class="charts-css ..." id="my-chart">
  ...
</table>
```
```css
#my-chart {
  ...
}
```

Recommended best practice is to add the chart type to the selector. This way the style will apply only on that chart type and not the other types. Why? because each chart type has its own structure and layout. You don't want un-expected side-effects when switching between charts.

```css
/* Custom style applies only on bar charts */
#my-chart.bar {
  ...
}

/* Other style applies only on pie charts */
#my-chart.pie {
  ...
}
```

## Basic Examples

There are many ways you can customize the framework. We prepared some basic examples to get you started, separated into 3 topics.

* [3D Effects](/customization/3d-effects/)
* [Motion Effects](/customization/motion-effects/)
* [Animations](/customization/animations/)

You have a new beautiful design? Create a codepen and share with the community!
