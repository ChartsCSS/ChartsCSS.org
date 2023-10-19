---
permalink: /customization/motion-effects/
---

# Motion Effects

Motion effects enhance your charts when users interact with elements using [mouse](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) or [touch](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) events. For example, add motion effects when the mouse hovers over the entire chart or an individual inner element. Use your imagination to create interactive effects with CSS.

Here are some basic examples leveraging the CSS `:hover` pseudo-class.

## Data Hover Effect

Change background color when the user hovers over data items:

```css
#motion-effect .column tr {
  transition-duration: 0.3s;
}
#motion-effect .column tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
#motion-effect .column tr:hover th {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
```

<code-example code-example-id="motion-effect-example-1">
<template v-slot:css-code>
#motion-effect-example-1 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#motion-effect-example-1 .column {
  --aspect-ratio: 4 / 3;
}
#motion-effect-example-1 .column tr {
  transition-duration: 0.3s;
}
#motion-effect-example-1 .column tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
#motion-effect-example-1 .column tr:hover th {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
</template>
<template v-slot:html-code>
<div id="motion-effect-example-1">
  <table class="charts-css column show-labels show-primary-axis show-5-secondary-axes data-spacing-5 hide-data">
    <caption> Motion Effect Example #1 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Dataset Opacity Effect

Reverse opacity effect when hovering over datasets:

```css
#motion-effect .column td {
  transition-duration: 0.3s;
  opacity: 0.5;
}
#motion-effect .column td:hover {
  opacity: 1;
}
```

<code-example code-example-id="motion-effect-example-2">
<template v-slot:css-code>
#motion-effect-example-2 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#motion-effect-example-2 .column {
  --aspect-ratio: 21 / 9;
}
#motion-effect-example-2 .column td {
  transition-duration: 0.3s;
  opacity: 0.5;
}
#motion-effect-example-2 .column td:hover {
  opacity: 1;
}
</template>
<template v-slot:html-code>
<div id="motion-effect-example-2">
  <table class="charts-css column multiple show-primary-axis show-data-axes data-spacing-20 hide-data">
    <caption> Motion Effect Example #2 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
        <th scope="col"> Progress 4 </th>
        <th scope="col"> Progress 5 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Scale Data

Scale the data when hovering over the data elements:

```css
#motion-effect .column td .data {
  transition-duration: 0.6s;
  transform: scale(0);
}
#motion-effect .column td:hover .data {
  transform: scale(1);
}
```

<code-example code-example-id="motion-effect-example-3">
<template v-slot:css-code>
#motion-effect-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#motion-effect-example-3 .column {
  --aspect-ratio: 4 / 3;
}
#motion-effect-example-3 .column td .data {
  transition-duration: 0.6s;
  transform: scale(0);
}
#motion-effect-example-3 .column td:hover .data {
  transform: scale(1);
}
</template>
<template v-slot:html-code>
<div id="motion-effect-example-3">
  <table class="charts-css column show-primary-axis show-5-secondary-axes data-spacing-5">
    <caption> Motion Effect Example #3 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Grayscale Chart

Grayscale colors the chart when visitors hover over it:

```css
#motion-effect .column {
  transition-duration: 1s;
  filter: grayscale(100%);
}
#motion-effect .column:hover {
  filter: none;
}
```

<code-example code-example-id="motion-effect-example-4">
<template v-slot:css-code>
#motion-effect-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#motion-effect-example-4 .column {
  --aspect-ratio: 4 / 3;
  transition-duration: 1s;
  filter: grayscale(100%);
}
#motion-effect-example-4 .column:hover {
  filter: none;
}
</template>
<template v-slot:html-code>
<div id="motion-effect-example-4">
  <table class="charts-css column show-primary-axis show-5-secondary-axes data-spacing-10 hide-data">
    <caption> Motion Effect Example #4 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.6"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.8"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Scroll Effect

Show only part of the data, and allow the user to scroll to view the rest of the data:

```css
#motion-effect {
  --total-cells: 11;
  --display-cells: 6;
  --cell-size: 50px;

  width: 100%;
  max-width: calc( var( --cell-size ) * var( --display-cells ) );
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}
#motion-effect .column {
  --aspect-ratio: auto;
  height: 250px;
  width: calc( var( --cell-size ) * var( --total-cells ) );
}
```

<code-example code-example-id="motion-effect-example-5">
<template v-slot:css-code>
#motion-effect-example-5 {
  --total-cells: 11;
  --display-cells: 6;
  --cell-size: 50px;
  width: 100%;
  max-width: calc( var( --cell-size ) * var( --display-cells ) );
  margin: 0 auto;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}
#motion-effect-example-5 .column {
  --aspect-ratio: auto;
}
#motion-effect-example-5 .column tbody {
  height: 250px;
  width: calc( var( --cell-size ) * var( --total-cells ) );
}
</template>
<template v-slot:html-code>
<div id="motion-effect-example-5">
  <table class="charts-css column show-labels show-primary-axis show-4-secondary-axes show-data-axes hide-data">
    <caption> Motion Effect Example #5 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2015 </th>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0;"> <span class="data"> 0 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2021 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2022 </th>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2023 </th>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2024 </th>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2025 </th>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>
