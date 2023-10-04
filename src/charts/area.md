---
permalink: /charts/area/
---

# Area

Area charts display raw data with colors between axis and line.

## Usage

To visualize your data with an area chart, the main `.charts-css` class should be followed by the `.area` class.

```html
<table class="charts-css area">
  ...
</table>
```

## Wrapper

It's recommended to wrap the chart with a wrapper element. This element is used not only to hold the chart components, but also for scoping the styles.

```html
<div id="my-chart">

  <table class="charts-css area">
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
#my-chart .area {
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

  <table class="charts-css area show-heading">
    <caption> Descriptive Area Chart Heading </caption>
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

<code-example code-example-id="area-example-1">
<template v-slot:css-code>
#area-example-1 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-1 .area tbody {
  aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-1">
  <table class="charts-css area hide-data">
    <caption> Area Example #1 </caption>
    <tbody>
      <tr>
        <td style="--start: 0.2; --end: 0.4"> <span class="data"> $ 40K </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.4; --end: 0.8"> <span class="data"> $ 80K </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.8; --end: 0.6"> <span class="data"> $ 60K </span> </td>
      </tr>
      <tr>
        <td style="--start: 0.6; --end: 1.0"> <span class="data"> $ 100K </span> </td>
      </tr>
      <tr>
        <td style="--start: 1.0; --end: 0.3"> <span class="data"> $ 30K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Multiple Datasets

[Single dataset](../components/data/) have one `<td>` tag in each `<tr>`.

```html{2}
<tr>
  <td> Data </td>
</tr>
```

[Multiple datasets](../components/datasets/) have several `<td>` tags in each `<tr>`.

```html{2-4}
<tr>
  <td> Data </td>
  <td> Data </td>
  <td> Data </td>
</tr>
```

As any other data item, they should have the relevalt structure.

```html{2-4}
<tr>
  <td style="--start: 0.2; --end: 0.4;"> <span class="data"> Data </span> </td>
  <td style="--start: 0.4; --end: 0.6;"> <span class="data"> Data </span> </td>
  <td style="--start: 0.6; --end: 0.8;"> <span class="data"> Data </span> </td>
</tr>
```

When using multiple datasets you should add the `.multiple` class to let the framework apply different styles.

```html
<table class="charts-css area multiple">
  ...
</table>
```

<code-example code-example-id="area-example-2">
<template v-slot:css-code>
#area-example-2 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-2 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-2">
  <table class="charts-css area multiple hide-data">
    <caption> Area Example #2 </caption>
    <tbody>
      <tr>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Labels

Add [labels](../components/labels/) to your data and control the labels' positions and size. Labels added using `<th>` tag inside the `<tr>`

```html{2}
<tr>
  <th scope="row"> Label </th>
  <td> Data </td>
  <td> Data </td>
  <td> Data </td>
</tr>
```

By default, labels are hidden. To display labels use the `.show-labels` class.

```html
<table class="charts-css area show-labels">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-3">
<template v-slot:css-code>
#area-example-3 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-3 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-3">
  <table class="charts-css area multiple hide-data show-labels">
    <caption> Area Example #3 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="area-example-4">
<template v-slot:css-code>
#area-example-4 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-4 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-4">
  <table class="charts-css area multiple hide-data show-labels reverse">
    <caption> Area Example #7 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

## Axes

Control the [axes](../components/axes/) displayed on the chart.

### Primary Axis

To add a primary axis, separating the labels from the data, use the `.show-primary-axis` class.

```html
<table class="charts-css area show-primary-axis">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-5">
<template v-slot:css-code>
#area-example-5 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-5 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-5">
  <table class="charts-css area multiple hide-data show-labels">
    <caption> Area Example #5 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="area-example-6">
<template v-slot:css-code>
#area-example-6 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-6 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-6">
  <table class="charts-css area multiple hide-data show-labels show-primary-axis">
    <caption> Area Example #6 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
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
<table class="charts-css area show-4-secondary-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-7">
<template v-slot:css-code>
#area-example-7 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-7 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-7">
  <table class="charts-css area multiple hide-data show-labels show-primary-axis show-4-secondary-axes">
    <caption> Area Example #7 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="area-example-8">
<template v-slot:css-code>
#area-example-8 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-8 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-8">
  <table class="charts-css area multiple hide-data show-labels show-primary-axis show-10-secondary-axes">
    <caption> Area Example #8 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Data Axes

Data axes are auto-generated based on the amount of columns (`<tr>` tags) in the chart. Add data axes using the `.show-data-axes` class.

```html
<table class="charts-css area show-data-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-9">
<template v-slot:css-code>
#area-example-9 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-9 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-9">
  <table class="charts-css area multiple hide-data show-labels show-primary-axis show-data-axes">
    <caption> Area Example #9 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="area-example-10">
<template v-slot:css-code>
#area-example-10 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-10 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-10">
  <table class="charts-css area multiple hide-data show-labels show-primary-axis show-4-secondary-axes show-data-axes">
    <caption> Area Example #10 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

## Orientation

Control the [chart orientation](../components/orientation/), or direction. The initial orientation is top-to-bottom (on LRT and RTL languages) and right-to-left (on TTM languages).

### Reverse

Use the `.reverse` class to reverse the orientation.

```html
<table class="charts-css area reverse">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-11">
<template v-slot:css-code>
#area-example-11 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-11 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-11">
  <table class="charts-css area multiple hide-data show-labels">
    <caption> Area Example #11 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="area-example-12">
<template v-slot:css-code>
#area-example-12 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-12 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-12">
  <table class="charts-css area multiple hide-data show-labels reverse">
    <caption> Area Example #12 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Reverse Labels

Use the `.reverse-labels` class to reverse the labels position.

```html
<table class="charts-css area reverse-labels">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-13">
<template v-slot:css-code>
#area-example-13 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-13 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-13">
  <table class="charts-css area multiple hide-data show-labels">
    <caption> Area Example #13 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="area-example-14">
<template v-slot:css-code>
#area-example-14 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-14 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-14">
  <table class="charts-css area multiple hide-data show-labels reverse-labels">
    <caption> Area Example #14 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Reverse Data

To reverse the data order use the `.reverse-data` class.

```html
<table class="charts-css area reverse-data">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-15">
<template v-slot:css-code>
#area-example-15 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-15 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-15">
  <table class="charts-css area multiple hide-data show-labels">
    <caption> Area Example #15 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="area-example-16">
<template v-slot:css-code>
#area-example-16 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#area-example-16 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="area-example-16">
  <table class="charts-css area multiple hide-data show-labels reverse-data">
    <caption> Area Example #16 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --end: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --end: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --end: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --end: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --end: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --end: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>
