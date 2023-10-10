---
permalink: /components/colors/
---

# Colors

Chart colors help users distinguish between data items and datasets.

## Color System

The default color system consists of ten repeating colors. With the help of CSS variables you can override the default colors to create custom themes. More advanced users may choose to create entirely new color systems based on unique design requirements.

### Default Colors

The **Charts.css** color system consists of the following 10 colors:

<ul class="charts-css legend legend-rectangle" style="border: 0; padding: 0; padding-inline-start: 2rem">
  <li> rgba(240 50 50 / 75%) </li>
  <li> rgba(255 180 50 / 75%) </li>
  <li> rgba(255 220 90 / 75%) </li>
  <li> rgba(100 210 80 / 75%) </li>
  <li> rgba(90 165 255 / 75%) </li>
  <li> rgba(170 90 240 / 75%) </li>
  <li> rgba(180 180 180 / 75%) </li>
  <li> rgba(110 110 110 / 75%) </li>
  <li> rgba(170 150 110 / 75%) </li>
  <li> rgba(130 50 20 / 75%) </li>
</ul>

All colors have an alpha-value of 75%. The semi-transparent color makes sure that axes and other background elements are always visible.

### Color Customization

The color system can be customized by changing the value of the `--color` or `--color-*` variables. Replace the `*` with any number `1`-`10`.

## Change All Colors

The most basic way to change colors is to use the `--color` variable, applying it on the entire chart. This way all the inner elements will inherit the color.

```css{2}
#my-chart .column {
  --color: blue;
}
```

<code-example code-example-id="colors-example-1">
<template v-slot:css-code>
#colors-example-1 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#colors-example-1 .column {
  --color: rgba(90,165,255,0.5);
}
#colors-example-1 .column td {
  border-radius: 5px;
}
</template>
<template v-slot:html-code>
<div id="colors-example-1">
  <table class="charts-css column hide-data data-spacing-3">
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
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
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
        <td style="--size: 0.3;"> <span class="data"> 30 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Change Specific Colors

To change the color of a specific element, we need to apply the `--color` variable on a specific `<td>` tag. This way the inheritance rules only apply to that element.

```html{3}
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.5; --color: orange;"> Data </td>
</tr>
```

<code-example code-example-id="colors-example-2">
<template v-slot:css-code>
#colors-example-2 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#colors-example-2 .column {
  --color: rgba(90,165,255,0.5);
}
#colors-example-2 .column td {
  border-radius: 5px;
}
</template>
<template v-slot:html-code>
<div id="colors-example-2">
  <table class="charts-css column hide-data data-spacing-3">
    <caption> Colors Example #2 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Jan </th>
        <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
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
        <td style="--size: 0.3;"> <span class="data"> 30 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 1.0; --color: #fc7;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

This method can also be applied to all the `<td>` elements one by one.

```html{3,7,11}
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.2; --color: red;"> Data </td>
</tr>
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.4; --color: green;"> Data </td>
</tr>
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.6; --color: blue;"> Data </td>
</tr>
```

<code-example code-example-id="colors-example-3">
<template v-slot:css-code>
#colors-example-3 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#colors-example-3 .column td {
  border-radius: 5px;
}
</template>
<template v-slot:html-code>
<div id="colors-example-3">
  <table class="charts-css column hide-data data-spacing-3">
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
        <td style="--size: 1.0; --color: #faa;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.5; --color: #8d8;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 0.8; --color: #acf;"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 0.3; --color: #faa;"> <span class="data"> 30 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.5; --color: #8d8;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.9; --color: #acf;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 1.0; --color: #faa;"> <span class="data"> 100 </span> </td>
      </tr> 
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.7; --color: #8d8;"> <span class="data"> 70 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.4; --color: #acf;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.6; --color: #faa;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.2; --color: #8d8;"> <span class="data"> 20 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--size: 0.9; --color: #acf;"> <span class="data"> 90 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

**Note:** With small data tables it's acceptable to override colors for each `<td>` element but with large tables it's not recommended. Keep reading to learn how to [change global colors](#change-global-colors).

## Change Global Colors

As mentioned above, the framework has a set of ten default colors repeating themselves. Override these colors to create your own custom theme.

```css
#my-chart .column {
  --color-1: rgba(255, 170, 170, 0.2);
  --color-2: rgba(255, 170, 170, 0.4);
  --color-3: rgba(255, 170, 170, 0.5);
  --color-4: rgba(255, 170, 170, 0.6);
  --color-5: rgba(255, 170, 170, 1.0);
  --color-6: rgba(255, 170, 170, 1.0);
  --color-7: rgba(255, 170, 170, 0.8);
  --color-8: rgba(255, 170, 170, 0.6);
  --color-9: rgba(255, 170, 170, 0.4);
  --color-10: rgba(255, 170, 170, 0.2);
}
```

This works well with single datasets:

<code-example code-example-id="colors-example-4">
<template v-slot:css-code>
#colors-example-4 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#colors-example-4 .column {
  --color-1: rgba(255, 170, 170, 0.2);
  --color-2: rgba(255, 170, 170, 0.4);
  --color-3: rgba(255, 170, 170, 0.5);
  --color-4: rgba(255, 170, 170, 0.6);
  --color-5: rgba(255, 170, 170, 1.0);
  --color-6: rgba(255, 170, 170, 1.0);
  --color-7: rgba(255, 170, 170, 0.8);
  --color-8: rgba(255, 170, 170, 0.6);
  --color-9: rgba(255, 170, 170, 0.4);
  --color-10: rgba(255, 170, 170, 0.2);
}
</template>
<template v-slot:html-code>
<div id="colors-example-4">
  <table class="charts-css column show-labels hide-data data-spacing-2 show-primary-axis">
    <caption> Colors Example #4 </caption>
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
</div>
</template>
</code-example>

And with multiple datasets:

<code-example code-example-id="colors-example-5">
<template v-slot:css-code>
#colors-example-5 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#colors-example-5 .column {
  --color-1: rgba(255, 170, 170, 0.2);
  --color-2: rgba(255, 170, 170, 0.4);
  --color-3: rgba(255, 170, 170, 0.5);
  --color-4: rgba(255, 170, 170, 0.6);
  --color-5: rgba(255, 170, 170, 1.0);
  --color-6: rgba(255, 170, 170, 1.0);
  --color-7: rgba(255, 170, 170, 0.8);
  --color-8: rgba(255, 170, 170, 0.6);
  --color-9: rgba(255, 170, 170, 0.4);
  --color-10: rgba(255, 170, 170, 0.2);
}
</template>
<template v-slot:html-code>
<div id="colors-example-5">
  <table class="charts-css column multiple show-labels hide-data data-spacing-8 datasets-spacing-2 show-primary-axis show-data-axes">
    <caption> Colors Example #5 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
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
</div>
</template>
</code-example>

**Note:** As mentioned above, the framework has a set of 10 default colors repeating themselves. You can create your own [custom color system](#custom-color-system) based on three, five, or even 20 repeating colors.

## Custom Images

External images can be used instead of colors.

```css
#my-chart .column {
  --color: url("https://.../");
}
```

<code-example code-example-id="colors-example-6">
<template v-slot:css-code>
#colors-example-6 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#colors-example-6 .column {
  --color: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Galaxy_Cluster_Abell_1689_%284423351940%29.jpg/544px-Galaxy_Cluster_Abell_1689_%284423351940%29.jpg") top center repeat black;
}
</template>
<template v-slot:html-code>
<div id="colors-example-6">
  <table class="charts-css column show-labels hide-data">
    <caption> Colors Example #6 </caption>
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
</div>
</template>
</code-example>

## Use Gradients

Set gradients on any CSS variables mentioned above.

```css
#my-chart .column,
#my-chart .area {
  --color: linear-gradient(red, yellow);
}
```

<code-example code-example-id="colors-example-7">
<template v-slot:css-code>
#colors-example-7 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#colors-example-7 .column {
  --color: linear-gradient(red, yellow);
}
</template>
<template v-slot:html-code>
<div id="colors-example-7">
  <table class="charts-css column show-labels hide-data">
    <caption> Colors Example #7 </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="colors-example-8">
<template v-slot:css-code>
#colors-example-8 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#colors-example-8 .area {
  --color: linear-gradient(red, yellow);
}
</template>
<template v-slot:html-code>
<div id="colors-example-8">
  <table class="charts-css area show-labels hide-data">
    <caption> Colors Example #8 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Jan </th>
        <td style="--start: 0.2; --size: 0.3;"> <span class="data"> 30 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--start: 0.3; --size: 0.5;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--start: 0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--start: 0.8; --size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--start: 1; --size: 0.65;"> <span class="data"> 65 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--start: 0.65; --size: 0.45;"> <span class="data"> 45 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--start: 0.45; --size: 0.15;"> <span class="data"> 15 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--start: 0.15; --size: 0.32;"> <span class="data"> 32 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--start: 0.32; --size: 0.6;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--start: 0.6; --size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--start: 0.9; --size: 0.55;"> <span class="data"> 55 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--start: 0.55; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Use Pseudo Classes

Use CSS pseudo-classes to target the elements you want to color.

```css
#my-chart .column tr {
  --color: #fdc;
}
#my-chart .column tr:nth-child(n+8):not(:last-child) {
  --color: #f84;
}
#my-chart .column tr:last-child {
  --color: repeating-linear-gradient(135deg, #fdc 0px, #fdc 6px, #f84 6px, #f84 12px);
}
```

<code-example code-example-id="colors-example-9">
<template v-slot:css-code>
#colors-example-9 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#colors-example-9 .column tr {
  --color: #fdc;
}
#colors-example-9 .column tr:nth-child(n+8):not(:last-child) {
  --color: #f84;
}
#colors-example-9 .column tr:last-child {
  --color: repeating-linear-gradient(135deg, #fdc 0px, #fdc 6px, #f84 6px, #f84 12px);
}
</template>
<template v-slot:html-code>
<div id="colors-example-9">
  <table class="charts-css column show-labels hide-data data-spacing-5">
    <caption> Colors Example #9 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Jan </th>
        <td style="--size: 0.48;"> <span class="data"> 48 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.40;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 0.36;"> <span class="data"> 36 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 0.38;"> <span class="data"> 38 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.48;"> <span class="data"> 48 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.60;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 0.78;"> <span class="data"> 78 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.88;"> <span class="data"> 88 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.96;"> <span class="data"> 96 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 1.00;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.97;"> <span class="data"> 97 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--size: 0.84;"> <span class="data"> 84 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Use Patterns

Use custom CSS patterns instead of colors.

```css
#my-chart .column {
  --color-1: repeating-linear-gradient(#f80, #f80 10px, #e34 10px, #e34 20px);
  --color-2: repeating-linear-gradient(45deg, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-3: repeating-linear-gradient(90deg, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-4: repeating-linear-gradient(-45deg, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-5: repeating-linear-gradient(transparent, #e34 20px),
             repeating-linear-gradient(90deg, transparent, #e34 20px);
  --color-6: repeating-radial-gradient(circle, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-7: repeating-radial-gradient(circle at 50% 100%, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-8: repeating-radial-gradient(circle at 50% 0%, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-9: repeating-radial-gradient(circle at 0% 50%, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-10: repeating-radial-gradient(circle at 100% 50%, #f80, #f80 10px, #e34 10px, #e34 20px);
}
```

Create CSS patterns using repeating gradients.

<code-example code-example-id="colors-example-10">
<template v-slot:css-code>
#colors-example-10 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#colors-example-10 .column {
  --color-1: repeating-linear-gradient(#f80, #f80 10px, #e34 10px, #e34 20px);
  --color-2: repeating-linear-gradient(45deg, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-3: repeating-linear-gradient(90deg, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-4: repeating-linear-gradient(-45deg, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-5: repeating-linear-gradient(transparent, #e34 20px),
             repeating-linear-gradient(90deg, transparent, #e34 20px);
  --color-6: repeating-radial-gradient(circle, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-7: repeating-radial-gradient(circle at 50% 100%, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-8: repeating-radial-gradient(circle at 50% 0%, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-9: repeating-radial-gradient(circle at 0% 50%, #f80, #f80 10px, #e34 10px, #e34 20px);
  --color-10: repeating-radial-gradient(circle at 100% 50%, #f80, #f80 10px, #e34 10px, #e34 20px);
}
</template>
<template v-slot:html-code>
<div id="colors-example-10">
  <table class="charts-css column show-labels hide-data data-spacing-5">
    <caption> Colors Example #10 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Jan </th>
        <td style="--size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Custom Color System

For more advanced use-cases there is an option to replace the current color system. Let's say we want 3 repeating colors.

```css
/* Multiple Datasets */
#my-chart .column.multiple tbody tr td:nth-of-type(3n + 1) {
  background-color: red;
}
#my-chart .column.multiple tbody tr td:nth-of-type(3n + 2) {
  background-color: green;
}
#my-chart .column.multiple tbody tr td:nth-of-type(3n + 3) {
  background-color: blue;
}

/* Single Dataset */
#my-chart .column:not(.multiple) tbody tr:nth-of-type(3n + 1) td {
  background-color: red;
}
#my-chart .column:not(.multiple) tbody tr:nth-of-type(3n + 2) td {
  background-color: green;
}
#my-chart .column:not(.multiple) tbody tr:nth-of-type(3n + 3) td {
  background-color: blue;
}
```

A single dataset table with three repeating colors:

<code-example code-example-id="colors-example-10">
<template v-slot:css-code>
#colors-example-11 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#colors-example-11 .column:not(.multiple) tbody tr:nth-of-type(3n + 1) td {
  background-color: #f06464;
}
#colors-example-11 .column:not(.multiple) tbody tr:nth-of-type(3n + 2) td {
  background-color: #8cdc78;
}
#colors-example-11 .column:not(.multiple) tbody tr:nth-of-type(3n + 3) td {
  background-color: #82beff;
}
</template>
<template v-slot:html-code>
<div id="colors-example-11">
  <table class="charts-css column show-labels hide-data">
    <caption> Colors Example #11 </caption>
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
</div>
</template>
</code-example>

Multiple datasets with three repeating colors:

<code-example code-example-id="colors-example-12">
<template v-slot:css-code>
#colors-example-12 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#colors-example-12 .column.multiple tbody tr td:nth-of-type(3n + 1) {
  background-color: #f06464;
}
#colors-example-12 .column.multiple tbody tr td:nth-of-type(3n + 2) {
  background-color: #8cdc78;
}
#colors-example-12 .column.multiple tbody tr td:nth-of-type(3n + 3) {
  background-color: #82beff;
}
</template>
<template v-slot:html-code>
<div id="colors-example-12">
  <table class="charts-css column multiple show-labels hide-data data-spacing-10 show-data-axes">
    <caption> Colors Example #12 </caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
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
</div>
</template>
</code-example>
