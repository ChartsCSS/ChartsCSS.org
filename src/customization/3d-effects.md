---
permalink: /customization/3d-effects/
prev: ../
---

# 3D Effects

A 3D effect can be applied on the charts to give it depth. There are several techniques to achieve this.

## 3D Bars

To make the bars look like 3D bars is pretty simple. It can be done using CSS `box-shadow` property:

```css
#custom-effect tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
```

<code-example>
<style>
#effect-example-1 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
#effect-example-1 tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
</style>
<table class="charts-css column hide-data show-data-axes" id="effect-example-1">

  <caption> 3D Effect Example #1 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

Or using `:before` and `:after` psedo-elements with `skew` property.

```css
#custom-effect tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
}
#custom-effect tbody td:before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 100%;
  height: 10px;
  transform: skewX(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
#custom-effect tbody td:after {
  content: '';
  position: absolute;
  top: -4px;
  right: -10px;
  width: 10px;
  height: 100%;
  transform: skewY(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
```

<code-example>
<style>
#effect-example-2 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
#effect-example-2 tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
}
#effect-example-2 tbody td:before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 100%;
  height: 10px;
  transform: skewX(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
#effect-example-2 tbody td:after {
  content: '';
  position: absolute;
  top: -4px;
  right: -10px;
  width: 10px;
  height: 100%;
  transform: skewY(-45deg);
  transform-origin: top;
  background-color: lightgrey;
}
</style>
<table class="charts-css column hide-data show-data-axes" id="effect-example-2">

  <caption> 3D Effect Example #2 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Tilt Chart

Another way to make your chart look 3D is to tilt the entire `<table>` with css `skew()`.

```css
#custom-effect {
  margin: 1.5rem auto;
  transform: skewY(20deg);
}
#custom-effect tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
```

<code-example>
<style>
#effect-example-3 {
  height: 200px;
  width: 300px;
  margin: 1.5rem auto;
  transform: skewY(20deg);
}
#effect-example-3 tbody td {
  margin-inline-start: 10px;
  margin-inline-end: 20px;
  box-shadow:
    1px -1px 1px lightgrey,
    2px -2px 1px lightgrey,
    3px -3px 1px lightgrey,
    4px -4px 1px lightgrey,
    5px -5px 1px lightgrey,
    6px -6px 1px lightgrey,
    7px -7px 1px lightgrey,
    8px -8px 1px lightgrey,
    9px -9px 1px lightgrey,
    10px -10px 1px lightgrey;
}
</style>
<table class="charts-css column show-data-axes" id="effect-example-3">

  <caption> 3D Effect Example #3 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Chart Reflection

We can also use the webkit reflect effect to highlight the chart 

```css
#custom-effect {
  height: 200px;
  margin: 0 auto 100px;
  -webkit-box-reflect:
    below
    3px
    -webkit-gradient(
      linear,
      left top,
      left bottom,
      from( transparent ),
      color-stop( 10%, transparent ),
      to( rgba( 255, 255, 255, 0.25 ) )
  );
}
```

<code-example>
<style>
#effect-example-4 {
  width: 300px;
  height: 200px;
  margin: 0 auto 100px;
  -webkit-box-reflect:
    below
    3px
    -webkit-gradient(
      linear,
      left top,
      left bottom,
      from( transparent ),
      color-stop( 10%, transparent ),
      to( rgba( 255, 255, 255, 0.25 ) )
  );
}
</style>
<table class="charts-css column labels-hide show-data-axes" id="effect-example-4">

  <caption> 3D Effect Example #4 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> <span class="data"> 20 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1.0"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>
