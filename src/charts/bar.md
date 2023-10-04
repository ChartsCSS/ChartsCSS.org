---
permalink: /charts/bar/
prev: ../
---

# Bar

Bar charts display raw data as horizontal bars.

## Usage

To visualize your data with a bar chart, the main `.charts-css` class should be followed by the `.bar` class.

```html
<table class="charts-css bar">
  ...
</table>
```

## Wrapper

It's recommended to wrap the chart with a wrapper element. This element is used not only to hold the chart components, but also for scoping the styles.

```html
<div id="my-chart">

  <table class="charts-css bar">
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
#my-chart .bar {
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

  <table class="charts-css bar show-heading">
    <caption> Descriptive Bar Chart Heading </caption>
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

Use the `--size` variable to set the data.

```html{2}
<tr>
  <td style="--size: 0.4"> $ 40K </td>
</tr>
```

To help the framwork identify the text, wrap the content with a `<span class="data">` tag.

```html{2}
<tr>
  <td style="--size: 0.4"> <span class="data"> $ 40K </span> </td>
</tr>
```

<code-example code-example-id="bar-example-1">
<template v-slot:css-code>
#bar-example-1 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-1 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-1">
  <table class="charts-css bar hide-data">
    <caption> Bar Example #1 </caption>
    <tbody>
      <tr>
        <td style="--size: 0.2"> <span class="data"> $ 20K </span> </td>
      </tr>
      <tr>
        <td style="--size: 0.4"> <span class="data"> $ 40K </span> </td>
      </tr>
      <tr>
        <td style="--size: 0.6"> <span class="data"> $ 60K </span> </td>
      </tr>
      <tr>
        <td style="--size: 0.8"> <span class="data"> $ 80K </span> </td>
      </tr>
      <tr>
        <td style="--size: 1.0"> <span class="data"> $ 100K </span> </td>
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
  <td style="--size: 0.2"> <span class="data"> Data </span> </td>
  <td style="--size: 0.4"> <span class="data"> Data </span> </td>
  <td style="--size: 0.6"> <span class="data"> Data </span> </td>
</tr>
```

When using multiple datasets you should add the `.multiple` class to let the framework apply different styles.

```html
<table class="charts-css bar multiple">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-2">
<template v-slot:css-code>
#bar-example-2 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-2 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-2">
  <table class="charts-css bar hide-data">
    <caption> Bar Example #2 </caption>
    <tbody>
      <tr>
        <td style="--size: 0.2"> <span class="data"> $ 20K </span> </td>
      </tr>
      <tr>
        <td style="--size: 0.4"> <span class="data"> $ 40K </span> </td>
      </tr>
      <tr>
        <td style="--size: 0.6"> <span class="data"> $ 60K </span> </td>
      </tr>
      <tr>
        <td style="--size: 0.8"> <span class="data"> $ 80K </span> </td>
      </tr>
      <tr>
        <td style="--size: 1.0"> <span class="data"> $ 100K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-3">
<template v-slot:css-code>
#bar-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-3 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-3">
  <table class="charts-css bar multiple hide-data data-spacing-3">
    <caption> Bar Example #3 </caption>
    <tbody>
      <tr>
        <td style="--size: 0.2;"> <span class="data"> $ 20K </span> </td>
        <td style="--size: 0.4;"> <span class="data"> $ 40K </span> </td>
        <td style="--size: 0.6;"> <span class="data"> $ 600K </span> </td>
        <td style="--size: 0.8;"> <span class="data"> $ 80K </span> </td>
        <td style="--size: 1.0;"> <span class="data"> $ 100K </span> </td>
      </tr>
      <tr>
        <td style="--size: 0.2;"> <span class="data"> $ 20K </span> </td>
        <td style="--size: 0.4;"> <span class="data"> $ 40K </span> </td>
        <td style="--size: 0.6;"> <span class="data"> $ 60K </span> </td>
        <td style="--size: 0.8;"> <span class="data"> $ 80K </span> </td>
        <td style="--size: 1.0;"> <span class="data"> $ 100K </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

## Labels

Add [labels](../components/labels/) to your data and control the labels' positions and size. Labels added using `<th>` tag inside the `<tr>`.

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
<table class="charts-css bar show-labels">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-4">
<template v-slot:css-code>
#bar-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-4 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-4">
  <table class="charts-css bar show-labels">
    <caption> Bar Example #4 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-5">
<template v-slot:css-code>
#bar-example-5 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-5 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-5">
  <table class="charts-css bar show-labels reverse">
    <caption> Bar Example #5 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
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
<table class="charts-css bar show-primary-axis">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-6">
<template v-slot:css-code>
#bar-example-6 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-6 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-6">
  <table class="charts-css bar show-labels">
    <caption> Bar Example #6 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-7">
<template v-slot:css-code>
#bar-example-7 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-7 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-7">
  <table class="charts-css bar show-labels show-primary-axis">
    <caption> Bar Example #7 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
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
<table class="charts-css bar show-4-secondary-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-8">
<template v-slot:css-code>
#bar-example-8 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-8 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-8">
  <table class="charts-css bar show-labels show-primary-axis show-4-secondary-axes">
    <caption> Bar Example #8 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.25"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.5"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.125"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.75"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.25"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-9">
<template v-slot:css-code>
#bar-example-9 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-9 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-9">
  <table class="charts-css bar show-labels show-primary-axis show-10-secondary-axes">
    <caption> Bar Example #9 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Data Axes

Data axes are auto-generated based on the amount of rows (`<tr>` tags) in the chart. Add data axes using the `.show-data-axes` class.

```html
<table class="charts-css bar show-data-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-10">
<template v-slot:css-code>
#bar-example-10 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-10 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-10">
  <table class="charts-css bar show-labels show-primary-axis show-data-axes">
    <caption> Bar Example #10 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.25"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.5"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.125"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.75"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.25"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-11">
<template v-slot:css-code>
#bar-example-11 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-11 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-11">
  <table class="charts-css bar show-labels show-primary-axis show-4-secondary-axes show-data-axes">
    <caption> Bar Example #11 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

## Spacing

Control the [space](../components/spacing/) between the data items and the datasets.

### Data Spacing

To add space between data items use the `.data-spacing-*` class.

```html
<table class="charts-css bar data-spacing-10">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-12">
<template v-slot:css-code>
#bar-example-12 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-12 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-12">
  <table class="charts-css bar show-labels show-primary-axis show-data-axes">
    <caption> Bar Example #12 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-13">
<template v-slot:css-code>
#bar-example-13 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-13 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-13">
  <table class="charts-css bar show-labels show-primary-axis show-data-axes data-spacing-10">
    <caption> Bar Example #13 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Datasets Spacing

To add space between data items use the `.datasets-spacing-*` class.

```html
<table class="charts-css bar multiple datasets-spacing-10">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-14">
<template v-slot:css-code>
#bar-example-14 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-14 .bar tbody {
  aspect-ratio: 3 / 4;
}
</template>
<template v-slot:html-code>
<div id="bar-example-14">
  <table class="charts-css bar multiple show-labels show-primary-axis show-data-axes">
    <caption> Bar Example #14 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1</th>
        <th scope="col"> Progress 2</th>
        <th scope="col"> Progress 3</th>
        <th scope="col"> Progress 4</th>
        <th scope="col"> Progress 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.5;"> </td>
        <td style="--size: 1.0;"> </td>
        <td style="--size: 0.7;"> </td>
        <td style="--size: 0.4;"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.4;"> </td>
        <td style="--size: 0.6;"> </td>
        <td style="--size: 0.8;"> </td>
        <td style="--size: 1.0;"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-15">
<template v-slot:css-code>
#bar-example-15 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-15 .bar tbody {
  aspect-ratio: 3 / 4;
}
</template>
<template v-slot:html-code>
<div id="bar-example-15">
  <table class="charts-css bar multiple show-labels show-primary-axis show-data-axes datasets-spacing-10">
    <caption> Bar Example #15 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1</th>
        <th scope="col"> Progress 2</th>
        <th scope="col"> Progress 3</th>
        <th scope="col"> Progress 4</th>
        <th scope="col"> Progress 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.5;"> </td>
        <td style="--size: 1.0;"> </td>
        <td style="--size: 0.7;"> </td>
        <td style="--size: 0.4;"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.4;"> </td>
        <td style="--size: 0.6;"> </td>
        <td style="--size: 0.8;"> </td>
        <td style="--size: 1.0;"> </td>
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
<table class="charts-css bar reverse">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-16">
<template v-slot:css-code>
#bar-example-16 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-16 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-16">
  <table class="charts-css bar show-labels">
    <caption> Bar Example #16 </caption>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-17">
<template v-slot:css-code>
#bar-example-17 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-17 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-17">
  <table class="charts-css bar show-labels reverse">
    <caption> Bar Example #17 </caption>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
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
<table class="charts-css bar reverse-labels">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-18">
<template v-slot:css-code>
#bar-example-18 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-18 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-18">
  <table class="charts-css bar show-labels">
    <caption> Bar Example #18 </caption>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-19">
<template v-slot:css-code>
#bar-example-19 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-19 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-19">
  <table class="charts-css bar show-labels reverse-labels">
    <caption> Bar Example #19 </caption>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
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
<table class="charts-css bar reverse-data">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-20">
<template v-slot:css-code>
#bar-example-20 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-20 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-20">
  <table class="charts-css bar show-labels">
    <caption> Bar Example #20 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-21">
<template v-slot:css-code>
#bar-example-21 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-21 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="bar-example-21">
  <table class="charts-css bar show-labels reverse-data">
    <caption> Bar Example #21 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Reverse Datasets

To reverse the datasets order use the `.reverse-datasets` class.

```html
<table class="charts-css bar reverse-datasets">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-22">
<template v-slot:css-code>
#bar-example-22 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-22 .bar tbody {
  aspect-ratio: 3 / 4;
}
</template>
<template v-slot:html-code>
<div id="bar-example-22">
  <table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes">
    <caption> Bar Example #22 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1</th>
        <th scope="col"> Progress 2</th>
        <th scope="col"> Progress 3</th>
        <th scope="col"> Progress 4</th>
        <th scope="col"> Progress 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.5;"> </td>
        <td style="--size: 1.0;"> </td>
        <td style="--size: 0.7;"> </td>
        <td style="--size: 0.4;"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.4;"> </td>
        <td style="--size: 0.6;"> </td>
        <td style="--size: 0.8;"> </td>
        <td style="--size: 1.0;"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-23">
<template v-slot:css-code>
#bar-example-23 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-23 .bar tbody {
  aspect-ratio: 3 / 4;
}
</template>
<template v-slot:html-code>
<div id="bar-example-23">
  <table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes reverse-datasets">
    <caption> Bar Example #23 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1</th>
        <th scope="col"> Progress 2</th>
        <th scope="col"> Progress 3</th>
        <th scope="col"> Progress 4</th>
        <th scope="col"> Progress 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.5;"> </td>
        <td style="--size: 1.0;"> </td>
        <td style="--size: 0.7;"> </td>
        <td style="--size: 0.4;"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.4;"> </td>
        <td style="--size: 0.6;"> </td>
        <td style="--size: 0.8;"> </td>
        <td style="--size: 1.0;"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

### Reverse Data & Datasets

Combine the two classes to reverse the data order and the datasets order.

```html
<table class="charts-css bar reverse-data reverse-datasets">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-24">
<template v-slot:css-code>
#bar-example-24 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-24 .bar tbody {
  aspect-ratio: 3 / 4;
}
</template>
<template v-slot:html-code>
<div id="bar-example-24">
  <table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes">
    <caption> Bar Example #24 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1</th>
        <th scope="col"> Progress 2</th>
        <th scope="col"> Progress 3</th>
        <th scope="col"> Progress 4</th>
        <th scope="col"> Progress 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.5;"> </td>
        <td style="--size: 1.0;"> </td>
        <td style="--size: 0.7;"> </td>
        <td style="--size: 0.4;"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.4;"> </td>
        <td style="--size: 0.6;"> </td>
        <td style="--size: 0.8;"> </td>
        <td style="--size: 1.0;"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="bar-example-25">
<template v-slot:css-code>
#bar-example-25 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#bar-example-25 .bar tbody {
  aspect-ratio: 3 / 4;
}
</template>
<template v-slot:html-code>
<div id="bar-example-25">
  <table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes reverse-data reverse-datasets">
    <caption> Bar Example #25 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1</th>
        <th scope="col"> Progress 2</th>
        <th scope="col"> Progress 3</th>
        <th scope="col"> Progress 4</th>
        <th scope="col"> Progress 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.5;"> </td>
        <td style="--size: 1.0;"> </td>
        <td style="--size: 0.7;"> </td>
        <td style="--size: 0.4;"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> </td>
        <td style="--size: 0.4;"> </td>
        <td style="--size: 0.6;"> </td>
        <td style="--size: 0.8;"> </td>
        <td style="--size: 1.0;"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>
