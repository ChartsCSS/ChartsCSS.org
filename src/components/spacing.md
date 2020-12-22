---
permalink: /components/spacing/
---

# Spacing

Spacing refers to the space between the data items and between the datasets.

## Add Data Spacing

When using a single datasets table, sometimes we want to add space between the items. Use the `.data-spacing-*` class to add spacing to the data.

```html
<table class="charts-css column data-spacing-5">
  ...
</table>
```

Note that it adds paddings to `<tr>` elements.

<code-example code-example-id="spacing-example-1">
<template v-slot:css-code>
#spacing-example-1 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data data-spacing-5" id="spacing-example-1">

  <caption> Spacing Example #1 </caption>

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
</template>
</code-example>

## Add Dataset Spacing

When using a multiple datasets, we can use the `.datasets-spacing-*` class to add spacing between datasets.

```html
<table class="charts-css column multiple data-spacing-20 datasets-spacing-4">
  ...
</table>
```

Note that it adds margins to `<td>` elements.

<code-example code-example-id="spacing-example-2">
<template v-slot:css-code>
#spacing-example-2 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4" id="spacing-example-2">

  <caption> Spacing Example #2 </caption>

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
</template>
</code-example>
