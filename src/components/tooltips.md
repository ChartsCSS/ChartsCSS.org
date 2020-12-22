---
permalink: /components/tooltips/
---

# Tooltips

Tooltips allow you to display additional information about the data, using little popup boxes, when hovering over the data.

## Add Tooltips

To add tooltips to your data, you need to change the HTML markup to include the tooltip content.

### Only Data

Simple data `<table>` with only the data:

```html
<tr>
  <th scope="row"> Dataset label </th>
  <td> 10 </td>
  <td> 20 </td>
  <td> 30 </td>
</tr>
```

### Data With Tooltips

To add tooltips, simply add a `<span>` tag with a `.tooltip` class. 

```html{5}
<tr>
  <th scope="row"> Dataset label </th>
  <td> 10 </td>
  <td> 20 </td>
  <td> 30 <span class="tooltip"> Data: 30 <br> More info... </span> </td>
</tr>
```

You can add tooltips to a specific data like you see in the example above, or to all your data elements as shown bellow.

```html{3-5}
<tr>
  <th scope="row"> Dataset label </th>
  <td> 10 <span class="tooltip"> Data: 10 <br> More info... </span> </td>
  <td> 20 <span class="tooltip"> Data: 20 <br> More info... </span> </td>
  <td> 30 <span class="tooltip"> Data: 30 <br> More info... </span> </td>
</tr>
```

You can add links, images and other elements to your tooltips.

### Best Practice

It's not required but it's recommended to wrap your data with a `<span>` element and a `.data` class. This way you can distinguish between the raw data and the tooltip.

```html{4-5,8-9,12-13}
<tr>
  <th scope="row"> Dataset label </th>
  <td>
    <span class="data"> 10 </span>
    <span class="tooltip"> Data: 10 <br> More info... </span>
  </td>
  <td>
    <span class="data"> 20 </span>
    <span class="tooltip"> Data: 20 <br> More info... </span>
  </td>
  <td>
    <span class="data"> 30 </span>
    <span class="tooltip"> Data: 30 <br> More info... </span>
  </td>
</tr>
```

This markup will help you target the data selector for other purposes like adding [motion effects](/customization/motion-effects/) and [animations](/customization/animations/).

### Example

A simple example of a column chart with tooltips:

<code-example code-example-id="tooltips-example-1">
<template v-slot:css-code>
#tooltips-example-1 {
  height: 300px;
  max-width: 600px;
  margin: 0 auto;
  --color-1: #FEE101;
  --color-2: #D7D7D7;
  --color-3: #A77044;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels show-primary-axis data-spacing-20" id="tooltips-example-1">

  <caption> Tooltips Example - 2016 Summer Olympics Medal Table </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Gold </th>
      <th scope="col"> Silver </th>
      <th scope="col"> Bronze </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td style="--size: calc( 46 / 50 );">
        <span class="data"> 46 <br> 🥇 </span>
        <span class="tooltip"> United States took <br> home 46 gold medals </span>
      </td>
      <td style="--size: calc( 37 / 50 );">
        <span class="data"> 37 <br> 🥈 </span>
        <span class="tooltip"> United States took <br> home 37 silver medals </span>
      </td>
      <td style="--size: calc( 38 / 50 );">
        <span class="data"> 38 <br> 🥉 </span>
        <span class="tooltip"> United States took <br> home 38 bronze medals </span>
      </td>
    </tr>
    <tr>
      <th scope="row"> GBR </th>
      <td style="--size: calc( 27 / 50 );">
        <span class="data"> 27 </span>
        <span class="tooltip"> Great Britain took <br> home 27 gold medals </span>
      </td>
      <td style="--size: calc( 23 / 50 );">
        <span class="data"> 23 </span>
        <span class="tooltip"> Great Britain took <br> home 23 silver medals </span>
      </td>
      <td style="--size: calc( 17 / 50 );">
        <span class="data"> 17 </span>
        <span class="tooltip"> Great Britain took <br> home 17 bronze medals </span>
      </td>
    </tr>
    <tr>
      <th scope="row"> CHN </th>
      <td style="--size: calc( 26 / 50 );">
        <span class="data"> 26 </span>
        <span class="tooltip"> China took home <br> 26 gold medals </span>
      </td>
      <td style="--size: calc( 18 / 50 );">
        <span class="data"> 18 </span>
        <span class="tooltip"> China took home <br> 18 silver medals </span>
      </td>
      <td style="--size: calc( 26 / 50 );">
        <span class="data"> 26 </span>
        <span class="tooltip"> China took home <br> 26 bronze medals </span>
      </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

```css
#tooltips-example {
  /* Custom chart size */
  height: 300px;
  max-width: 600px;
  margin: 0 auto;

  /* Custom colors */
  --color-1: #FEE101;
  --color-2: #D7D7D7;
  --color-3: #A77044;
}
```

```html
<table class="charts-css column multiple show-labels show-primary-axis data-spacing-20" id="tooltips-example">

  <caption> 2016 Summer Olympics Medal Table </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Gold </th>
      <th scope="col"> Silver </th>
      <th scope="col"> Bronze </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td style="--size: calc( 46 / 50 );">
        <span class="data"> 46 <br> 🥇 </span>
        <span class="tooltip"> United States took <br> home 46 gold medals </span>
      </td>
      <td style="--size: calc( 37 / 50 );">
        <span class="data"> 37 <br> 🥈 </span>
        <span class="tooltip"> United States took <br> home 37 silver medals </span>
      </td>
      <td style="--size: calc( 38 / 50 );">
        <span class="data"> 38 <br> 🥉 </span>
        <span class="tooltip"> United States took <br> home 38 bronze medals </span>
      </td>
    </tr>
    <tr>
      <th scope="row"> GBR </th>
      <td style="--size: calc( 27 / 50 );">
        <span class="data"> 27 </span>
        <span class="tooltip"> Great Britain took <br> home 27 gold medals </span>
      </td>
      <td style="--size: calc( 23 / 50 );">
        <span class="data"> 23 </span>
        <span class="tooltip"> Great Britain took <br> home 23 silver medals </span>
      </td>
      <td style="--size: calc( 17 / 50 );">
        <span class="data"> 17 </span>
        <span class="tooltip"> Great Britain took <br> home 17 bronze medals </span>
      </td>
    </tr>
    <tr>
      <th scope="row"> CHN </th>
      <td style="--size: calc( 26 / 50 );">
        <span class="data"> 26 </span>
        <span class="tooltip"> China took home <br> 26 gold medals </span>
      </td>
      <td style="--size: calc( 18 / 50 );">
        <span class="data"> 18 </span>
        <span class="tooltip"> China took home <br> 18 silver medals </span>
      </td>
      <td style="--size: calc( 26 / 50 );">
        <span class="data"> 26 </span>
        <span class="tooltip"> China took home <br> 26 bronze medals </span>
      </td>
    </tr>
  </tbody>

</table>
```
