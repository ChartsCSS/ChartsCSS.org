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

## Stock Chart

Stock charts are very popular in the financial sector. To create a stock chart we will use a mix of charts - an [area chart](./area/) to display the stock price, a [column chart](./column/) to display the trade volume and a [line chart](./line/) to show a some kind of trend line.

```html{3,6,9}
<div id="my-stock-chart">

  <table class="charts-css area">
  </table>

  <table class="charts-css line">
  </table>

  <table class="charts-css column data-spacing-2">
  </table>

</div>
```

```css
#my-stock-chart {
  position: relative;
  height: 250px;
  max-width: 600px;
  margin: 0 auto;
}
#my-stock-chart > table {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#my-stock-chart > table.column {
  top: unset;
  height: 35px;
}
```

<code-example code-example-id="stock-chart-example-1">
<template v-slot:css-code>
#stock-chart-example-1 {
  position: relative;
  height: 250px;
  max-width: 600px;
  margin: 0 auto;
}
#stock-chart-example-1 > table {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#stock-chart-example-1 > table.column {
  top: unset;
  height: 35px;
}
/* Colors */
#stock-chart-example-1 > table.area {
  --color: linear-gradient(#000, #fff);
}
#stock-chart-example-1 > table.line {
  --color: #fc1;
}
#stock-chart-example-1 > table.column tr:nth-child(even) {
  --color: #e88;
}
#stock-chart-example-1 > table.column tr:nth-child(odd) {
  --color: #8c8;
}
</template>
<template v-slot:html-code>
<div id="stock-chart-example-1">

  <table class="charts-css area">
    <caption> Stock price </caption>
    <tbody>
      <tr><td style="--start: 0.2; --size: 0.4"></td></tr>
      <tr><td style="--start: 0.4; --size: 0.8"></td></tr>
      <tr><td style="--start: 0.8; --size: 0.6"></td></tr>
      <tr><td style="--start: 0.6; --size: 1.0"></td></tr>
      <tr><td style="--start: 1.0; --size: 0.3"></td></tr>
    </tbody>
  </table>

  <table class="charts-css line">
    <caption> Trend Line </caption>
    <tbody>
      <tr><td style="--start: 0.4; --size: 0.5"></td></tr>
      <tr><td style="--start: 0.5; --size: 0.3"></td></tr>
      <tr><td style="--start: 0.3; --size: 0.4"></td></tr>
      <tr><td style="--start: 0.4; --size: 0.7"></td></tr>
    </tbody>
  </table>

  <table class="charts-css column data-spacing-2">
    <caption> Stock trade volume </caption>
    <tbody>
      <tr><td style="--size: 0.6;"></td></tr>
      <tr><td style="--size: 0.9;"></td></tr>
      <tr><td style="--size: 1.0;"></td></tr>
      <tr><td style="--size: 0.4;"></td></tr>
      <tr><td style="--size: 0.3;"></td></tr>
      <tr><td style="--size: 0.6;"></td></tr>
      <tr><td style="--size: 0.9;"></td></tr>
      <tr><td style="--size: 1.0;"></td></tr>
      <tr><td style="--size: 0.4;"></td></tr>
      <tr><td style="--size: 0.3;"></td></tr>
      <tr><td style="--size: 0.6;"></td></tr>
      <tr><td style="--size: 0.9;"></td></tr>
      <tr><td style="--size: 1.0;"></td></tr>
      <tr><td style="--size: 0.4;"></td></tr>
      <tr><td style="--size: 0.3;"></td></tr>
      <tr><td style="--size: 0.6;"></td></tr>
      <tr><td style="--size: 0.9;"></td></tr>
      <tr><td style="--size: 1.0;"></td></tr>
      <tr><td style="--size: 0.4;"></td></tr>
      <tr><td style="--size: 0.3;"></td></tr>
      <tr><td style="--size: 0.6;"></td></tr>
      <tr><td style="--size: 0.9;"></td></tr>
      <tr><td style="--size: 1.0;"></td></tr>
      <tr><td style="--size: 0.4;"></td></tr>
      <tr><td style="--size: 0.3;"></td></tr>
    </tbody>
  </table>

</div>
</template>
</code-example>
