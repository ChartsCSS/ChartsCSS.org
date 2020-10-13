---
permalink: /components/animations/
next: ../../charts/
---

# Animations

By animating the chart you can add smooth interactions to make your even more interactive. Use CSS `@keyframes` to animate elements without using JavaScript.

## Examples

Here are some basic examples leveraging CSS animations.

### Spin Your Data

Wrap your data with a `<span>` element with `.data` class:

```html
<tr>
    <th scope="row"> Dataset label </th>
    <td> <span class="data"> 10 </span> </td>
    <td> <span class="data"> 20 </span> </td>
    <td> <span class="data"> 30 </span> </td>
</tr>
```

Rotate the data every 6 seconds:

```css
.charts-css.bar span.data {
    animation: spin 6s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotateX(0deg);
    }
    10% {
        transform: rotateX(360deg);
    }
    100% {
        transform: rotateX(360deg);
    }
}
```

You can improve the animation by adding animation delays:

```css
.charts-css.bar tr:nth-of-type(odd) span.data {
    animation-delay: 3s;
}
.charts-css.bar tr:nth-of-type(even) span.data {
    animation-delay: 6s;
}
```

<code-example>
<style>
#animations-example {
    --bar-labels-size: 160px;
    max-width: 500px;
    margin: 0 auto;
}
#animations-example tr {
    padding: 6px 0;
}
#animations-example span.data {
    animation: spin 6s linear infinite;
}
#animations-example tr:nth-of-type(odd) span.data {
    animation-delay: 3s;
}
#animations-example tr:nth-of-type(even) span.data {
    animation-delay: 6s;
}
@keyframes spin {
    0% {
        transform: rotateX(0deg);
    }
    10% {
        transform: rotateX(360deg);
    }
    100% {
        transform: rotateX(360deg);
    }
}
</style>

<table class="charts-css bar" id="animations-example">

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
