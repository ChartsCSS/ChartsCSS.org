---
permalink: /charts/pie/
---

# Pie

Pie charts display raw data as radial slices in a circle.

## Usage

To visualize your data with a pie chart, the main `.charts-css` class should be followed by the `.pie` class.

```html
<table class="charts-css pie">
  ...
</table>
```

## Wrapper

It's recommended to wrap the chart with a wrapper element. This element is used not only to hold the chart components, but also for scoping the styles.

```html
<div id="my-chart">

  <table class="charts-css pie">
    ...
  </table>

  <ul class="charts-css legend">
    ...
  </ul>

</div>
```

To set the chart dimensions, add some CSS:

```css
#my-chart {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#my-chart .pie {
  ...
}
#my-chart .legend {
  ...
}
```

## Heading

Add a [heading](../components/heading/) to your chart using the `<caption>` tag. By default, the heading is hidden. To display the heading use the `.show-heading` class.

```html
<div id="my-chart">

  <table class="charts-css pie show-heading">
    <caption> Descriptive Pie Chart Heading </caption>
    ...
  </table>

</div>
```

## Data

To transform HTML tables into charts, you need to provide [data](../components/data/). The chart requires unit-less numbers, between `0` to `1`.

```html{2}
<tr>
  <td> $ 40K </td>
</tr>
```

Use the `--start` and `--end` variables to set the data. While `--end` is equivalent to `--size` in other chart types, `--start` indicates the starting point.

```html{2}
<tr>
  <td style="--start: 0.2; --end: 0.4;"> $ 40K </td>
</tr>
```

To help the framwork identify the text, wrap the content with a `<span class="data">` tag.

```html{2}
<tr>
  <td style="--start: 0.2; --end: 0.4;"> <span class="data"> $ 40K </span> </td>
</tr>
```

<code-example code-example-id="pie-example-1">
<template v-slot:css-code>
#pie-example-1 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="pie-example-1">
  <table class="charts-css pie hide-data">
    <caption> Pie Example #1 </caption>
    <tbody>
      <tr>
        <td style="--start: 0.0; --end: 0.10"> <span class="data"> $ 10K </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.10; --end: 0.15"> <span class="data"> $ 5K </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.15; --end: 0.30"> <span class="data"> $ 15K </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.30; --end: 0.85"> <span class="data"> $ 55K </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.85; --end: 1.0"> <span class="data"> $ 15K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Axes

Control the [axes](../components/axes/) displayed on the chart.

### Primary Axis

To add a primary axis, separating the labels from the data, use the `.show-primary-axis` class.

```html
<table class="charts-css pie show-primary-axis">
  ...
</table>
```

<v-row>

<code-example code-example-id="pie-example-2">
<template v-slot:css-code>
#pie-example-2 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="pie-example-2">
  <table class="charts-css pie hide-data">
    <caption> Pie Example #2 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.0; --end: 0.10"> <span class="data"> $ 10K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.10; --end: 0.15"> <span class="data"> $ 5K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.15; --end: 0.30"> <span class="data"> $ 15K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.30; --end: 0.85"> <span class="data"> $ 55K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 0.85; --end: 1.0"> <span class="data"> $ 15K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="pie-example-3">
<template v-slot:css-code>
#pie-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="pie-example-3">
  <table class="charts-css pie hide-data show-primary-axis">
    <caption> Pie Example #3 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.0; --end: 0.10"> <span class="data"> $ 10K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.10; --end: 0.15"> <span class="data"> $ 5K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.15; --end: 0.30"> <span class="data"> $ 15K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.30; --end: 0.85"> <span class="data"> $ 55K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 0.85; --end: 1.0"> <span class="data"> $ 15K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Secondary Axes

To add secondary axes, located behind the chart data, use the `.show-*-secondary-axes` class. Use the `.show-*-secondary-axes` class. Replace the `*` in the class name, with any number `1`-`10`. For example, to display four axes use the `.show-4-secondary-axes` class.

```html
<table class="charts-css pie show-4-secondary-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="pie-example-4">
<template v-slot:css-code>
#pie-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="pie-example-4">
  <table class="charts-css pie hide-data show-primary-axis show-2-secondary-axes">
    <caption> Pie Example #4 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.0; --end: 0.10"> <span class="data"> $ 10K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.10; --end: 0.15"> <span class="data"> $ 5K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.15; --end: 0.30"> <span class="data"> $ 15K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.30; --end: 0.85"> <span class="data"> $ 55K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 0.85; --end: 1.0"> <span class="data"> $ 15K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="pie-example-5">
<template v-slot:css-code>
#pie-example-5 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="pie-example-5">
  <table class="charts-css pie hide-data show-primary-axis show-6-secondary-axes">
    <caption> Pie Example #5 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.0; --end: 0.10"> <span class="data"> $ 10K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.10; --end: 0.15"> <span class="data"> $ 5K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.15; --end: 0.30"> <span class="data"> $ 15K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.30; --end: 0.85"> <span class="data"> $ 55K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 0.85; --end: 1.0"> <span class="data"> $ 15K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>
