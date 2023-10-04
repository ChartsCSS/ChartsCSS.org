---
permalink: /components/orientation/
---

# Orientation

The orientation sets the direction of the chart components without changing the HTML markup.

## Orientation System

The orientation system is a core functionality which help you reorder chart elements with simple CSS utility classes.

### Reordering Elements

Generally speaking, **Charts.css** doesn't deal with data - it only styles the data by positioning different HTML element.

To reorder elements you can simply change the HTML table structure. However, with large datasets it requires a lot of manual work. In these cases, **Charts.css** offers CSS utility classes that change the elements order without changing the HTML markup.

<!-- Note that before changing content order inside your **Charts.css** table, make sure there are no focusable elements (`<button>`, `<a>` etc.) in the table as this can be confusing for users using a keyboard. -->

### Orientation Classes

The orientation system supports the following classes:

* `.reverse` - Reverse the general direction of the chart.
* `.reverse-labels` - Reverse the labels position.
* `.reverse-data` - Reverse the order of the data items, when using a single dataset.
* `.reverse-datasets` - Reverse the order of the data items, when using multiple datasets.

Charts may combine multiple orientation classes.

## Reverse Orientation

Each chart has an initial orientation. Column charts display data from top to bottom. Bar charts display data from left to right in LTR languages and from right to left in RTL languages.

Reverse the initial orientation of any chart using the `.reverse` class.

No matter what writing direction the page uses - left-to-right (LTR), right-to-left (RTL) or top-to-bottom (TTB) - the `.reverse` class will reverse the initial orientation of the chart.

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
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-1 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-1">
  <table class="charts-css bar show-heading">
    <caption> Bar chart </caption>
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

<code-example code-example-id="orientation-example-2">
<template v-slot:css-code>
#orientation-example-2 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-2 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-2">
  <table class="charts-css bar show-heading reverse">
    <caption> Reversed bar chart </caption>
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

Column chart with a regular orientation and a reverse orientation:

<v-row>

<code-example code-example-id="orientation-example-3">
<template v-slot:css-code>
#orientation-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-3 .column tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-3">
  <table class="charts-css column show-heading">
    <caption> Column chart </caption>
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

<code-example code-example-id="orientation-example-4">
<template v-slot:css-code>
#orientation-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-4 .column tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-4">
  <table class="charts-css column show-heading reverse">
    <caption> Reversed column chart </caption>
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

Area chart with a regular orientation and a reverse orientation:

<v-row>

<code-example code-example-id="orientation-example-5">
<template v-slot:css-code>
#orientation-example-5 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-5 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-5">
  <table class="charts-css area show-heading">
    <caption> Area chart </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="orientation-example-6">
<template v-slot:css-code>
#orientation-example-6 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-6 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-6">
  <table class="charts-css area show-heading reverse">
    <caption> Reversed area chart </caption>
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
</div>
</template>
</code-example>

</v-row>

## Reverse Labels

Labels positioned along the chart primary axis. The primary axis depends on the page writing direction and whether the chart orientation is reversed on not.

Charts with reversed labels position the label where the data ends, rather where the data starts.

To reverse the initial orientation of the labels use the `.reverse-labels` class.

```html
<table class="charts-css bar reverse-labels">
  ...
</table>
```

Bar chart with a combination of reversed orientation and reversed labels:

<v-row>

<code-example code-example-id="orientation-example-7">
<template v-slot:css-code>
#orientation-example-7 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-7 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-7">
  <table class="charts-css bar show-heading show-labels">
    <caption> Bar chart </caption>
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

<code-example code-example-id="orientation-example-8">
<template v-slot:css-code>
#orientation-example-8 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-8 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-8">
  <table class="charts-css bar show-heading show-labels reverse">
    <caption> Reversed bar chart </caption>
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

<v-row>

<code-example code-example-id="orientation-example-9">
<template v-slot:css-code>
#orientation-example-9 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-9 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-9">
  <table class="charts-css bar show-heading show-labels reverse-labels">
    <caption> Bar chart with reversed labels </caption>
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

<code-example code-example-id="orientation-example-10">
<template v-slot:css-code>
#orientation-example-10 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-10 .bar tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-10">
  <table class="charts-css bar show-heading show-labels reverse reverse-labels">
    <caption> Reversed bar chart with reversed labels </caption>
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

Column chart with a combination of reversed orientation and reversed labels:

<v-row>

<code-example code-example-id="orientation-example-11">
<template v-slot:css-code>
#orientation-example-11 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-11 .column tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-11">
  <table class="charts-css column show-heading show-labels">
    <caption> Column chart </caption>
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

<code-example code-example-id="orientation-example-12">
<template v-slot:css-code>
#orientation-example-12 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-12 .column tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-12">
  <table class="charts-css column show-heading show-labels reverse">
    <caption> Reversed column chart </caption>
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

<v-row>

<code-example code-example-id="orientation-example-13">
<template v-slot:css-code>
#orientation-example-13 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-13 .column tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-13">
  <table class="charts-css column show-heading show-labels reverse-labels">
    <caption> Column chart with reversed labels </caption>
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

<code-example code-example-id="orientation-example-14">
<template v-slot:css-code>
#orientation-example-14 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-14 .column tbody {
  aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-14">
  <table class="charts-css column show-heading show-labels reverse reverse-labels">
    <caption> Reversed column chart with reversed labels </caption>
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

Area chart with a combination of reversed orientation and reversed labels:

<v-row>

<code-example code-example-id="orientation-example-15">
<template v-slot:css-code>
#orientation-example-15 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-15 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-15">
  <table class="charts-css area show-heading show-labels">
    <caption> Area chart </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="orientation-example-16">
<template v-slot:css-code>
#orientation-example-16 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-16 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-16">
  <table class="charts-css area show-heading show-labels reverse">
    <caption> Reversed area chart </caption>
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
</div>
</template>
</code-example>

</v-row>

<v-row>

<code-example code-example-id="orientation-example-17">
<template v-slot:css-code>
#orientation-example-17 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-17 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-17">
  <table class="charts-css area show-heading show-labels reverse-labels">
    <caption> Area chart with reversed labels </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="orientation-example-18">
<template v-slot:css-code>
#orientation-example-18 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#orientation-example-18 .area tbody {
  aspect-ratio: 16 / 9;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-18">
  <table class="charts-css area show-heading show-labels reverse-labels reverse">
    <caption> Reversed area chart with reversed labels </caption>
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
</div>
</template>
</code-example>

</v-row>

### Population Pyramid Chart

With the help of `.reverse-labels` class, it's now possible to create a "Population Pyramid Chart" (also known as "Age Structure Diagram"). By combining two bar charts with reversed labels side by side, one with regular the other with reversed orientation, you can get beautifull pyramid chart.

```html
<div id="population-pyramid-chart">

  <table class="charts-css bar show-labels reverse-labels reverse male">
    ...
  </table>

  <table class="charts-css bar show-labels reverse-labels female">
    ...
  </table>

</div>
```

```css
#population-pyramid-chart {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
}
#population-pyramid-chart .bar tbody {
  aspect-ratio: 1 / 1;
}
#population-pyramid-chart .bar.male {
  --color: rgba(100, 210, 80, .75);
}
#population-pyramid-chart .bar.female {
  --color: rgba(240, 50, 50, .75);
}
```

<code-example code-example-id="orientation-example-19">
<template v-slot:css-code>
#orientation-example-19 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
}
#orientation-example-19 .bar tbody {
  aspect-ratio: 1 / 1;
}
#orientation-example-19 .bar.male {
  --color: rgba(100, 210, 80, .75);
}
#orientation-example-19 .bar.female {
  --color: rgba(240, 50, 50, .75);
}
</template>
<template v-slot:html-code>
<div id="orientation-example-19">
  <table class="charts-css bar show-heading show-labels show-data-on-hover data-outside data-spacing-1 reverse-labels reverse male">
    <caption> Male population </caption>
    <thead>
      <tr>
        <th scope="col"> Age </th>
        <th scope="col"> Population </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 85+ </th>
        <td style="--size: calc( 0.010 / 0.10 )"> <span class="data outside">1.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 75-84 </th>
        <td style="--size: calc( 0.020 / 0.10 )"> <span class="data">2.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 65-74 </th>
        <td style="--size: calc( 0.037 / 0.10 )"> <span class="data">3.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 55-64 </th>
        <td style="--size: calc( 0.042 / 0.10 )"> <span class="data">4.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 45-54 </th>
        <td style="--size: calc( 0.054 / 0.10 )"> <span class="data">5.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 35-44 </th>
        <td style="--size: calc( 0.062 / 0.10 )"> <span class="data">6.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 25-34 </th>
        <td style="--size: calc( 0.065 / 0.10 )"> <span class="data">6.5%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 15-24 </th>
        <td style="--size: calc( 0.074 / 0.10 )"> <span class="data">7.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 5-14 </th>
        <td style="--size: calc( 0.089 / 0.10 )"> <span class="data">8.9%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 0-4 </th>
        <td style="--size: calc( 0.048 / 0.10 )"> <span class="data">4.8%</span> </td>
      </tr>
    </tbody>
  </table>
  <table class="charts-css bar show-heading show-labels show-data-on-hover data-outside data-spacing-1 reverse-labels female">
    <caption> Female population </caption>
    <thead>
      <tr>
        <th scope="col"> Age </th>
        <th scope="col"> Population </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 85+ </th>
        <td style="--size: calc( 0.007 / 0.10 )"> <span class="data outside">0.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 75-84 </th>
        <td style="--size: calc( 0.016 / 0.10 )"> <span class="data">1.6%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 65-74 </th>
        <td style="--size: calc( 0.032 / 0.10 )"> <span class="data">3.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 55-64 </th>
        <td style="--size: calc( 0.040 / 0.10 )"> <span class="data">4.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 45-54 </th>
        <td style="--size: calc( 0.053 / 0.10 )"> <span class="data">5.3%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 35-44 </th>
        <td style="--size: calc( 0.064 / 0.10 )"> <span class="data">6.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 25-34 </th>
        <td style="--size: calc( 0.067 / 0.10 )"> <span class="data">6.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 15-24 </th>
        <td style="--size: calc( 0.077 / 0.10 )"> <span class="data">7.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 5-14 </th>
        <td style="--size: calc( 0.094 / 0.10 )"> <span class="data">9.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 0-4 </th>
        <td style="--size: calc( 0.050 / 0.10 )"> <span class="data">5.0%</span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

To make it even more informative, each age group can be splitted to sub categories and display as [stacked chart](./stacked/).

<code-example code-example-id="orientation-example-20">
<template v-slot:css-code>
#orientation-example-20 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
}
#orientation-example-20 .bar tbody {
  aspect-ratio: 1 / 1;
}
#orientation-example-20 .bar.male {
  --color-1: rgba(90, 165, 255, .75);
  --color-2: rgba(90, 165, 255, .5);
}
#orientation-example-20 .bar.female {
  --color-1: rgba(255, 180, 50, .75);
  --color-2: rgba(255, 180, 50, .5);
}
</template>
<template v-slot:html-code>
<div id="orientation-example-20">
  <table class="charts-css bar multiple stacked show-heading show-labels hide-data data-spacing-1 reverse-labels reverse male">
    <caption> Male population </caption>
    <thead>
      <tr>
        <th scope="col"> Age </th>
        <th scope="col"> Population </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 85+ </th>
        <td style="--size: calc( 0.002 / 0.10 )"> <span class="tooltip">0.02%</span> </td>
        <td style="--size: calc( 0.000 / 0.10 )"> <span class="tooltip">0.00%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 75-84 </th>
        <td style="--size: calc( 0.007 / 0.10 )"> <span class="tooltip">0.07%</span> </td>
        <td style="--size: calc( 0.002 / 0.10 )"> <span class="tooltip">0.02%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 65-74 </th>
        <td style="--size: calc( 0.022 / 0.10 )"> <span class="tooltip">2.2%</span> </td>
        <td style="--size: calc( 0.005 / 0.10 )"> <span class="tooltip">0.5%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 55-64 </th>
        <td style="--size: calc( 0.035 / 0.10 )"> <span class="tooltip">3.5%</span> </td>
        <td style="--size: calc( 0.007 / 0.10 )"> <span class="tooltip">0.7%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 45-54 </th>
        <td style="--size: calc( 0.054 / 0.10 )"> <span class="tooltip">5.4%</span> </td>
        <td style="--size: calc( 0.010 / 0.10 )"> <span class="tooltip">1.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 35-44 </th>
        <td style="--size: calc( 0.084 / 0.10 )"> <span class="tooltip">8.4%</span> </td>
        <td style="--size: calc( 0.009 / 0.10 )"> <span class="tooltip">0.9%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 25-34 </th>
        <td style="--size: calc( 0.080 / 0.10 )"> <span class="tooltip">8.0%</span> </td>
        <td style="--size: calc( 0.005 / 0.10 )"> <span class="tooltip">0.5%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 15-24 </th>
        <td style="--size: calc( 0.060 / 0.10 )"> <span class="tooltip">6.0%</span> </td>
        <td style="--size: calc( 0.006 / 0.10 )"> <span class="tooltip">0.6%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 5-14 </th>
        <td style="--size: calc( 0.073 / 0.10 )"> <span class="tooltip">7.3%</span> </td>
        <td style="--size: calc( 0.010 / 0.10 )"> <span class="tooltip">1.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 0-4 </th>
        <td style="--size: calc( 0.030 / 0.10 )"> <span class="tooltip">3.0%</span> </td>
        <td style="--size: calc( 0.008 / 0.10 )"> <span class="tooltip">0.8%</span> </td>
      </tr>
    </tbody>
  </table>
  <table class="charts-css bar multiple stacked show-heading show-labels hide-data data-spacing-1 reverse-labels female">
    <caption> Female population </caption>
    <thead>
      <tr>
        <th scope="col"> Age </th>
        <th scope="col"> Population </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 85+ </th>
        <td style="--size: calc( 0.003 / 0.10 )"> <span class="tooltip">0.3%</span> </td>
        <td style="--size: calc( 0.000 / 0.10 )"> <span class="tooltip">0.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 75-84 </th>
        <td style="--size: calc( 0.009 / 0.10 )"> <span class="tooltip">0.9%</span> </td>
        <td style="--size: calc( 0.002 / 0.10 )"> <span class="tooltip">0.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 65-74 </th>
        <td style="--size: calc( 0.023 / 0.10 )"> <span class="tooltip">2.3%</span> </td>
        <td style="--size: calc( 0.004 / 0.10 )"> <span class="tooltip">0.4%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 55-64 </th>
        <td style="--size: calc( 0.037 / 0.10 )"> <span class="tooltip">3.7%</span> </td>
        <td style="--size: calc( 0.006 / 0.10 )"> <span class="tooltip">0.6%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 45-54 </th>
        <td style="--size: calc( 0.053 / 0.10 )"> <span class="tooltip">5.3%</span> </td>
        <td style="--size: calc( 0.010 / 0.10 )"> <span class="tooltip">1.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 35-44 </th>
        <td style="--size: calc( 0.080 / 0.10 )"> <span class="tooltip">8.0%</span> </td>
        <td style="--size: calc( 0.012 / 0.10 )"> <span class="tooltip">1.2%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 25-34 </th>
        <td style="--size: calc( 0.075 / 0.10 )"> <span class="tooltip">7.5%</span> </td>
        <td style="--size: calc( 0.008 / 0.10 )"> <span class="tooltip">0.8%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 15-24 </th>
        <td style="--size: calc( 0.053 / 0.10 )"> <span class="tooltip">5.3%</span> </td>
        <td style="--size: calc( 0.010 / 0.10 )"> <span class="tooltip">1.0%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 5-14 </th>
        <td style="--size: calc( 0.070 / 0.10 )"> <span class="tooltip">7.0%</span> </td>
        <td style="--size: calc( 0.009 / 0.10 )"> <span class="tooltip">0.9%</span> </td>
      </tr>
      <tr>
        <th scope="row"> 0-4 </th>
        <td style="--size: calc( 0.030 / 0.10 )"> <span class="tooltip">3.0%</span> </td>
        <td style="--size: calc( 0.006 / 0.10 )"> <span class="tooltip">0.6%</span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Reverse Data Order

When using a single dataset (one `<td>` in each `<tr>`), use the `.reverse-data` class to reverse the order of the data items.

```html
<table class="charts-css column reverse-data">
  ...
</table>
```

<code-example code-example-id="orientation-example-21">
<template v-slot:css-code>
#orientation-example-21 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-21">
  <table class="charts-css column show-heading show-labels hide-data">
    <caption> <strong> Column chart </strong> </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="orientation-example-22">
<template v-slot:css-code>
#orientation-example-22 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-22">
  <table class="charts-css column show-heading show-labels hide-data reverse-data">
    <caption> <strong> Reversed data column chart </strong> </caption>
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
</div>
</template>
</code-example>

## Reverse Datasets Order

When using multiple datasets (several `<td>` elements in each `<tr>`), use the `.reverse-datasets` class to reverse the order of the datasets.

```html
<table class="charts-css column reverse-datasets">
  ...
</table>
```

<code-example code-example-id="orientation-example-23">
<template v-slot:css-code>
#orientation-example-23 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-23">
  <table class="charts-css column multiple show-heading show-labels hide-data show-data-axes data-spacing-10 datasets-spacing-4">
    <caption> <strong> Column chart </strong> </caption>
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
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="orientation-example-24">
<template v-slot:css-code>
#orientation-example-24 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-24">
  <table class="charts-css column multiple show-heading show-labels hide-data show-data-axes data-spacing-10 datasets-spacing-4 reverse-datasets">
    <caption> <strong> Reversed datasets column chart </strong> </caption>
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
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Reverse Data & Datasets Order

Combine the two classes to reverse the data order and the datasets order.

```html
<table class="charts-css column reverse-data reverse-datasets">
  ...
</table>
```

<code-example code-example-id="orientation-example-25">
<template v-slot:css-code>
#orientation-example-25 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-25">
  <table class="charts-css column multiple show-heading show-labels hide-data show-data-axes data-spacing-10 datasets-spacing-4">
    <caption> <strong> Column chart </strong> </caption>
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
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="orientation-example-26">
<template v-slot:css-code>
#orientation-example-26 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="orientation-example-26">
  <table class="charts-css column multiple show-heading show-labels hide-data show-data-axes data-spacing-10 datasets-spacing-4 reverse-data reverse-datasets">
    <caption> <strong> Reversed data & datasets column chart </strong> </caption>
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
        <th scope="row"> 2000 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>
