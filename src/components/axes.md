---
permalink: /components/axes/
---

# Axes

Axes are used to visually categorize and measure the data inside the chart.

## Axis System

The axis system is a separate component and contains several parts. **By default, all axes are hidden**, you choose which axes to display using the CSS utility classes.

### Naming Conventions

One of the framework's philosophical guidelines is to use direction-free class names. This way it can support all languages out-of-the-box, including left-to-right (LTR), right-to-left (RTL) and top-to-bottom (TTB) languages.

Class like `.show-x-axes` and `.show-y-axes` were deprecated early-on in favor of `.show-primary-axis`, `.show-*-secondary-axes` and `.show-data-axes`.

### Supported Axes

The **Charts.css** axis system supports 3 types of axes:

* **Primary Axis** (`.show-primary-axis`) is located at the point where the chart data starts.
* **Secondary Axes** (`.show-*-secondary-axes`) are located inside the chart itself, parallel to the primary axis.
* **Data Axes** (`.show-data-axes`) are located inside the chart itself, crossing the primary axis.

## Add Primary Axis

The primary axis separates the labels from the data. To display the primary axis use the `.show-primary-axis` class.

Note that in a bar chart the primary axis is horizontal, while in a column chart it is vertical. If this changes the label's position (before or after), the primary axis will change its position too.

```html
<table class="charts-css bar show-labels show-primary-axis">
  ...
</table>
```

<v-row>

<code-example code-example-id="axes-example-1">
<template v-slot:css-code>
#axes-example-1 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-1 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-1">
  <table class="charts-css column show-labels show-primary-axis">
    <caption> Axes Example #1 </caption>
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

<code-example code-example-id="axes-example-2">
<template v-slot:css-code>
#axes-example-2 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-2 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-2">
  <table class="charts-css column show-labels show-primary-axis reverse">
    <caption> Axes Example #2 </caption>
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

<br>

<v-row>

<code-example code-example-id="axes-example-3">
<template v-slot:css-code>
#axes-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-3 .bar {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-3">
  <table class="charts-css bar show-labels show-primary-axis">
    <caption> Axes Example #3 </caption>
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

<code-example code-example-id="axes-example-4">
<template v-slot:css-code>
#axes-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-4 .bar {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-4">
  <table class="charts-css bar show-labels show-primary-axis reverse">
    <caption> Axes Example #4 </caption>
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

To customize the primary axis use the following CSS variables:

```css
#my-chart .bar {
  --primary-axis-color: rgba(0, 0, 0, 1);
  --primary-axis-style: solid;
  --primary-axis-width: 1px;
}
```

## Add Secondary Axes

While the primary axis is located between the labels and the data, the secondary axes are located behind the chart data. The number of displayed axes can be controlled using the `.show-*-secondary-axes` class. Replace the `*` in the class name, with any number `1`-`10`. For example, to display 4 secondary axes use the `.show-4-secondary-axes` class.

```html
<table class="charts-css bar show-labels show-4-secondary-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="axes-example-5">
<template v-slot:css-code>
#axes-example-5 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-5 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-5">
  <table class="charts-css column show-labels show-primary-axis show-2-secondary-axes">
    <caption> Axes Example #5 </caption>
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
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.4"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="axes-example-6">
<template v-slot:css-code>
#axes-example-6 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-6 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-6">
  <table class="charts-css column show-labels show-primary-axis show-6-secondary-axes reverse">
    <caption> Axes Example #6 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.5"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.16"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.33"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.07"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.67"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

<br>

<v-row>

<code-example code-example-id="axes-example-7">
<template v-slot:css-code>
#axes-example-7 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-7 .bar {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-7">
  <table class="charts-css bar show-labels show-primary-axis show-4-secondary-axes">
    <caption> Axes Example #7 </caption>
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

<code-example code-example-id="axes-example-8">
<template v-slot:css-code>
#axes-example-8 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-8 .bar {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-8">
  <table class="charts-css bar show-labels show-primary-axis show-10-secondary-axes reverse">
    <caption> Axes Example #8 </caption>
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

To customize the secondary axes use the following CSS variables:

```css
#my-chart .bar {
  --secondary-axes-color: rgba(0, 0, 0, 1);
  --secondary-axes-style: solid;
  --secondary-axes-width: 1px;
}
```

## Add Data Axes

Data axes are based on the amount of rows (`<tr>` tags), therefore data axes are auto-generated using the CSS border property. To display data axes use the `.show-data-axes` class.

```html
<table class="charts-css bar show-labels show-data-axes">
  ...
</table>
```

<v-row>

<code-example code-example-id="axes-example-9">
<template v-slot:css-code>
#axes-example-9 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-9 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-9">
  <table class="charts-css column show-labels show-primary-axis show-4-secondary-axes show-data-axes">
    <caption> Axes Example #9 </caption>
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
        <td style="--size: 0.2"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.6"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.4"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="axes-example-10">
<template v-slot:css-code>
#axes-example-10 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-10 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-10">
  <table class="charts-css column show-labels show-primary-axis show-4-secondary-axes show-data-axes reverse">
    <caption> Axes Example #10 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.5"> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.16"> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.33"> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.07"> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.67"> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

<br>

<v-row>

<code-example code-example-id="axes-example-11">
<template v-slot:css-code>
#axes-example-11 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-11 .bar {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-11">
  <table class="charts-css bar show-labels show-primary-axis show-4-secondary-axes show-data-axes">
    <caption> Axes Example #11 </caption>
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

<code-example code-example-id="axes-example-12">
<template v-slot:css-code>
#axes-example-12 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#axes-example-12 .bar {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="axes-example-12">
  <table class="charts-css bar show-labels show-primary-axis show-4-secondary-axes show-data-axes reverse">
    <caption> Axes Example #12 </caption>
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

To customize the data axes use the following CSS variables:

```css
#my-chart .bar {
  --data-axes-color: rgba(0, 0, 0, 0.15);
  --data-axes-style: solid;
  --data-axes-width: 1px;
}
```

## Axis Title

To add informative axis titles use a [wrapper div](wrapper/#general-anatomy). The title will be placed outside the chart as the HTML `<table>`s don't have HTML tags that can be used.

```html
<div id="my-chart">

  <table class="charts-css column"> ... </table>

  <div class="primary-axis"> Primary Axis Title </div>

  <div class="data-axis-1"> Data Axis Title 1 </div>

  <div class="data-axis-2"> Data Axis Title 2 </div>

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
    "data-axis-1 chart data-axis-2"
    ". primary-axis .";
}
#my-chart > table {
  grid-area: chart;
}
#my-chart > .primary-axis {
  grid-area: primary-axis;
}
#my-chart > .data-axis-1 {
  grid-area: data-axis-1;
  writing-mode: tb-rl;
  transform: rotateZ(180deg);
}
#my-chart > .data-axis-2 {
  grid-area: data-axis-2;
  writing-mode: tb-rl;
  transform: rotateZ(360deg);
}
```

<code-example code-example-id="axes-example-13">
<template v-slot:css-code>
#axes-example-13 {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 250px 50px;
  grid-template-areas:
    "data-axis-1 chart data-axis-2"
    ". primary-axis .";
  background-color: #eee;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
}
#axes-example-13 > table {
  grid-area: chart;
}
#axes-example-13 > .primary-axis {
  grid-area: primary-axis;
}
#axes-example-13 > .data-axis-1 {
  grid-area: data-axis-1;
  writing-mode: tb-rl;
  transform: rotateZ(180deg);
}
#axes-example-13 > .data-axis-2 {
  grid-area: data-axis-2;
  writing-mode: tb-rl;
  transform: rotateZ(360deg);
}
</template>
<template v-slot:html-code>
<div id="axes-example-13">
  <table class="charts-css column show-labels show-primary-axis">
    <caption> Axes Example #13 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Jan </th>
        <td style="--size: 0.3;"> <span class="data"> 30 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.65;"> <span class="data"> 65 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.45;"> <span class="data"> 45 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 0.15;"> <span class="data"> 15 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.32;"> <span class="data"> 32 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.55;"> <span class="data"> 55 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
    </tbody>
  </table>
  <div class="primary-axis"> Month </div>
  <div class="data-axis-1"> Progress </div>
  <div class="data-axis-2"> Progress </div>
</div>
</template>
</code-example>
