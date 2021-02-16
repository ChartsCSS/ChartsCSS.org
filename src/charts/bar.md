---
permalink: /charts/bar/
prev: ../
---

# Bar

Bar charts display raw data as horizontal bars.

## Usage

To visualize your data with bar chart, the main `.charts-css` class should be followed by the `.bar` class.

```html
<table class="charts-css bar">
  ...
</table>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart.bar {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
```

```html
<table class="charts-css bar" id="my-chart">
  ...
</table>
```

<code-example code-example-id="bar-example-1">
<template v-slot:css-code>
#bar-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar" id="bar-example-1">

  <caption> Bar Example #1 </caption>

  <tbody>
    <tr>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Orientation

You can control the [chart orientation](../components/orientation/), or direction. The initial orientation depends on your language writing direction. Using the `.reverse` class you can reverse the orientation.

```html
<table class="charts-css bar reverse">
  ...
</table>
```

<code-example code-example-id="bar-example-2">
<template v-slot:css-code>
#bar-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar reverse" id="bar-example-2">

  <caption> Bar Example #2 </caption>

  <tbody>
    <tr>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Heading

You can add a [heading](../components/heading/) to your chart using the `<caption>` tag. By default the heading is hidden. To display the heading use the `.show-heading` class.

```html
<table class="charts-css bar show-heading">
  <caption> Descriptive Chart Heading </caption>
  ...
</table>
```

<code-example code-example-id="bar-example-3">
<template v-slot:css-code>
#bar-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-heading" id="bar-example-3">

  <caption> Descriptive Chart Heading </caption>

  <tbody>
    <tr>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Multiple Datasets

You can use a [single dataset](../components/data/) (one `<td>` tag in each `<tr>`).

```html{2}
<tr>
  <td> Data </td>
</tr>
```

Or [multiple datasets](../components/datasets/) (many `<td>` tags in `<tr>`).

```html{2-4}
<tr>
  <td> Data </td>
  <td> Data </td>
  <td> Data </td>
</tr>
```

But when using multiple datasets you should add the `.multiple` class.

```html
<table class="charts-css bar multiple">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-4">
<template v-slot:css-code>
#bar-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar" id="bar-example-4">

  <caption> Bar Example #4 </caption>

  <tbody>
    <tr>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="bar-example-5">
<template v-slot:css-code>
#bar-example-5 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar multiple data-spacing-3" id="bar-example-5">

  <caption> Bar Example #5 </caption>

  <tbody>
    <tr>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
    <tr>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

</v-row>

## Labels

You can add [labels](../components/labels/) to your data and control the labels positions and size. Labels added using `<th>` tag inside the `<tr>`

```html{2}
<tr>
  <th scope="row"> Label </th>
  <td> Data </td>
  <td> Data </td>
  <td> Data </td>
</tr>
```

By default the labels are hidden. To display the labels use the `.show-labels` class.

```html
<table class="charts-css bar show-labels">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-6">
<template v-slot:css-code>
#bar-example-6 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels" id="bar-example-6">

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
</template>
</code-example>

<code-example code-example-id="bar-example-7">
<template v-slot:css-code>
#bar-example-7 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels reverse" id="bar-example-7">

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
</template>
</code-example>

</v-row>

Some charts use long labels others use short ones. To customize the label size use the `--labels-size` variable.

```css
#my-chart.bar {
  --labels-size: 50px;
}
```

<v-row>

<code-example code-example-id="bar-example-8">
<template v-slot:css-code>
#bar-example-8 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --labels-size: 50px;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels" id="bar-example-8">

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
</template>
</code-example>

<code-example code-example-id="bar-example-9">
<template v-slot:css-code>
#bar-example-9 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --labels-size: 50px;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels reverse" id="bar-example-9">

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
</template>
</code-example>

</v-row>

## Axes

You can control the [axes](../components/axes/) that will be displayed on the chart.

### Primary Axis

To add a primary axis to separate the labels from the chart itself use the `.show-primary-axis` class.

```html
<table class="charts-css bar show-primary-axis">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-10">
<template v-slot:css-code>
#bar-example-10 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels" id="bar-example-10">

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
</template>
</code-example>

<code-example code-example-id="bar-example-11">
<template v-slot:css-code>
#bar-example-11 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-primary-axis" id="bar-example-11">

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
</template>
</code-example>

</v-row>

### Secondary Axes

To add secondary axes, located inside the chart itself, use the `.show-*-secondary-axes` class.

```html
<table class="charts-css bar show-4-secondary-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-12">
<template v-slot:css-code>
#bar-example-12 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-primary-axis show-4-secondary-axes" id="bar-example-12">

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
</template>
</code-example>

<code-example code-example-id="bar-example-13">
<template v-slot:css-code>
#bar-example-13 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-primary-axis show-10-secondary-axes" id="bar-example-13">

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
</template>
</code-example>

</v-row>

### Data Axes

To add data axes which are auto-generated based on the amount of rows (`<tr>` tags) you have. Use the `.show-data-axes` class to add them.

```html
<table class="charts-css bar show-data-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-14">
<template v-slot:css-code>
#bar-example-14 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-primary-axis show-data-axes" id="bar-example-14">

  <caption> Bar Example #14 </caption>

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
</template>
</code-example>

<code-example code-example-id="bar-example-15">
<template v-slot:css-code>
#bar-example-15 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-primary-axis show-4-secondary-axes show-data-axes" id="bar-example-15">

  <caption> Bar Example #15 </caption>

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
</template>
</code-example>

</v-row>

## Spacing

You can control the [space](../components/spacing/) between the data items and between the datasets.

### Data Spacing

To add spacing between data items use the `.data-spacing-*` class.

```html
<table class="charts-css bar data-spacing-10">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-16">
<template v-slot:css-code>
#bar-example-16 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-primary-axis show-data-axes" id="bar-example-16">

  <caption> Bar Example #16 </caption>

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
</template>
</code-example>

<code-example code-example-id="bar-example-17">
<template v-slot:css-code>
#bar-example-17 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-primary-axis show-data-axes data-spacing-10" id="bar-example-17">

  <caption> Bar Example #17 </caption>

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
</template>
</code-example>

</v-row>

### Datasets Spacing

To add spacing between data items use the `.datasets-spacing-*` class.

```html
<table class="charts-css bar multiple datasets-spacing-10">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-18">
<template v-slot:css-code>
#bar-example-18 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels multiple show-primary-axis show-data-axes" id="bar-example-18">

  <caption> Bar Example #18 </caption>

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
</template>
</code-example>

<code-example code-example-id="bar-example-19">
<template v-slot:css-code>
#bar-example-19 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels multiple show-primary-axis show-data-axes datasets-spacing-10" id="bar-example-19">

  <caption> Bar Example #19 </caption>

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
</template>
</code-example>

</v-row>

## Reverse Order

You can [reverse the order of the elements](../components/reverse-order/) without changing the HTML markup.

### Reverse Data Order

To reverse thr data order use the `.reverse-data` class.

```html
<table class="charts-css bar reverse-data">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-20">
<template v-slot:css-code>
#bar-example-20 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels" id="bar-example-20">

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
</template>
</code-example>

<code-example code-example-id="bar-example-21">
<template v-slot:css-code>
#bar-example-21 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels reverse-data" id="bar-example-21">

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
</template>
</code-example>

</v-row>

### Reverse Datasets Order

To reverse datasets order use the `.reverse-datasets` class.

```html
<table class="charts-css bar reverse-datasets">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-22">
<template v-slot:css-code>
#bar-example-22 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes" id="bar-example-22">

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
</template>
</code-example>

<code-example code-example-id="bar-example-23">
<template v-slot:css-code>
#bar-example-23 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes reverse-datasets" id="bar-example-23">

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
</template>
</code-example>

</v-row>

### Reverse Data & Datasets Order

You can combine the two classes to reverse data order and datasets order.

```html
<table class="charts-css bar reverse-data reverse-datasets">
  ...
</table>
```

<v-row>

<code-example code-example-id="bar-example-24">
<template v-slot:css-code>
#bar-example-24 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes" id="bar-example-24">

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
</template>
</code-example>

<code-example code-example-id="bar-example-25">
<template v-slot:css-code>
#bar-example-25 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar multiple show-labels data-spacing-10 show-primary-axis show-data-axes reverse-data reverse-datasets" id="bar-example-25">

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
</template>
</code-example>

</v-row>
