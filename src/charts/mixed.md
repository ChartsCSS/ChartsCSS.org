---
permalink: /charts/mixed/
next: ../../customization/
---

# Mixed

Mixed charts display a combination of two or more different chart types on top of one another.

## Usage

To display mixed charts, create multiple `<table>` elements for each chart.

```html{3,5,7}
<div id="my-chart">

  <table class="charts-css"> ... </table>

  <table class="charts-css"> ... </table>

  <table class="charts-css"> ... </table>

</div>
```

The next step is to place them on top of each other using CSS. There are several ways to do this, below are two methods.

## Stock Chart

Stock charts are very popular in the financial sector. To create a stock chart we will use a mix of charts - an [area chart](./area/) to display the stock price, a [column chart](./column/) to display the trade volume and a [line chart](./line/) to show some kind of trend line.

### Using CSS Position

The first method to placing them on top of each other is using CSS position:

```html
<div id="my-stock-chart">

  <table class="charts-css area"> ... </table>

  <table class="charts-css line"> ... </table>

  <table class="charts-css column"> ... </table>

</div>
```

```css
#my-stock-chart {
  position: relative;
  height: 250px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f6f6ff;
}
#my-stock-chart .area,
#my-stock-chart .line,
#my-stock-chart .column {
  position: absolute;
  inset: 0;
}
#my-stock-chart .column {
  --aspect-ratio: 12 / 1;
}
#my-stock-chart .column tbody {
  margin-block-start: auto;
}
```

<code-example code-example-id="stock-chart-example-1">
<template v-slot:css-code>
#stock-chart-example-1 {
  position: relative;
  height: 250px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f6f6ff;
}
#stock-chart-example-1 .area,
#stock-chart-example-1 .line,
#stock-chart-example-1 .column {
  position: absolute;
  inset: 0;
}
#stock-chart-example-1 .column {
  --aspect-ratio: 12 / 1;
}
#stock-chart-example-1 .column tbody {
  margin-block-start: auto;
}
#stock-chart-example-1 .area {
  --color: linear-gradient(#f30, #fff);
}
#stock-chart-example-1 .line {
  --color: #fc1;
}
#stock-chart-example-1 .column tr:nth-child(even) {
  --color: #e88;
}
#stock-chart-example-1 .column tr:nth-child(odd) {
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

### Using CSS Grid

The same result can be achieved with CSS grid. The folowing example also includes [axis titles](../components/axes/#axis-title).

```html
<div id="my-stock-chart">

  <table class="charts-css area"> ... </table>

  <table class="charts-css line"> ... </table>

  <table class="charts-css column"> ... </table>

  <div class="primary-axis"> Primary Axis Title </div>

  <div class="data-1-axis"> Data-1 Axis Title </div>

  <div class="data-2-axis"> Data-2 Axis Title </div>

</div>
```

```css
#my-chart {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 250px 50px;
  grid-template-areas: 
    "data-1-axis  stocks       data-2-axis"
    "data-1-axis  volume       data-2-axis"
    "primary-axis primary-axis primary-axis";
}
#my-chart > table.area,
#my-chart > table.line {
  grid-area: stocks;
}
#my-chart > table.column {
  --aspect-ratio: 12 / 1;
  grid-area: volume;
}
#my-chart > table.column tbody {
  margin-block-start: auto;
}
#my-chart > .primary-axis {
  grid-area: primary-axis;
}
#my-chart > .data-1-axis {
  grid-area: data-1-axis;
  writing-mode: tb-rl;
  transform: rotateZ(180deg);
}
#my-chart > .data-2-axis {
  grid-area: data-2-axis;
  writing-mode: tb-rl;
}
```

<code-example code-example-id="stock-chart-example-2">
<template v-slot:css-code>
#stock-chart-example-2 {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 200px 50px 50px;
  grid-template-areas: 
    "data-1-axis  stocks       data-2-axis"
    "data-1-axis  volume       data-2-axis"
    "primary-axis primary-axis primary-axis";
  background-color: #f6f6ff;
  width: 650px;
}
#stock-chart-example-2 > table.area,
#stock-chart-example-2 > table.line {
  grid-area: stocks;
}
#stock-chart-example-2 > table.column {
  --aspect-ratio: 12 / 1;
  grid-area: volume;
}
#stock-chart-example-2 > table.column tbody {
  margin-block-start: auto;
}
#stock-chart-example-2 > .primary-axis {
  grid-area: primary-axis;
}
#stock-chart-example-2 > .data-1-axis {
  grid-area: data-1-axis;
  writing-mode: tb-rl;
  transform: rotateZ(180deg);
}
#stock-chart-example-2 > .data-2-axis {
  grid-area: data-2-axis;
  writing-mode: tb-rl;
}
/* Colors */
#stock-chart-example-2 > table.area {
  --color: linear-gradient(#99e, rgba(0, 0, 0, 0));
}
#stock-chart-example-2 > table.line {
  --color: #fc1;
}
#stock-chart-example-2 > table.column tr:nth-child(even) {
  --color: #e88;
}
#stock-chart-example-2 > table.column tr:nth-child(odd) {
  --color: #8c8;
}
</template>
<template v-slot:html-code>
<div id="stock-chart-example-2">

  <table class="charts-css area">
    <caption> Stock Price </caption>
    <tbody>
      <tr><td style="--start: 0.3; --size: 0.4"></td></tr>
      <tr><td style="--start: 0.4; --size: 0.8"></td></tr>
      <tr><td style="--start: 0.8; --size: 0.6"></td></tr>
      <tr><td style="--start: 0.6; --size: 1.0"></td></tr>
      <tr><td style="--start: 1.0; --size: 0.3"></td></tr>
      <tr><td style="--start: 0.3; --size: 0.8"></td></tr>
      <tr><td style="--start: 0.8; --size: 0.6"></td></tr>
      <tr><td style="--start: 0.6; --size: 1.0"></td></tr>
      <tr><td style="--start: 1.0; --size: 0.3"></td></tr>
      <tr><td style="--start: 0.3; --size: 0.8"></td></tr>
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
  <div class="primary-axis"> Primary Axis Title </div>
  <div class="data-1-axis"> Stock Price </div>
  <div class="data-2-axis"> Moving Average </div>
</div>
</template>
</code-example>
