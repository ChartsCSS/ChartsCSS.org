---
permalink: /components/animations/
---

# Animations

By animating the chart you can add smooth interactions to make your chart even more interactive. Use CSS `@keyframes` to animate elements without using JavaScript.

## Jumping Bars

Here is a basic example where the bars are jumping every 3 seconds.

```css
#animations-example-1 td {
  animation: jumping 3s linear infinite;
}
#animations-example-1 tr:nth-of-type(even) td {
  animation-delay: 300ms;
}
@keyframes jumping {
  0% { transform: translateY(   0px ); }
  2% { transform: translateY( -10px ); }
  4% { transform: translateY(   0px ); }
}
```

<code-example>
<style>
#animations-example-1 {
  width: 300px;
  height: 200px;
  margin: 0 auto;
}
#animations-example-1 td {
  animation: jumping 3s linear infinite;
  animation-delay: 0;
}
#animations-example-1 tr:nth-of-type(even) td {
  animation-delay: 300ms;
}
@keyframes jumping {
  0% { transform: translateY(   0px ); }
  2% { transform: translateY( -10px ); }
  4% { transform: translateY(   0px ); }
}
</style>
<table class="charts-css column show-primary-axis data-spacing-6" id="animations-example-1">

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Spinning Labels

Here is another simple examples with spinning labels every 3 seconds.

```css
#animations-example-2 th {
  animation: spin-labels 3s linear infinite;
}
@keyframes spin-labels {
  0%   { transform: rotateX(   0deg ); }
  10%  { transform: rotateX( 360deg ); }
  100% { transform: rotateX( 360deg ); }
}
```

<code-example>
<style>
#animations-example-2 {
  --labels-size: 160px;
  max-width: 500px;
  margin: 0 auto;
}
#animations-example-2 td {
  line-height: 1.5;
}
#animations-example-2 th {
  animation: spin-labels 3s linear infinite;
}
@keyframes spin-labels {
  0%   { transform: rotateX(   0deg ); }
  10%  { transform: rotateX( 360deg ); }
  100% { transform: rotateX( 360deg ); }
}
</style>
<table class="charts-css bar data-spacing-5 show-primary-axis show-data-axes" id="animations-example-2">

  <caption> The Richest People In America - Forbes 1918 </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Gold </th>
      <th scope="col"> Silver </th>
      <th scope="col"> Silver </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> John D. Rockefeller </th>
      <td style="--size: calc( 1200 / 1200 );"> <span class="data"> 1,200 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Henry Clay Frick </th>
      <td style="--size: calc( 225 / 1200 );"> <span class="data"> 225 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Andrew Carnegie </th>
      <td style="--size: calc( 200 / 1200 );"> <span class="data"> 200 </span> </td>
    </tr>
    <tr>
      <th scope="row"> George Fisher Baker </th>
      <td style="--size: calc( 150 / 1200 );"> <span class="data"> 150 </span> </td>
    </tr>
    <tr>
      <th scope="row"> William Rockefeller </th>
      <td style="--size: calc( 150 / 1200 );"> <span class="data"> 150 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>
