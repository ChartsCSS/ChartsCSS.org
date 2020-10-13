---
permalink: /docs/concepts/
next: ../../components/
---

# Concepts

There are some fundamental differences between a JS library and a CSS framework. You need to learn the **basic concepts** and **best practices** to start creating beautiful charts.

## Raw data is not really required

JS libraries require you to provide raw data so that the library can calculates how to display your data.

With CSS framework the raw data is not real required as we are not calculating anything. A CSS framework only show the end result of the calculation. Therefor, the raw data needed only if we want to display it to the user.

The actual requirement it the final calculation. If we display completion rate (`80`, `90` and `100`) that end calculation is (`0.8 = 80/100`, `0.9 = 90/100` and `1 = 100/100`).

The framework doesn't do any calculations it only displays the chart. You do all the calculations. To minimize logarithmic errors, the best practice is to use the CSS `calc()` function.

```html
<table class="charts-css column">

  <thead>
    <tr>
      <th scope="col"> Completion Rate </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style="--size: calc( 20 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 40 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 80 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#example-1 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="example-1">

  <thead>
    <tr>
      <th scope="col"> Completion Rate </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style="--size: calc( 20 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 40 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 80 / 100 )"> </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> </td>
    </tr>
  </tbody>

</table>
</code-example>

## The end result size should be between 0 to 1

The `--size` property does not accept px, not percents not degrees - only numbers between `0` to `1`. This way all chart types are covered as we multiply this value by `100%` or by `360deg` (depending on the chart type).

With a universal unit you can change the chart type from `bar` to `pie` or any other type, and you will not need to change the unit sizes.

## Always label your data

You should always describe your data with `<th>` headings. **Charts.css** uses `<th scope="row">` labels to describe the data.

```html
<table class="charts-css column">

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Earnings </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.5"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1">  </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#example-2 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="example-2">

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Earnings </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.5"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Multiple datasets are allowed

Datasets are different series of data. To add multiple datasets simply add more than one `<td>` to each of your `<td>`.

```html
<table class="charts-css column">

  <thead>
    <tr>
      <th scope="col"> Continent </th>
      <th scope="col"> Revenue </th>
      <th scope="col"> Profit </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: calc( 60 / 80)"> 60m </td>
      <td style="--size: calc( 10 / 60)"> 10m </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: calc( 80 / 80)"> 80m </td>
      <td style="--size: calc( 30 / 60)"> 30m </td>
    </tr>
    <tr>
      <th scope="row"> Africa </th>
      <td style="--size: calc( 50 / 80)"> 50m </td>
      <td style="--size: calc( 20 / 60)"> 20m </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#example-3 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="example-3">

  <thead>
    <tr>
      <th scope="col"> Continent </th>
      <th scope="col"> Revenue </th>
      <th scope="col"> Profit </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: calc( 60 / 80)"> 60m </td>
      <td style="--size: calc( 10 / 60)"> 10m </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: calc( 80 / 80)"> 80m </td>
      <td style="--size: calc( 30 / 60)"> 30m </td>
    </tr>
    <tr>
      <th scope="row"> Africa </th>
      <td style="--size: calc( 50 / 80)"> 50m </td>
      <td style="--size: calc( 20 / 60)"> 20m </td>
    </tr>
  </tbody>

</table>
</code-example>

By default, **Chart.css** assumes you use a single dataset and use different color for each data record. If you are using multiple datasets you should add the `multiple` class to make the framework to use different color for each dataset.

```html
<table class="charts-css column multiple">
  ...
</table>
```

<code-example>
<style>
#example-4 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple" id="example-4">

  <thead>
    <tr>
      <th scope="col"> Continent </th>
      <th scope="col"> Revenue </th>
      <th scope="col"> Profit </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: calc( 60 / 80)"> 60m </td>
      <td style="--size: calc( 10 / 60)"> 10m </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: calc( 80 / 80)"> 80m </td>
      <td style="--size: calc( 30 / 60)"> 30m </td>
    </tr>
    <tr>
      <th scope="row"> Africa </th>
      <td style="--size: calc( 50 / 80)"> 50m </td>
      <td style="--size: calc( 20 / 60)"> 20m </td>
    </tr>
  </tbody>

</table>
</code-example>

<!--
## Stacking your data

In some cases you group the data by datasets, in other you group it by label. The example above can be displayed differently.

```html
<table class="charts-css column multiple stacked">

  <thead>
    <tr>
      <th scope="col"> Finance </th>
      <th scope="col"> Europe </th>
      <th scope="col"> Asia </th>
      <th scope="col"> Africa </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Revenue </th>
      <td style="--size: calc( 60 / 80)"> 60m </td>
      <td style="--size: calc( 80 / 80)"> 80m </td>
      <td style="--size: calc( 50 / 80)"> 50m </td>
    </tr>
    <tr>
      <th scope="row"> Profit </th>
      <td style="--size: calc( 10 / 60)"> 10m </td>
      <td style="--size: calc( 30 / 60)"> 30m </td>
      <td style="--size: calc( 20 / 60)"> 20m </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#example-5 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple stacked" id="example-5">

  <thead>
    <tr>
      <th scope="col"> Finance </th>
      <th scope="col"> Europe </th>
      <th scope="col"> Asia </th>
      <th scope="col"> Africa </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Revenue </th>
      <td style="--size: calc( 60 / 80)"> 60m </td>
      <td style="--size: calc( 80 / 80)"> 80m </td>
      <td style="--size: calc( 50 / 80)"> 50m </td>
    </tr>
    <tr>
      <th scope="row"> Profit </th>
      <td style="--size: calc( 10 / 60)"> 10m </td>
      <td style="--size: calc( 30 / 60)"> 30m </td>
      <td style="--size: calc( 20 / 60)"> 20m </td>
    </tr>
  </tbody>

</table>
</code-example>
-->