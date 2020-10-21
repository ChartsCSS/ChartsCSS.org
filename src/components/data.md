---
permalink: /components/data/
---

# Data

The actual data can be added to the chart in a variety of ways. There are some basic concepts and best practices you need to know to use the framework.

## Add Data

To add data to the chart you simply need to add new `<td>` tags. It can be and type of data - numbers, strings, HTML tags, images, media or whatever.

```html{7,10,13,16,19}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td> $ 40K </td>
    </tr>
    <tr>
      <td> $ 60K </td>
    </tr>
    <tr>
      <td> $ 75K </td>
    </tr>
    <tr>
      <td> $ 90K </td>
    </tr>
    <tr>
      <td> $ 100K <br> 👑 </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#data-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="data-example-1">

  <caption> Data Example #1 - Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td> $ 40K </td>
    </tr>
    <tr>
      <td> $ 60K </td>
    </tr>
    <tr>
      <td> $ 75K </td>
    </tr>
    <tr>
      <td> $ 90K </td>
    </tr>
    <tr>
      <td> $ 100K <br> 👑 </td>
    </tr>
  </tbody>

</table>
</code-example>

## Labeling Data

For better accessibility and search engine visibility, you should always describe your data with `<th>` headings. **Charts.css** uses `<th scope="row">` labels to describe the data.

```html{14,18,22,26,30}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td> $ 40K </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td> $ 60K </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td> $ 75K </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td> $ 90K </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td> $ 100K <br> 👑 </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#data-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="data-example-2">

  <caption> Data Example #2 - Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td> $ 40K </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td> $ 60K </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td> $ 75K </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td> $ 90K </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td> $ 100K <br> 👑 </td>
    </tr>
  </tbody>

</table>
</code-example>

## Display Size

Raw data without a visual representation has no meaning in a chart. As visual frameworks don't do calculations, we need to add the calculation telling the framework how to display the data. To minimize logarithmic errors, the best practice is to calculation using CSS `calc()` function.

```html{15,19,23,27,31}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: calc( 40 / 100 )"> $ 40K </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: calc( 60 / 100 )"> $ 60K </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: calc( 75 / 100 )"> $ 75K </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: calc( 90 / 100 )"> $ 90K </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: calc( 100 / 100 )"> $ 100K <br> 👑 </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#data-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="data-example-3">

  <caption> Data Example #3 - Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: calc( 40 / 100 )"> $ 40K </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: calc( 60 / 100 )"> $ 60K </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: calc( 75 / 100 )"> $ 75K </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: calc( 90 / 100 )"> $ 90K </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: calc( 100 / 100 )"> $ 100K <br> 👑 </td>
    </tr>
  </tbody>

</table>
</code-example>

**Note:** You can manually change the `--size` property for each data item. But the values have to be unit-less numbers between `0` to `1`. This way all chart types are covered as we multiply size value by `100%` or by `360deg` (depending on the chart type).

## Raw data is not really required

Now, let's remove the raw data and see what happens.

```html{15,19,23,27,31}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.75"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.9"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#data-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="data-example-4">

  <caption> Data Example #4 - Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.75"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.9"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

The chart displayed as expected. The problem with the example above is that screen readers see empty tables and search engines have no data to scan.

## Hide Data

The example above presents problems with screen readers and search engines because there is no data to scan. The solutions is to add the data to the structure but hide it from the user. We do it by wrapping the data with `<span class="data">` tag and applying `.hide-data` class on the container.

```html{1,15,19,23,27,31}
<table class="charts-css column hide-data">

  <caption> Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.4"> <span class="data"> $ 40K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> <span class="data"> $ 60K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.75"> <span class="data"> $ 75K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.9"> <span class="data"> $ 90K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> <span class="data"> $ 100K <br> 👑 </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#data-example-5 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column hide-data" id="data-example-5">

  <caption> Data Example #5 - Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.4"> <span class="data"> $ 40K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> <span class="data"> $ 60K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.75"> <span class="data"> $ 75K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.9"> <span class="data"> $ 90K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> <span class="data"> $ 100K <br> 👑 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Show Data on Hover

Another good practice is to hide the data, and show it when hovering over it. This is done using the `.show-data-on-hover` class.

```html{1,15,19,23,27,31}
<table class="charts-css column show-data-on-hover">

  <caption> Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.4"> <span class="data"> $ 40K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> <span class="data"> $ 60K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.75"> <span class="data"> $ 75K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.9"> <span class="data"> $ 90K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> <span class="data"> $ 100K <br> 👑 </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example>
<style>
#data-example-6 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-data-on-hover" id="data-example-6">

  <caption> Data Example #6 - Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.4"> <span class="data"> $ 40K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.6"> <span class="data"> $ 60K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.75"> <span class="data"> $ 75K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.9"> <span class="data"> $ 90K </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> <span class="data"> $ 100K <br> 👑 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>
