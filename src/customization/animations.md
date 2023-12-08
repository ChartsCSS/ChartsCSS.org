---
permalink: /customization/animations/
next: ../../development/
---

# Animations

Animating charts draws visitor's attention and can highlight important information. Use CSS `@keyframes` to animate elements without using JavaScript.

## Jumping Bars

Here is a basic example where the bars (`<td>` elements) jump every three seconds:

```css
#animations-example .column td {
  animation: jumping-bars 3s linear infinite;
}
#animations-example .column tr:nth-of-type(even) td {
  animation-delay: 300ms;
}
@keyframes jumping-bars {
  0% { transform: translateY(   0px ); }
  2% { transform: translateY( -10px ); }
  4% { transform: translateY(   0px ); }
}
```

<code-example code-example-id="animations-example-1">
<template v-slot:css-code>
#animations-example-1 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#animations-example-1 .column {
  --aspect-ratio: 4 / 3;
}
#animations-example-1 .column td {
  animation: jumping-bars 3s linear infinite;
  animation-delay: 0;
}
#animations-example-1 .column tr:nth-of-type(even) td {
  animation-delay: 300ms;
}
@keyframes jumping-bars {
  0% { transform: translateY(   0px ); }
  2% { transform: translateY( -10px ); }
  4% { transform: translateY(   0px ); }
}
</template>
<template v-slot:html-code>
<div id="animations-example-1">
  <table class="charts-css column hide-data show-labels show-primary-axis data-spacing-6">
    <caption> Animation Example #1 </caption>
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

## Spinning Labels

Here is another simple example using labels (`<th>` elements) that spin every three seconds:

```css
#animations-example .bar th {
  animation: spin-labels 2s linear infinite;
}
@keyframes spin-labels {
  0%   { transform: rotateX(   0deg ); }
  50%  { transform: rotateX( 360deg ); }
  100% { transform: rotateX( 360deg ); }
}
```

<code-example code-example-id="animations-example-2">
<template v-slot:css-code>
#animations-example-2 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#animations-example-2 .bar {
  --labels-size: 160px;
}
#animations-example-2 .bar td {
  line-height: 1.5;
}
#animations-example-2 .bar th {
  animation: spin-labels 2s linear infinite;
}
@keyframes spin-labels {
  0%   { transform: rotateX(   0deg ); }
  50%  { transform: rotateX( 360deg ); }
  100% { transform: rotateX( 360deg ); }
}
</template>
<template v-slot:html-code>
<div id="animations-example-2">
  <table class="charts-css bar hide-data show-labels data-spacing-5 show-primary-axis">
    <caption> Animation Example #2 - The Richest People In America (Forbes 1918) </caption>
    <thead>
      <tr>
        <th scope="col"> Country </th>
        <th scope="col"> Gold </th>
        <th scope="col"> Silver </th>
        <th scope="col"> Silver </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> John D. Rockefeller </th>
        <td style="--size: calc( 1200 / 1200 );"> <span class="data"> 1,200 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Henry Clay Frick </th>
        <td style="--size: calc( 225 / 1200 );"> <span class="data"> 225 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Andrew Carnegie </th>
        <td style="--size: calc( 200 / 1200 );"> <span class="data"> 200 </span> </td>
      </tr>
      <tr>
        <th scope="row"> George Fisher Baker </th>
        <td style="--size: calc( 150 / 1200 );"> <span class="data"> 150 </span> </td>
      </tr>
      <tr>
        <th scope="row"> William Rockefeller </th>
        <td style="--size: calc( 150 / 1200 );"> <span class="data"> 150 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Rising Bars

In this example, the bars rise from the bottom of the chart:

```css
#animations-example .column tbody {
  overflow-y: hidden; /* remove this to see how it works */
}
#animations-example .column tbody th {
  background-color: #fff;
  z-index: 1;
}
#animations-example .column tbody td {
  animation: moving-bars 2s linear infinite;
}
@keyframes moving-bars {
  0%  { transform: translateY( 100% ); }
  30% { transform: translateY( 0 ); }
}
```

<code-example code-example-id="animations-example-3">
<template v-slot:css-code>
#animations-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#animations-example-3 .column {
  --aspect-ratio: 4 / 3;
}
#animations-example-3 .column tbody {
  overflow-y: hidden; /* remove this to see how it works */
}
#animations-example-3 .column tbody th {
  background-color: #fff;
  z-index: 1;
}
#animations-example-3 .column tbody td {
  animation: moving-bars 2s linear infinite;
}
@keyframes moving-bars {
  0%  { transform: translateY( 100% ); }
  30% { transform: translateY( 0 ); }
}
</template>
<template v-slot:html-code>
<div id="animations-example-3">
  <table class="charts-css column show-labels hide-data data-spacing-5 show-primary-axis">
    <caption> Animation Example #3 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--size: 0.8"> <span class="data"> 80 </span> </td>
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

The same can be done with less code using the CSS `scale()` transformation:

```css
#animations-example .column tbody td {
  transform-origin: bottom;
  animation: revealing-bars 2s linear infinite;
}
@keyframes revealing-bars {
  0%  { transform: scaleY( 0 ); }
  30% { transform: scaleY( 1 ); }
}
```

<code-example code-example-id="animations-example-4">
<template v-slot:css-code>
#animations-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#animations-example-4 .column {
  --aspect-ratio: 4 / 3;
}
#animations-example-4 .column tbody td {
  transform-origin: bottom;
  animation: revealing-bars 2s linear infinite;
}
@keyframes revealing-bars {
  0%  { transform: scaleY( 0 ); }
  30% { transform: scaleY( 1 ); }
}
</template>
<template v-slot:html-code>
<div id="animations-example-4">
  <table class="charts-css column show-labels hide-data data-spacing-5 show-primary-axis">
    <caption> Animation Example #4 </caption>
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

## Highlighting Data

A useful example of highlighting individual items with animations:

```html{3}
<tr>
  <th scope="row"> 2016 </th>
  <td style="--size: 1.0" class="highlighted">
    <span class="data"> 100 </span>
  </td>
</tr>
```

```css
#animations-example .highlighted {
  animation: highlighted-bar 2s linear infinite;
}
@keyframes highlighted-bar {
  0%   { box-shadow: none; }
  50%  { box-shadow: 0 0 1px 0 black, 0 0 20px 5px darkgrey; }
  100% { box-shadow: none; }
}
```

<code-example code-example-id="animations-example-5">
<template v-slot:css-code>
#animations-example-5 {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}
#animations-example-5 .column {
  --aspect-ratio: 4 / 3;
}
#animations-example-5 .highlighted {
  animation: highlighted-bar 2s linear infinite;
}
@keyframes highlighted-bar {
  0%   { box-shadow: none; }
  50%  { box-shadow: 0 0 1px 0 black, 0 0 20px 5px darkgrey; }
  100% { box-shadow: none; }
}
</template>
<template v-slot:html-code>
<div id="animations-example-5">
  <table class="charts-css column show-labels data-spacing-15 show-primary-axis">
    <caption> Animation Example #5 </caption>
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
        <td style="--size: 1.0" class="highlighted"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.5"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.3"> <span class="data"> 30 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Color Gradient Animation

Now lets animate colors with gradients:

```css
#animations-example .column td {
  background-image: linear-gradient(
    45deg,
    #956fd3,
    #e76ec2,
    #ff7fa2,
    #ffa782,
    #ffd86f,
    #faf982
  );
  background-size: 600%;
  animation: gradient-animation 3s linear infinite alternate;
}
@keyframes gradient-animation {
  0%   { background-position:   0%; }
  100% { background-position: 100%; }
}
```

<code-example code-example-id="animations-example-6">
<template v-slot:css-code>
#animations-example-6 {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}
#animations-example-6 .column {
  --aspect-ratio: 4 / 3;
}
#animations-example-6 .column td {
  background-image: linear-gradient(
    45deg,
    #956fd3,
    #e76ec2,
    #ff7fa2,
    #ffa782,
    #ffd86f,
    #faf982
  );
  background-size: 600%;
  animation: gradient-animation 3s linear infinite alternate;
}
@keyframes gradient-animation {
  0%   { background-position:   0%; }
  100% { background-position: 100%; }
}
</template>
<template v-slot:html-code>
<div id="animations-example-6">
  <table class="charts-css column show-labels hide-data data-spacing-5 show-primary-axis">
    <caption> Animation Example #6 </caption>
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
        <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.5"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.3"> <span class="data"> 30 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Chart Animation

Finally lets animate the chart:

```css
#animations-example .column {
  animation: chart-animation 2s ease-out infinite;
}
@keyframes chart-animation {
  0%   { transform: scale(1); }
  20%  { transform: scaleY(0.95) scaleX(1.05); }
  48%  { transform: scaleY(1.10) scaleX(0.90); }
  68%  { transform: scaleY(0.98) scaleX(1.02); }
  80%  { transform: scaleY(1.02) scaleX(0.98); }
  100% { transform: scale(1); }
}
```

<code-example code-example-id="animations-example-7">
<template v-slot:css-code>
#animations-example-7 {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}
#animations-example-7 .column {
  --aspect-ratio: 4 / 3;
  animation: chart-animation 2s ease-out infinite;
}
@keyframes chart-animation {
  0%   { transform: scale(1); }
  20%  { transform: scaleY(0.95) scaleX(1.05); }
  48%  { transform: scaleY(1.10) scaleX(0.90); }
  68%  { transform: scaleY(0.98) scaleX(1.02); }
  80%  { transform: scaleY(1.02) scaleX(0.98); }
  100% { transform: scale(1); }
}
</template>
<template v-slot:html-code>
<div id="animations-example-7">
  <table class="charts-css column show-labels hide-data data-spacing-5 show-primary-axis">
    <caption> Animation Example #7 </caption>
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
        <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--size: 0.5"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.3"> <span class="data"> 30 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>
