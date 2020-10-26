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
      <td style="--size: 0.15;"> <span class="data"> 40m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 90m </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 111m </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 126m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800m </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.15;"> <span class="data"> 183m </span> </td>
      <td style="--size: 0.18;"> <span class="data"> 284m </span> </td>
      <td style="--size: 0.20;"> <span class="data"> 379m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 402m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 3,516m </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#datasets-example-1 {
  height: 300px;
}
</style>
<table class="charts-css column show-labels" id="datasets-example-1">

  <caption> Datasets Example #1 - Historical Human Population by Continent </caption>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: 0.15;"> <span class="data"> 40m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 90m </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 111m </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 126m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800m </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.15;"> <span class="data"> 183m </span> </td>
      <td style="--size: 0.18;"> <span class="data"> 284m </span> </td>
      <td style="--size: 0.20;"> <span class="data"> 379m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 402m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 3,516m </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Datasets Colors

By default, **Chart.css** assumes you use a single dataset. The framework uses different colors for each data record.

On charts with multiple datasets you should add the `.multiple` class to make the framework use different color for each dataset.

```html{1}
<table class="charts-css column show-labels multiple">
  ...
</table>
```

<code-example>
<style>
#datasets-example-2 {
  height: 300px;
}
</style>
<table class="charts-css column show-labels multiple" id="datasets-example-2">

  <caption> Datasets Example #2 - Historical Human Population by Continent </caption>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: 0.15;"> <span class="data"> 40m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 90m </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 111m </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 126m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800m </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.15;"> <span class="data"> 183m </span> </td>
      <td style="--size: 0.18;"> <span class="data"> 284m </span> </td>
      <td style="--size: 0.20;"> <span class="data"> 379m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 402m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 3,516m </span> </td>
    </tr>
  </tbody>

</table>
</code-example>
