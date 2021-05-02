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
      <td> $40K </td>
    </tr>
    <tr>
      <td> $60K </td>
    </tr>
    <tr>
      <td> $75K </td>
    </tr>
    <tr>
      <td> $90K </td>
    </tr>
    <tr>
      <td> $100K </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="data-example-1">
<template v-slot:css-code>
#data-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column" id="data-example-1">

  <caption> Data Example #1 - Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td> $40K </td>
    </tr>
    <tr>
      <td> $60K </td>
    </tr>
    <tr>
      <td> $75K </td>
    </tr>
    <tr>
      <td> $90K </td>
    </tr>
    <tr>
      <td> $100K </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Display Size

Raw data without a visual representation has no meaning. As visual frameworks don't do calculations, you need to add the calculation in order to tell the framework how to display the data. To minimize logarithmic errors, the best practice is to calculation using CSS `calc()` function.

```html{7,10,13,16,19}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: calc( 40 / 100 )"> $40K </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> $60K </td>
    </tr>
    <tr>
      <td style="--size: calc( 75 / 100 )"> $75K </td>
    </tr>
    <tr>
      <td style="--size: calc( 90 / 100 )"> $90K </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> $100K </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="data-example-2">
<template v-slot:css-code>
#data-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column" id="data-example-2">

  <caption> Data Example #2 - Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: calc( 40 / 100 )"> $40K </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> $60K </td>
    </tr>
    <tr>
      <td style="--size: calc( 75 / 100 )"> $75K </td>
    </tr>
    <tr>
      <td style="--size: calc( 90 / 100 )"> $90K </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> $100K </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

**Note:** You can manually change the `--size` property for each data item. But the values have to be unit-less numbers between `0` to `1`. This way all chart types are covered as we multiply size value by `100%` or by `360deg` (depending on the chart type).

## Raw data is not really required

Now, let's remove the raw data and see what happens.

```html{7,10,13,16,19}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--size: 0.75"> </td>
    </tr>
    <tr>
      <td style="--size: 0.9"> </td>
    </tr>
    <tr>
      <td style="--size: 1.0"> </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="data-example-3">
<template v-slot:css-code>
#data-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column" id="data-example-3">

  <caption> Data Example #3 - Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <td style="--size: 0.75"> </td>
    </tr>
    <tr>
      <td style="--size: 0.9"> </td>
    </tr>
    <tr>
      <td style="--size: 1.0"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

The chart displayed as expected. The problem with the example above is that screen readers see empty tables and search engines have no data to scan.

## Hide Data

The example above presents a significant problem. The solutions is to add the data to the structure but hide it from the end-user. We do it by wrapping the data with `<span class="data">` tag and applying `.hide-data` class on the wrapper.

```html{1,7,10,13,16,19}
<table class="charts-css column hide-data">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: calc( 40 / 100 )"> <span class="data"> $40K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> <span class="data"> $60K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 75 / 100 )"> <span class="data"> $75K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 90 / 100 )"> <span class="data"> $90K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> <span class="data"> $100K </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="data-example-4">
<template v-slot:css-code>
#data-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column hide-data" id="data-example-4">

  <caption> Data Example #4 - Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: calc( 40 / 100 )"> <span class="data"> $40K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> <span class="data"> $60K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 75 / 100 )"> <span class="data"> $75K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 90 / 100 )"> <span class="data"> $90K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> <span class="data"> $100K </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Show Data on Hover

Another good practice is to hide the data, and show it when hovering over it. This is done using the `.show-data-on-hover` class.

```html{1,7,10,13,16,19}
<table class="charts-css column show-data-on-hover">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: calc( 40 / 100 )"> <span class="data"> $40K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> <span class="data"> $60K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 75 / 100 )"> <span class="data"> $75K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 90 / 100 )"> <span class="data"> $90K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> <span class="data"> $100K </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="data-example-5">
<template v-slot:css-code>
#data-example-5 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-data-on-hover" id="data-example-5">

  <caption> Data Example #5 - Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--size: calc( 40 / 100 )"> <span class="data"> $40K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 60 / 100 )"> <span class="data"> $60K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 75 / 100 )"> <span class="data"> $75K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 90 / 100 )"> <span class="data"> $90K </span> </td>
    </tr>
    <tr>
      <td style="--size: calc( 100 / 100 )"> <span class="data"> $100K </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Starting Point

Some chart types require not only the `--size` variable but also the `--start` variable that indicates the starting point.


```html{7,10,13,16,19}
<table class="charts-css area hide-data">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--start: 0.2; --size: 0.4"> <span class="data"> $40K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.4; --size: 0.8"> <span class="data"> $80K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.8; --size: 0.6"> <span class="data"> $60K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.6; --size: 1.0"> <span class="data"> $100K </span> </td>
    </tr>
    <tr>
      <td style="--start: 1.0; --size: 0.3"> <span class="data"> $30K </span> </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="data-example-6">
<template v-slot:css-code>
#data-example-6 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css area hide-data" id="data-example-6">

  <caption> Data Example #6 - Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style="--start: 0.2; --size: 0.4"> <span class="data"> $40K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.4; --size: 0.8"> <span class="data"> $80K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.8; --size: 0.6"> <span class="data"> $60K </span> </td>
    </tr>
    <tr>
      <td style="--start: 0.6; --size: 1.0"> <span class="data"> $100K </span> </td>
    </tr>
    <tr>
      <td style="--start: 1.0; --size: 0.3"> <span class="data"> $30K </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Size Variable 

All `--size` variables should always be a unitless numbers between `0` to `1`. Why unitless? Because you should be able to change chart types without changing the unit in all the variables.

Rectangular charts use percentage as a unit of measurement while radial charts use degrees. To make it easier for users to switch between chart types, the framework deprecated units. Instead, it multiplies the `--size` by `100%` or by `360deg` depending on the chart type.
