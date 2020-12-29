---
permalink: /customization/motion-effects/
---

# Motion Effects

Motion effects enhance your charts when users interact with elements using [mouse](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) or [touch](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) events. The simplest example is CSS hover effects. You can add motion effects when the mouse hovers over the entire chart or an individual inner element. Use your imagination and CSS skills to create beautiful interaction effects.

Here are some basic examples leveraging CSS `:hover` pseudo-class.

## Data Hover Effect

A simple background color change when the user hovers over data items:

```css
#motion-effect tr {
  transition-duration: 0.3s;
}
#motion-effect tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
#motion-effect tr:hover th {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
```

<code-example code-example-id="motion-effect-example-1">
<template v-slot:css-code>
#motion-effect-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
#motion-effect-example-1 tr {
  transition-duration: 0.3s;
}
#motion-effect-example-1 tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
#motion-effect-example-1 tr:hover th {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-primary-axis show-5-secondary-axes data-spacing-5 hide-data" id="motion-effect-example-1">

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
</template>
</code-example>

## Dataset Opacity Effect

Reverse opacity effect when hovering over datasets:

```css
#motion-effect td {
  transition-duration: 0.3s;
  opacity: 0.5;
}
#motion-effect td:hover {
  opacity: 1;
}
```

<code-example code-example-id="motion-effect-example-2">
<template v-slot:css-code>
#motion-effect-example-2 {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#motion-effect-example-2 td {
  transition-duration: 0.3s;
  opacity: 0.5;
}
#motion-effect-example-2 td:hover {
  opacity: 1;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-primary-axis show-data-axes data-spacing-20 hide-data" id="motion-effect-example-2">

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
</template>
</code-example>

## Scale Data

You can scale the data when hovering over the chart.

```css
#motion-effect td .data {
  transition-duration: 0.6s;
  transform: scale(0);
}
#motion-effect td:hover .data {
  transform: scale(1);
}
```

<code-example code-example-id="motion-effect-example-3">
<template v-slot:css-code>
#motion-effect-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
#motion-effect-example-3 td .data {
  transition-duration: 0.6s;
  transform: scale(0);
}
#motion-effect-example-3 td:hover .data {
  transform: scale(1);
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-primary-axis show-5-secondary-axes data-spacing-5" id="motion-effect-example-3">

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
</template>
</code-example>

## Grayscale Chart


My favorite effect is the grayscale effect. The chart becomes colorful only when the user hovers over chart.

```css
#motion-effect {
  transition-duration: 1s;
  filter: grayscale(100%);
}
#motion-effect:hover {
  filter: none;
}
```

<code-example code-example-id="motion-effect-example-4">
<template v-slot:css-code>
#motion-effect-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  transition-duration: 1s;
  filter: grayscale(100%);
}
#motion-effect-example-4:hover {
  filter: none;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-primary-axis show-5-secondary-axes data-spacing-10 hide-data" id="motion-effect-example-4">

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
</template>
</code-example>
