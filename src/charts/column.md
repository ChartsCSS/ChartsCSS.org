---
permalink: /charts/column/
---

# Column

Column charts display raw data as vertical columns.

## Usage

To visualize your data with column chart, the main `.charts-css` class should be followed by the `.column` class.

```html
<table class="charts-css column">
  ...
</table>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart.column {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
```

```html
<table class="charts-css column" id="my-chart">
  ...
</table>
```

<code-example code-example-id="column-example-1">
<template v-slot:css-code>
#column-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column" id="column-example-1">

  <caption> Column Example #1 </caption>

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

You can control the [chart orientation](../components/orientation/), or direction. The initial orientation is top-to-bottom (on LRT and RTL languages) and right-to-left (on TTM languages). Using the `.reverse` class you can reverse the orientation.

```html
<table class="charts-css column reverse">
  ...
</table>
```

<code-example code-example-id="column-example-2">
<template v-slot:css-code>
#column-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column reverse" id="column-example-2">

  <caption> Column Example #2 </caption>

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
<table class="charts-css column show-heading">
  <caption> Descriptive Chart Heading </caption>
  ...
</table>
```

<code-example code-example-id="column-example-3">
<template v-slot:css-code>
#column-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-heading" id="column-example-3">

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
<table class="charts-css column multiple">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-4">
<template v-slot:css-code>
#column-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column" id="column-example-4">

  <caption> Column Example #4 </caption>

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

<code-example code-example-id="column-example-5">
<template v-slot:css-code>
#column-example-5 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple data-spacing-3" id="column-example-5">

  <caption> Column Example #5 </caption>

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
<table class="charts-css column show-labels">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-6">
<template v-slot:css-code>
#column-example-6 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels" id="column-example-6">

  <caption> Column Example #6 </caption>

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

<code-example code-example-id="column-example-7">
<template v-slot:css-code>
#column-example-7 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels reverse" id="column-example-7">

  <caption> Column Example #7 </caption>

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
#my-chart.column {
  --labels-size: 3rem;
}
```

<v-row>

<code-example code-example-id="column-example-8">
<template v-slot:css-code>
#column-example-8 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --labels-size: 3rem;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels" id="column-example-8">

  <caption> Column Example #8 </caption>

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

<code-example code-example-id="column-example-9">
<template v-slot:css-code>
#column-example-9 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --labels-size: 3rem;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels reverse" id="column-example-9">

  <caption> Column Example #9 </caption>

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
<table class="charts-css column show-primary-axis">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-10">
<template v-slot:css-code>
#column-example-10 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels" id="column-example-10">

  <caption> Column Example #10 </caption>

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

<code-example code-example-id="column-example-11">
<template v-slot:css-code>
#column-example-11 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis" id="column-example-11">

  <caption> Column Example #11 </caption>

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
<table class="charts-css column show-4-secondary-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-12">
<template v-slot:css-code>
#column-example-12 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis show-4-secondary-axes" id="column-example-12">

  <caption> Column Example #12 </caption>

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

<code-example code-example-id="column-example-13">
<template v-slot:css-code>
#column-example-13 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis show-10-secondary-axes" id="column-example-13">

  <caption> Column Example #13 </caption>

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
<table class="charts-css column show-data-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-14">
<template v-slot:css-code>
#column-example-14 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis show-data-axes" id="column-example-14">

  <caption> Column Example #14 </caption>

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

<code-example code-example-id="column-example-15">
<template v-slot:css-code>
#column-example-15 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis show-4-secondary-axes show-data-axes" id="column-example-15">

  <caption> Column Example #15 </caption>

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
<table class="charts-css column data-spacing-20">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-16">
<template v-slot:css-code>
#column-example-16 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis show-data-axes" id="column-example-16">

  <caption> Column Example #16 </caption>

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

<code-example code-example-id="column-example-17">
<template v-slot:css-code>
#column-example-17 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis show-data-axes data-spacing-20" id="column-example-17">

  <caption> Column Example #17 </caption>

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
<table class="charts-css column multiple datasets-spacing-10">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-18">
<template v-slot:css-code>
#column-example-18 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels multiple show-primary-axis show-data-axes" id="column-example-18">

  <caption> Column Example #18 </caption>

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

<code-example code-example-id="column-example-19">
<template v-slot:css-code>
#column-example-19 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels multiple show-primary-axis show-data-axes datasets-spacing-10" id="column-example-19">

  <caption> Column Example #19 </caption>

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
<table class="charts-css column reverse-data">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-20">
<template v-slot:css-code>
#column-example-20 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels" id="column-example-20">

  <caption> Column Example #20 </caption>

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

<code-example code-example-id="column-example-21">
<template v-slot:css-code>
#column-example-21 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels reverse-data" id="column-example-21">

  <caption> Column Example #21 </caption>

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
<table class="charts-css column reverse-datasets">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-22">
<template v-slot:css-code>
#column-example-22 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels data-spacing-10 show-primary-axis show-data-axes" id="column-example-22">

  <caption> Column Example #22 </caption>

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

<code-example code-example-id="column-example-23">
<template v-slot:css-code>
#column-example-23 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels data-spacing-10 show-primary-axis show-data-axes reverse-datasets" id="column-example-23">

  <caption> Column Example #23 </caption>

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
<table class="charts-css column reverse-data reverse-datasets">
  ...
</table>
```

<v-row>

<code-example code-example-id="column-example-24">
<template v-slot:css-code>
#column-example-24 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels data-spacing-10 show-primary-axis show-data-axes" id="column-example-24">

  <caption> Column Example #24 </caption>

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

<code-example code-example-id="column-example-25">
<template v-slot:css-code>
#column-example-25 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels data-spacing-10 show-primary-axis show-data-axes reverse-data reverse-datasets" id="column-example-25">

  <caption> Column Example #25 </caption>

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
