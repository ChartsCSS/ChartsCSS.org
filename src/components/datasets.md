---
permalink: /components/datasets/
---

# Datasets

Datasets are different series of data.

## Add Datasets

To add multiple datasets simply add more than one `<td>` tag to each of your `<tr>` tags.

```html{8-12,16-20}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: calc( 20 / 100 );"> <span class="data"> $ 20K </span> </td>
      <td style="--size: calc( 30 / 100 );"> <span class="data"> $ 30K </span> </td>
      <td style="--size: calc( 40 / 100 );"> <span class="data"> $ 40K </span> </td>
      <td style="--size: calc( 50 / 100 );"> <span class="data"> $ 50K </span> </td>
      <td style="--size: calc( 75 / 100 );"> <span class="data"> $ 75K </span> </td>
    </tr>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: calc( 40 / 100 );"> <span class="data"> $ 40K </span> </td>
      <td style="--size: calc( 60 / 100 );"> <span class="data"> $ 60K </span> </td>
      <td style="--size: calc( 75 / 100 );"> <span class="data"> $ 75K </span> </td>
      <td style="--size: calc( 90 / 100 );"> <span class="data"> $ 90K </span> </td>
      <td style="--size: calc( 100 / 100 );"> <span class="data"> $ 100K </span> </td>
    </tr>
  </tbody>

</table>
```

It is also recommended to add a [legend](/components/legend/) to describe the datasets.

```html
<ul class="charts-css legend">
  <li> 1st year </li>
  <li> 2nd year </li>
  <li> 3rd year </li>
  <li> 4th year </li>
  <li> 5th year </li>
</ul>
```

The result:

<code-example code-example-id="datasets-example-1">
<template v-slot:css-code>
#datasets-example-1 {
  height: 300px;
  max-width: 800px;
}
.legend {
  margin-block-start: 1rem;
  justify-content: center;
}
</template>
<template v-slot:html-code>
<div class="chart-container">

  <table class="charts-css column show-labels data-spacing-5 datasets-spacing-1" id="datasets-example-1">
    <caption> Front End Developer Salary </caption>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $ 20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $ 30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $ 40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $ 50K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $ 75K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $ 40K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $ 60K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $ 75K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $ 90K </span> </td>
        <td style="--size: calc( 100 / 100 );"> <span class="data"> $ 100K </span> </td>
      </tr>
    </tbody>
  </table>

  <ul class="charts-css legend legend-inline legend-square">
    <li> 1st year </li>
    <li> 2nd year </li>
    <li> 3rd year </li>
    <li> 4th year </li>
    <li> 5th year </li>
  </ul>

</div>
</template>
</code-example>

As you can see we have an issue with colors in our datasets. Continue reading to see how to solve it.

## Datasets Colors

By default, **Chart.css** assumes you use a single dataset. The framework uses different colors for each data record.

On charts with multiple datasets you should add the `.multiple` class to make the framework use different color for each dataset.

```html{1}
<table class="charts-css column multiple">
  ...
</table>
```

<code-example code-example-id="datasets-example-2">
<template v-slot:css-code>
#datasets-example-2 {
  height: 300px;
  max-width: 800px;
}
.legend {
  margin-block-end: 1rem;
  justify-content: center;
}
</template>
<template v-slot:html-code>
<div class="chart-container">

  <ul class="charts-css legend legend-inline legend-square">
    <li> 1st year </li>
    <li> 2nd year </li>
    <li> 3rd year </li>
    <li> 4th year </li>
    <li> 5th year </li>
  </ul>

  <table class="charts-css column multiple show-labels data-spacing-10 datasets-spacing-1" id="datasets-example-2">
    <caption> Front End Developer Salary </caption>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $ 20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $ 30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $ 40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $ 50K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $ 75K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $ 40K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $ 60K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $ 75K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $ 90K </span> </td>
        <td style="--size: calc( 100 / 100 );"> <span class="data"> $ 100K </span> </td>
      </tr>
    </tbody>
  </table>

</div>
</template>
</code-example>
