---
permalink: /components/colors/
---

# Colors

Chart colors help end-users to distinguish between data items and datasets.

## Change Specific Colors

The most basic way to change colors is to use the `--color` variable on a specific `<td>` element. It's a good practice to emphasize specific item in your chart.

```html{3}
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.2; --color: red;"> Data </td>
  <td style="--size: 0.4;"> Data </td>
</tr>
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.6;"> Data </td>
  <td style="--size: 0.8;"> Data </td>
</tr>
```

This method can be also applied on all the `<td>` elements.

```html{3-4,8-9}
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.2; --color: red;"> Data </td>
  <td style="--size: 0.4; --color: blue;"> Data </td>
</tr>
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.6; --color: green; "> Data </td>
  <td style="--size: 0.8; --color: yellow;"> Data </td>
</tr>
```

**Note:** With small data tables it's an acceptable method but with large tables it's a not a recommended practice. Keep reading to learn how to change all the colors.

## Change Global Colors

The framework has a set of 10 default color repeating themselves. You can override those colors to create your custom theme.

```css
#my-chart {
  --color-1: rgba(230, 30, 30, 0.2);
  --color-2: rgba(230, 30, 30, 0.4);
  --color-3: rgba(230, 30, 30, 0.5);
  --color-4: rgba(230, 30, 30, 0.6);
  --color-5: rgba(230, 30, 30, 1.0);
  --color-6: rgba(230, 30, 30, 1.0);
  --color-7: rgba(230, 30, 30, 0.8);
  --color-8: rgba(230, 30, 30, 0.6);
  --color-9: rgba(230, 30, 30, 0.4);
  --color-10: rgba(230, 30, 30, 0.2);
}
```

It works well with single datasets:

<code-example>
<style>
#colors-example-1 {
  --color-1: rgba(230, 30, 30, 0.2);
  --color-2: rgba(230, 30, 30, 0.4);
  --color-3: rgba(230, 30, 30, 0.5);
  --color-4: rgba(230, 30, 30, 0.6);
  --color-5: rgba(230, 30, 30, 1.0);
  --color-6: rgba(230, 30, 30, 1.0);
  --color-7: rgba(230, 30, 30, 0.8);
  --color-8: rgba(230, 30, 30, 0.6);
  --color-9: rgba(230, 30, 30, 0.4);
  --color-10: rgba(230, 30, 30, 0.2);

  height: 250px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-labels hide-data" id="colors-example-1">

  <caption> Colors Example #1 </caption>

  <thead>
    <tr>
      <th scope="col"> Month </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Jan </th>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Feb </th>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Mar </th>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Apr </th>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
    </tr>
    <tr>
      <th scope="row"> May </th>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jun </th>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jul </th>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Aug </th>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Sep </th>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Oct </th>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

And with multiple datasets:

<code-example>
<style>
#colors-example-2 {
  --color-1: rgba(230, 30, 30, 0.2);
  --color-2: rgba(230, 30, 30, 0.4);
  --color-3: rgba(230, 30, 30, 0.5);
  --color-4: rgba(230, 30, 30, 0.6);
  --color-5: rgba(230, 30, 30, 1.0);
  --color-6: rgba(230, 30, 30, 1.0);
  --color-7: rgba(230, 30, 30, 0.8);
  --color-8: rgba(230, 30, 30, 0.6);
  --color-9: rgba(230, 30, 30, 0.4);
  --color-10: rgba(230, 30, 30, 0.2);

  height: 250px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple show-labels hide-data data-spacing-10 show-data-axes" id="colors-example-2">

  <caption> Colors Example #2 </caption>

  <thead>
    <tr>
      <th scope="col"> Month </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 1900 </th>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Custom Colors System

For more advanced use-cases there is an option to replace the current color system. Let's say we want 3 repeating colors.

```css
/* Multiple Datasets */
#my-chart.charts-css.multiple tbody tr td:nth-of-type(3n + 1) {
  background-color: red;
}
#my-chart.charts-css.multiple tbody tr td:nth-of-type(3n + 2) {
  background-color: green;
}
#my-chart.charts-css.multiple tbody tr td:nth-of-type(3n + 3) {
  background-color: blue;
}

/* Single Dataset */
#my-chart.charts-css:not(.multiple) tbody tr:nth-of-type(3n + 1) td {
  background-color: red;
}
#my-chart.charts-css:not(.multiple) tbody tr:nth-of-type(3n + 2) td {
  background-color: green;
}
#my-chart.charts-css:not(.multiple) tbody tr:nth-of-type(3n + 3) td {
  background-color: blue;
}
```

Three repeating colors in a single datasets table:

<code-example>
<style>
#colors-example-3 {
  height: 250px;
  margin: 0 auto;
}
#colors-example-3.charts-css:not(.multiple) tbody tr:nth-of-type(3n + 1) td {
  background-color: #f06464;
}
#colors-example-3.charts-css:not(.multiple) tbody tr:nth-of-type(3n + 2) td {
  background-color: #8cdc78;
}
#colors-example-3.charts-css:not(.multiple) tbody tr:nth-of-type(3n + 3) td {
  background-color: #82beff;
}
</style>
<table class="charts-css column show-labels hide-data" id="colors-example-3">

  <caption> Colors Example #3 </caption>

  <thead>
    <tr>
      <th scope="col"> Month </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Jan </th>
      <td style="--size: 0.33;"> <span class="data"> 33 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Feb </th>
      <td style="--size: 0.66;"> <span class="data"> 66 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Mar </th>
      <td style="--size: 1;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Apr </th>
      <td style="--size: 0.33;"> <span class="data"> 33 </span> </td>
    </tr>
    <tr>
      <th scope="row"> May </th>
      <td style="--size: 0.66;"> <span class="data"> 66 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jun </th>
      <td style="--size: 1;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jul </th>
      <td style="--size: 0.33;"> <span class="data"> 33 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Aug </th>
      <td style="--size: 0.66;"> <span class="data"> 66 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Sep </th>
      <td style="--size: 1;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Oct </th>
      <td style="--size: 0.33;"> <span class="data"> 33 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Nov </th>
      <td style="--size: 0.66;"> <span class="data"> 66 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Dec </th>
      <td style="--size: 1;"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

Three repeating colors in a multiple datasets table:

<code-example>
<style>
#colors-example-4 {
  height: 250px;
  margin: 0 auto;
}
#colors-example-4.charts-css.multiple tbody tr td:nth-of-type(3n + 1) {
  background-color: #f06464;
}
#colors-example-4.charts-css.multiple tbody tr td:nth-of-type(3n + 2) {
  background-color: #8cdc78;
}
#colors-example-4.charts-css.multiple tbody tr td:nth-of-type(3n + 3) {
  background-color: #82beff;
}
</style>
<table class="charts-css column multiple show-labels hide-data data-spacing-10 show-data-axes" id="colors-example-4">

  <caption> Colors Example #4 </caption>

  <thead>
    <tr>
      <th scope="col"> Month </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 1900 </th>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>

## Images and Gradients

You can set background images and gradients on any CSS variables mentioned above.

```css
#my-chart {
  --color: linear-gradient(red, yellow);
}
```

<code-example>
<style>
#colors-example-5 {
  height: 250px;
  margin: 0 auto;
  --color: linear-gradient(red, yellow);
}
</style>
<table class="charts-css column show-labels hide-data" id="colors-example-5">

  <caption> Colors Example #5 </caption>

  <thead>
    <tr>
      <th scope="col"> Month </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> Jan </th>
      <td style="--size: 0.3;"> <span class="data"> 30 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Feb </th>
      <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Mar </th>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Apr </th>
      <td style="--size: 1;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> May </th>
      <td style="--size: 0.65;"> <span class="data"> 65 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jun </th>
      <td style="--size: 0.45;"> <span class="data"> 45 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jul </th>
      <td style="--size: 0.15;"> <span class="data"> 15 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Aug </th>
      <td style="--size: 0.32;"> <span class="data"> 32 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Sep </th>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Oct </th>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Nov </th>
      <td style="--size: 0.55;"> <span class="data"> 55 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Dec </th>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
  </tbody>

</table>
</code-example>
