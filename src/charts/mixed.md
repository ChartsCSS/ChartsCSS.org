---
permalink: /charts/mixed/
next: ../../customization/
---

# Mixed

Mixed charts display a combination of two or more different chart types on top of each other.

## Usage

To display mixed charts we need to create multiple `<table>` elements for each chart.

```html
<div id="my-chart">

  <table class="charts-css bar|column|area|line">
  </table>

  <table class="charts-css bar|column|area|line">
  </table>

  <table class="charts-css bar|column|area|line">
  </table>

</div>
```

The next step is to place them on top of each other using CSS:

```css
#my-chart {
  position: relative;
}
#my-chart > table {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```
