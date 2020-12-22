---
permalink: /components/datasets/
---

# Datasets

Datasets are different series of data.

## Add Datasets

To add multiple datasets simply add more than one `<td>` tag to each of your `<tr>` tags.

```html{8-12,16-20}
<table class="charts-css column show-labels">

  <caption> Historical Human Population by Continent </caption>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: 0.15;"> <span class="data">  40M <br> <small> (1000 CE) </small> </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 168M <br> <small> (1500 CE) </small> </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 178M <br> <small> (1700 CE) </small> </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 408M <br> <small> (1900 CE) </small> </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800M <br> <small> (2000 CE) </small> </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.15;"> <span class="data"> 183M <br> <small> (1000 CE) </small> </span> </td>
      <td style="--size: 0.18;"> <span class="data"> 282M <br> <small> (1500 CE) </small> </span> </td>
      <td style="--size: 0.20;"> <span class="data"> 411M <br> <small> (1700 CE) </small> </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 947M <br> <small> (1900 CE) </small> </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 3,700M <br> <small> (2000 CE) </small> </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="datasets-example-1">
<template v-slot:css-code>
#datasets-example-1 {
  height: 300px;
  max-width: 800px;
}
#datasets-example-1 .data {
  text-align: center;
  line-height: 1.25;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels" id="datasets-example-1">

  <caption> Datasets Example #1 - Historical Human Population by Continent </caption>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: 0.15;"> <span class="data">  40M <br> <small> (1000 CE) </small> </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 168M <br> <small> (1500 CE) </small> </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 178M <br> <small> (1700 CE) </small> </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 408M <br> <small> (1900 CE) </small> </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800M <br> <small> (2000 CE) </small> </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.15;"> <span class="data"> 183M <br> <small> (1000 CE) </small> </span> </td>
      <td style="--size: 0.18;"> <span class="data"> 282M <br> <small> (1500 CE) </small> </span> </td>
      <td style="--size: 0.20;"> <span class="data"> 411M <br> <small> (1700 CE) </small> </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 947M <br> <small> (1900 CE) </small> </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 3,700M <br> <small> (2000 CE) </small> </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Datasets Colors

By default, **Chart.css** assumes you use a single dataset. The framework uses different colors for each data record.

On charts with multiple datasets you should add the `.multiple` class to make the framework use different color for each dataset.

```html{1}
<table class="charts-css column show-labels multiple">
  ...
</table>
```

<code-example code-example-id="datasets-example-2">
<template v-slot:css-code>
#datasets-example-2 {
  height: 300px;
  max-width: 800px;
}
#datasets-example-2 .data {
  text-align: center;
  line-height: 1.25;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels multiple" id="datasets-example-2">

  <caption> Datasets Example #2 - Historical Human Population by Continent </caption>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: 0.15;"> <span class="data">  40M <br> <small> (1000 CE) </small> </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 168M <br> <small> (1500 CE) </small> </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 178M <br> <small> (1700 CE) </small> </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 408M <br> <small> (1900 CE) </small> </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800M <br> <small> (2000 CE) </small> </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.15;"> <span class="data"> 183M <br> <small> (1000 CE) </small> </span> </td>
      <td style="--size: 0.18;"> <span class="data"> 282M <br> <small> (1500 CE) </small> </span> </td>
      <td style="--size: 0.20;"> <span class="data"> 411M <br> <small> (1700 CE) </small> </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 947M <br> <small> (1900 CE) </small> </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 3,700M <br> <small> (2000 CE) </small> </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>
