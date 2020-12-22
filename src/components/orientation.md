---
permalink: /components/orientation/
---

# Orientation

The orientation sets the general direction of the chart.

## Reverse Orientation

Each chart has an initial orientation. Column charts display data from bottom to top. Bar charts display data from left to right (in LTR languages) and from right to left in RTL languages.

You can reverse the initial orientation using the `.reverse` class.

It does not matter what's your language writing direction, left-to-right (LTR), right-to-left (RTL) or top-to-bottom (TTB), the `.reverse` class will reverse the initial orientation.

```html
<table class="charts-css bar reverse">
  ...
</table>
```

Bar chart with a regular orientation and a reverse orientation:

<v-row>

<code-example code-example-id="orientation-example-1">
<template v-slot:css-code>
#orientation-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar" id="orientation-example-1">

  <caption> Orientation Example #1 </caption>

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

<code-example code-example-id="orientation-example-2">
<template v-slot:css-code>
#orientation-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css bar reverse" id="orientation-example-2">

  <caption> Orientation Example #2 </caption>

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

<br>

Column chart with a regular orientation and a reverse orientation:

<v-row>

<code-example code-example-id="orientation-example-3">
<template v-slot:css-code>
#orientation-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column" id="orientation-example-3">

  <caption> Orientation Example #3 </caption>

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

<code-example code-example-id="orientation-example-4">
<template v-slot:css-code>
#orientation-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column reverse" id="orientation-example-4">

  <caption> Orientation Example #4 </caption>

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

<br>

Area chart with a regular orientation and a reverse orientation:

<v-row>

<code-example code-example-id="orientation-example-5">
<template v-slot:css-code>
#orientation-example-5 {
  height: 170px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area" id="orientation-example-5">

  <caption> Orientation Example #5 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--start: 0.2; --size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--start: 0.4; --size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--start: 0.8; --size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--start: 0.6; --size: 1.0"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start: 1.0; --size: 0.3"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="orientation-example-6">
<template v-slot:css-code>
#orientation-example-6 {
  height: 170px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area reverse" id="orientation-example-6">

  <caption> Orientation Example #6 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--start: 0.2; --size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--start: 0.4; --size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--start: 0.8; --size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--start: 0.6; --size: 1.0"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--start: 1.0; --size: 0.3"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

</v-row>
