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

## Data

When you add data, you need to supply not only the data `--size` variable but also the `--start` variable that indicates the starting point.

```html
<table class="charts-css area" id="my-chart">

  <tbody>
    <tr>
      <td style="--start: 0.2; --size: 0.4"> <span class="data"> $ 40K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.4; --size: 0.8"> <span class="data"> $ 80K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.8; --size: 0.6"> <span class="data"> $ 60K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.6; --size: 1.0"> <span class="data"> $ 100K </span> </td>
    </tr>
    <tr>
      <td style="--start: 1.0; --size: 0.3"> <span class="data"> $ 30K </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="area-example-1">
<template v-slot:css-code>
#area-example-1 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area hide-data" id="area-example-1">

  <caption> Area Example #1 </caption>

  <tbody>
    <tr>
      <td style="--start: 0.2; --size: 0.4"> <span class="data"> $ 40K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.4; --size: 0.8"> <span class="data"> $ 80K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.8; --size: 0.6"> <span class="data"> $ 60K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.6; --size: 1.0"> <span class="data"> $ 100K </span> </td>
    </tr>
    <tr>
      <td style="--start: 1.0; --size: 0.3"> <span class="data"> $ 30K </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart.area {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
```

```html
<table class="charts-css area" id="my-chart">
  ...
</table>
```

<code-example code-example-id="area-example-2">
<template v-slot:css-code>
#area-example-2 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area" id="area-example-2">

  <caption> Area Example #2 </caption>

  <tbody>
    <tr>
      <td style="--start: 0.2; --size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--start: 0.4; --size: 0.8"> </td>
    </tr>
    <tr>
      <td style="--start: 0.8; --size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--start: 0.6; --size: 1.0"> </td>
    </tr>
    <tr>
      <td style="--start: 1.0; --size: 0.3"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Orientation

You can control the [chart orientation](../components/orientation/), or direction. The initial orientation is top-to-bottom (on LRT and RTL languages) and right-to-left (on TTM languages). Using the `.reverse` class you can reverse the orientation.

```html
<table class="charts-css area reverse">
  ...
</table>
```

<code-example code-example-id="area-example-3">
<template v-slot:css-code>
#area-example-3 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area reverse" id="area-example-3">

  <caption> Area Example #3 </caption>

  <tbody>
    <tr>
      <td style="--start: 0.2; --size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--start: 0.4; --size: 0.8"> </td>
    </tr>
    <tr>
      <td style="--start: 0.8; --size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--start: 0.6; --size: 1.0"> </td>
    </tr>
    <tr>
      <td style="--start: 1.0; --size: 0.3"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Heading

You can add a [heading](../components/heading/) to your chart using the `<caption>` tag. By default the heading is hidden. To display the heading use the `.show-heading` class.

```html
<table class="charts-css area show-heading">
  <caption> Descriptive Chart Heading </caption>
  ...
</table>
```

<code-example code-example-id="area-example-4">
<template v-slot:css-code>
#area-example-4 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area show-heading" id="area-example-4">

  <caption> Descriptive Chart Heading </caption>

  <tbody>
    <tr>
      <td style="--start: 0.2; --size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--start: 0.4; --size: 0.8"> </td>
    </tr>
    <tr>
      <td style="--start: 0.8; --size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--start: 0.6; --size: 1.0"> </td>
    </tr>
    <tr>
      <td style="--start: 1.0; --size: 0.3"> </td>
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
<table class="charts-css area multiple">
  ...
</table>
```

<code-example code-example-id="area-example-5">
<template v-slot:css-code>
#area-example-5 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data" id="area-example-5">

  <caption> Area Example #5 </caption>

  <tbody>
    <tr>
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

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
<table class="charts-css area show-labels">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-6">
<template v-slot:css-code>
#area-example-6 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels" id="area-example-6">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="area-example-7">
<template v-slot:css-code>
#area-example-7 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels reverse" id="area-example-7">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

</v-row>

Some charts use long labels others use short ones. To customize the label size use the `--labels-size` variable.

```css
#my-chart.area {
  --labels-size: 3rem;
}
```

<v-row>

<code-example code-example-id="area-example-8">
<template v-slot:css-code>
#area-example-8 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
  --labels-size: 3rem;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels" id="area-example-8">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="area-example-9">
<template v-slot:css-code>
#area-example-9 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
  --labels-size: 3rem;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels reverse" id="area-example-9">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
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
<table class="charts-css area show-primary-axis">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-10">
<template v-slot:css-code>
#area-example-10 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels" id="area-example-10">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="area-example-11">
<template v-slot:css-code>
#area-example-11 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels show-primary-axis" id="area-example-11">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

</v-row>

### Secondary Axes

To add secondary axes, located inside the chart itself, use the `.show-*-secondary-axes` class.

```html
<table class="charts-css area show-4-secondary-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-12">
<template v-slot:css-code>
#area-example-12 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels show-primary-axis show-4-secondary-axes" id="area-example-12">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="area-example-13">
<template v-slot:css-code>
#area-example-13 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels show-primary-axis show-10-secondary-axes" id="area-example-13">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

</v-row>

### Data Axes

To add data axes which are auto-generated based on the amount of rows (`<tr>` tags) you have. Use the `.show-data-axes` class to add them.

```html
<table class="charts-css area show-data-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-14">
<template v-slot:css-code>
#area-example-14 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels show-primary-axis show-data-axes" id="area-example-14">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="area-example-15">
<template v-slot:css-code>
#area-example-15 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels show-primary-axis show-4-secondary-axes show-data-axes" id="area-example-15">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
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
<table class="charts-css area reverse-data">
  ...
</table>
```

<v-row>

<code-example code-example-id="area-example-16">
<template v-slot:css-code>
#area-example-16 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels" id="area-example-16">

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="area-example-17">
<template v-slot:css-code>
#area-example-17 {
  height: 200px;
  max-width: 400px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area multiple hide-data show-labels reverse-data" id="area-example-17">

  <caption> Area Example #17 </caption>

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
      <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

</v-row>
