---
permalink: /components/wrapper/
prev: ../
---

# Wrapper

A wrapper element includes the general HTML structure needed to turn raw data into a chart.

## General Anatomy

The full structure of a chart includes a wrapper `<div>` with inner components including the data `<table>` and the legend list.

```html
<div id="my-chart">

  <table class="charts-css bar|column|area|line">
    ...
  </table>

  <ul class="charts-css legend">
    ...
  </ul>

</div>
```

Please note that only the `<table>` element is required. The wrapper elements and the legend are optional fields.

| Type            | Field        | Element         |
|:----------------|:-------------|:----------------|
| Wrapper Element | **Optional** | Any             |
| Chart Legend    | **Optional** | `<ul>` / `<ol>` |
| Chart Data      | **Required** | `<table>`       |

Although a wrapper div is not required, as of version 1.0.0 the new best practice is to add a wrapper element to all charts.

## Customizing the Wrapper

A simple customization will include custom width for the wrapper.

```css
#my-chart {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
```

To customize chart components, use descendant combinators with the component selector.

```css
#my-chart .legend {
  ...
}
#my-chart .bar,
#my-chart .column,
#my-chart .area,
#my-chart .line,
#my-chart .pie {
  ...
}
```

## Responsive Wrapper

Media queries can be used to set different dimensions for different screen sizes.

```css
#my-chart {
  max-width: 600px;
}

@media (min-width: 600px) {
  #my-chart {
    max-width: 800px;
  }
}

@media (min-width: 1000px) {
  #my-chart {
    max-width: 1000px;
  }
}
```

Alternatively, container queries can be used to style based on the size and layout of specific elements on the page. For example, you can position the legend and the chart side-by-side, and under a certain width to position them below each other.

```css
#my-chart {
  container-name: chart;
  container-type: inline-size;
}

#my-chart {
  display: flex;
  flex-direction: row;
}

@container charts (max-width: 600px) {
  #my-chart {
    flex-direction: column;
  }
}
```

## Additional Elements

Add your own elements to the chart and style them accordingly.

```html
<div id="my-chart">

  <table class="charts-css bar|column|area|line">
    ...
  </table>

  <ul class="charts-css legend">
    ...
  </ul>

  <div class="my-chart-element">
    ...
  </div>

  <div class="another-custom-element">
    ...
  </div>

</div>
```

For a concrete example, see how easy it is to add [axes titles](./axes/#axis-title) with custom HTML elements and some CSS magic.
