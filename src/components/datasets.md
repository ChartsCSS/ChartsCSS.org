---
permalink: /components/datasets/
---

# Datasets

Datasets are different series of data.

## Add Datasets

To add multiple datasets simply add more than one `<td>` to each of your `<td>`.

```html{19-23,27-31}
<table class="charts-css column">

  <caption> Historical Human Population by Continent </caption>

  <thead>
    <tr>
      <th scope="col"> Continent </th>
      <th scope="col"> 1000 </th>
      <th scope="col"> 1500 </th>
      <th scope="col"> 1600 </th>
      <th scope="col"> 1700 </th>
      <th scope="col"> 2000 </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Europe</th>
      <td style="--size: 0.15;"> <span class="data"> 40m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 90m </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 111m </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 126m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800m </span> </td>
    </tr>
    <tr>
      <th scope="row">Asia</th>
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
<table class="charts-css column" id="datasets-example-1">

  <caption> Historical Human Population by Continent </caption>

  <thead>
    <tr>
      <th scope="col"> Continent </th>
      <th scope="col"> 1000 </th>
      <th scope="col"> 1500 </th>
      <th scope="col"> 1600 </th>
      <th scope="col"> 1700 </th>
      <th scope="col"> 2000 </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Europe</th>
      <td style="--size: 0.15;"> <span class="data"> 40m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 90m </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 111m </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 126m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800m </span> </td>
    </tr>
    <tr>
      <th scope="row">Asia</th>
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
<table class="charts-css column multiple">
  ...
</table>
```

<code-example>
<style>
#datasets-example-2 {
  height: 300px;
}
</style>
<table class="charts-css column multiple" id="datasets-example-2">

  <caption> Historical Human Population by Continent </caption>

  <thead>
    <tr>
      <th scope="col"> Continent </th>
      <th scope="col"> 1000 </th>
      <th scope="col"> 1500 </th>
      <th scope="col"> 1600 </th>
      <th scope="col"> 1700 </th>
      <th scope="col"> 2000 </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">Europe</th>
      <td style="--size: 0.15;"> <span class="data"> 40m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 90m </span> </td>
      <td style="--size: 0.24;"> <span class="data"> 111m </span> </td>
      <td style="--size: 0.26;"> <span class="data"> 126m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 800m </span> </td>
    </tr>
    <tr>
      <th scope="row">Asia</th>
      <td style="--size: 0.15;"> <span class="data"> 183m </span> </td>
      <td style="--size: 0.18;"> <span class="data"> 284m </span> </td>
      <td style="--size: 0.20;"> <span class="data"> 379m </span> </td>
      <td style="--size: 0.21;"> <span class="data"> 402m </span> </td>
      <td style="--size: 1.00;"> <span class="data"> 3,516m </span> </td>
    </tr>
  </tbody>

</table>
</code-example>
