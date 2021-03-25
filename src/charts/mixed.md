---
permalink: /charts/mixed/
next: ../../customization/
---

# Mixed

Mixed charts display a combination of two or more different chart types on top of each other.

## Usage

To display mixed charts we need to create multiple `<table>` elements for each chart.

```html{3,5,7}
<div id="my-chart">

  <table class="charts-css"> ... </table>

  <table class="charts-css"> ... </table>

  <table class="charts-css"> ... </table>

</div>
```

The next step is to place them on top of each other using CSS. There are several ways to do that we will show two methods.

## Stock Chart

Stock charts are very popular in the financial sector. To create a stock chart we will use a mix of charts - an [area chart](./area/) to display the stock price, a [column chart](./column/) to display the trade volume and a [line chart](./line/) to show some kind of trend line.

### Using CSS Position

The first method to place them on top of each other using CSS position:

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
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #eee;
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

### Using CSS Grid

The same result can be achieved with CSS grid. And also include [axis titles](../components/axes/#axis-title).

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
  grid-area: volume;
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
  background-color: #eee;
  width: 650px;
}
#stock-chart-example-2 > table.area,
#stock-chart-example-2 > table.line {
  grid-area: stocks;
}
#stock-chart-example-2 > table.column {
  grid-area: volume;
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
  --color: linear-gradient(#666, rgba(255, 255, 255, 0));
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
