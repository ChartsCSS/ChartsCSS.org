---
permalink: /customization/3d-effects/
---

# 3D Effects

A 3D effect can be applied to the charts to give it depth. There are several techniques to achieve this.

## 3D Bars

To create 3D bars is pretty simple. It can be done using the CSS `box-shadow` property:

```css
#custom-effect .column tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
```

<code-example code-example-id="effect-example-1">
<template v-slot:css-code>
#effect-example-1 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#effect-example-1 .column {
  --aspect-ratio: 4 / 3;
}
#effect-example-1 .column tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
</template>
<template v-slot:html-code>
<div id="effect-example-1">
  <table class="charts-css column hide-data">
    <caption> 3D Effect Example #1 </caption>
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

Or by using `:before` and `:after` pseudo-elements combined with the CSS `skew()` transformation:

```css
#custom-effect .column .column tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
}
#custom-effect .column .column tbody td:before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 100%;
  height: 10px;
  transform: skewX(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
#custom-effect .column .column tbody td:after {
  content: '';
  position: absolute;
  top: -4px;
  right: -10px;
  width: 10px;
  height: 100%;
  transform: skewY(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
```

<code-example code-example-id="effect-example-2">
<template v-slot:css-code>
#effect-example-2 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#effect-example-2 .column {
  --aspect-ratio: 4 / 3;
}
#effect-example-2 .column tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
}
#effect-example-2 .column tbody td:before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 100%;
  height: 10px;
  transform: skewX(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
#effect-example-2 .column tbody td:after {
  content: '';
  position: absolute;
  top: -4px;
  right: -10px;
  width: 10px;
  height: 100%;
  transform: skewY(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
</template>
<template v-slot:html-code>
<div id="effect-example-2">
  <table class="charts-css column hide-data">
    <caption> 3D Effect Example #2 </caption>
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

## 3D Cylinders

To make the bars look like 3D cylinders, use the CSS  `border-radius` property:

```css
#custom-effect .column tbody td {
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  border-radius: 50% / 12px;
  background:
    radial-gradient(ellipse 60% 15px at bottom, grey 50px, transparent 50px) bottom,
    radial-gradient(ellipse 60% 15px at top, lightgrey 50px, transparent 50px) top,
    linear-gradient(grey, darkgrey, lightgrey);
}
```

<code-example code-example-id="effect-example-3">
<template v-slot:css-code>
#effect-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#effect-example-3 .column {
  --aspect-ratio: 4 / 3;
}
#effect-example-3 .column tbody td {
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  border-radius: 50% / 12px;
  background:
    radial-gradient(ellipse 60% 15px at bottom, grey 50px, transparent 50px) bottom,
    radial-gradient(ellipse 60% 15px at top, lightgrey 50px, transparent 50px) top,
    linear-gradient(grey, darkgrey, lightgrey);
}
</template>
<template v-slot:html-code>
<div id="effect-example-3">
  <table class="charts-css column hide-data">
    <caption> 3D Effect Example #3 </caption>
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

## Tilt Chart

Another way to make your chart look 3D is to tilt the entire `<table>` element using the CSS `skew()` transformation:

```css
#custom-effect .column {
  margin: 1.5rem auto;
  transform: skewY(20deg);
}
#custom-effect .column tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
```

<code-example code-example-id="effect-example-4">
<template v-slot:css-code>
#effect-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#effect-example-4 .column {
  --aspect-ratio: 4 / 3;
  margin: 1.5rem auto;
  transform: skewY(20deg);
}
#effect-example-4 .column tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
</template>
<template v-slot:html-code>
<div id="effect-example-4">
  <table class="charts-css column">
    <caption> 3D Effect Example #4 </caption>
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

Or tilt the cylinder bars the other way:

```css
#custom-effect .column {
  margin: 1.5rem auto;
  transform: skewY(-8deg);
}
#custom-effect .column tbody td {
  margin-inline-start: 20%;
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  border-radius: 50% / 12px;
  background:
    radial-gradient(ellipse 60% 15px at bottom, grey 50px, transparent 50px) bottom,
    radial-gradient(ellipse 60% 15px at top, lightgrey 50px, transparent 50px) top,
    linear-gradient(grey, darkgrey, lightgrey);
  box-shadow: 2px  2px 5px grey;
}
```

<code-example code-example-id="effect-example-5">
<template v-slot:css-code>
#effect-example-5 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#effect-example-5 .column {
  --aspect-ratio: 4 / 3;
  margin: 1.5rem auto;
  transform: skewY(-8deg);
}
#effect-example-5 .column tbody td {
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  border-radius: 50% / 12px;
  background:
    radial-gradient(ellipse 60% 15px at bottom, grey 50px, transparent 50px) bottom,
    radial-gradient(ellipse 60% 15px at top, lightgrey 50px, transparent 50px) top,
    linear-gradient(grey, darkgrey, lightgrey);
  box-shadow: 2px  2px 5px grey;
}
</template>
<template v-slot:html-code>
<div id="effect-example-5">
  <table class="charts-css column hide-data">
    <caption> 3D Effect Example #5 </caption>
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

## Chart Reflection

Use the webkit reflect effect to highlight the chart:

```css
#custom-effect .column {
  margin: 0 auto 100px;
  -webkit-box-reflect:
    below
    3px
    -webkit-gradient(
      linear,
      left top,
      left bottom,
      from( transparent ),
      color-stop( 10%, transparent ),
      to( rgba( 255, 255, 255, 0.25 ) )
  );
}
```

<code-example code-example-id="effect-example-6">
<template v-slot:css-code>
#effect-example-6 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#effect-example-6 .column {
  --aspect-ratio: 4 / 3;
  margin: 0 auto 100px;
  -webkit-box-reflect:
    below
    3px
    -webkit-gradient(
      linear,
      left top,
      left bottom,
      from( transparent ),
      color-stop( 10%, transparent ),
      to( rgba( 255, 255, 255, 0.25 ) )
  );
}
</template>
<template v-slot:html-code>
<div id="effect-example-6">
  <table class="charts-css column labels-hide">
    <caption> 3D Effect Example #6 </caption>
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

## Charts with Shadows

Using shadows is another good way to create 3D effects:

```css
#custom-effect .column tbody {
  padding: 30px;
  border-radius: 10px;
  box-shadow:
    inset -5px -5px 10px rgba(0, 0, 0, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.5);
}
#custom-effect .column tbody td {
  margin-inline: 10px;
  border-radius: 10px;
  box-shadow:
    inset -5px -5px 10px rgba(0, 0, 0, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.5);
}
```

<code-example code-example-id="effect-example-7">
<template v-slot:css-code>
#effect-example-7 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#effect-example-7 .column {
  --aspect-ratio: 4 / 3;
}
#effect-example-7 .column tbody {
  padding: 30px;
  border-radius: 10px;
  box-shadow:
    inset -5px -5px 10px rgba(0, 0, 0, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.5);
}
#effect-example-7 .column tbody td {
  margin-inline: 10px;
  border-radius: 10px;
  box-shadow:
    inset -5px -5px 10px rgba(0, 0, 0, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.5);
}
</template>
<template v-slot:html-code>
<div id="effect-example-7">
  <table class="charts-css column hide-data">
    <caption> 3D Effect Example #7 </caption>
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
