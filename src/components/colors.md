---
permalink: /components/colors/
---

# Colors

Chart colors help end-users to distinguish between data items and datasets.

## Change All Colors

The most basic way to change colors is to use the `--color` variable, applying it on the entire chart. This way all the inner elements will inherit the color.

```css{2}
#my-chart {
  --color: blue;
}
```

<code-example code-example-id="colors-example-1">
<template v-slot:css-code>
#colors-example-1 {
  height: 100px;
  max-width: 400px;
  margin: 0 auto;
  --color: #def;
}
#colors-example-1 td {
  border-radius: 5px 5px 0 0;
  border: 1px solid #999;
}
</template>
<template v-slot:html-code>
<table class="charts-css column hide-data data-spacing-3" id="colors-example-1">

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
</template>
</code-example>

## Change Specific Colors

To change specific element color, we need to apply the `--color` variable on a specific `<td>` tag. This way the inheritance rules apply only on that element. 

```html{3}
<tr>
  <th scope="row"> Label </th>
  <td style="--size: 0.5; --color: orange;"> Data </td>
</tr>
```

<code-example code-example-id="colors-example-2">
<template v-slot:css-code>
#colors-example-2 {
  height: 100px;
  max-width: 400px;
  margin: 0 auto;
  --color: #def;
}
#colors-example-2 td {
  border-radius: 5px 5px 0 0;
  border: 1px solid #999;
}
</template>
<template v-slot:html-code>
<table class="charts-css column hide-data data-spacing-2" id="colors-example-2">

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
</template>
</code-example>

This method can be also applied on all the `<td>` elements one by one.

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
  height: 100px;
  max-width: 400px;
  margin: 0 auto;
}
#colors-example-3 td {
  border-radius: 5px 5px 0 0;
  border: 1px solid #999;
}
</template>
<template v-slot:html-code>
<table class="charts-css column hide-data data-spacing-2" id="colors-example-3">

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
      <td style="--size: 1.0; --color: #fcc;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Feb </th>
      <td style="--size: 0.5; --color: #aea;"> <span class="data"> 50 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Mar </th>
      <td style="--size: 0.8; --color: #def;"> <span class="data"> 80 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Apr </th>
      <td style="--size: 0.3; --color: #fcc;"> <span class="data"> 30 </span> </td>
    </tr>
    <tr>
      <th scope="row"> May </th>
      <td style="--size: 0.5; --color: #aea;"> <span class="data"> 50 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jun </th>
      <td style="--size: 0.9; --color: #def;"> <span class="data"> 90 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Jul </th>
      <td style="--size: 1.0; --color: #fcc;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Aug </th>
      <td style="--size: 0.7; --color: #aea;"> <span class="data"> 70 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Sep </th>
      <td style="--size: 0.4; --color: #def;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Oct </th>
      <td style="--size: 0.6; --color: #fcc;"> <span class="data"> 60 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Nov </th>
      <td style="--size: 0.2; --color: #aea;"> <span class="data"> 20 </span> </td>
    </tr>
    <tr>
      <th scope="row"> Dec </th>
      <td style="--size: 0.9; --color: #def;"> <span class="data"> 90 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

**Note:** With small data tables it's an acceptable method to override colors for each `<td>` element but with large tables it's a not a recommended practice. Keep reading to learn how to [change global colors](#change-global-colors).

## Change Global Colors

The framework has a set of 10 default color repeating themselves. You can override those colors to create your own custom theme.

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

<code-example code-example-id="colors-example-4">
<template v-slot:css-code>
#colors-example-4 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
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
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data data-spacing-2 show-primary-axis" id="colors-example-4">

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
</template>
</code-example>

And with multiple datasets:

<code-example code-example-id="colors-example-5">
<template v-slot:css-code>
#colors-example-5 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
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
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data data-spacing-10 datasets-spacing-1 show-primary-axis show-data-axes" id="colors-example-5">

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
</template>
</code-example>

**Note:** As mentioned above, the framework has a set of 10 default color repeating themselves. You can create your own [custom color system](#custom-color-system) based on 3 or 5 or even 20 repeating colors.

## Custom Images

External images can be places instead of the color.

```css
#my-chart {
  --color: url("https://.../");
}
```

<code-example code-example-id="colors-example-6">
<template v-slot:css-code>
#colors-example-6 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
  --color: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Galaxy_Cluster_Abell_1689_%284423351940%29.jpg/544px-Galaxy_Cluster_Abell_1689_%284423351940%29.jpg") top center repeat black;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data" id="colors-example-6">

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
</template>
</code-example>

## Use Gradients

You can set gradients on any CSS variables mentioned above.

```css
#my-chart {
  --color: linear-gradient(red, yellow);
}
```

<code-example code-example-id="colors-example-7">
<template v-slot:css-code>
#colors-example-7 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
  --color: linear-gradient(red, yellow);
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data" id="colors-example-7">

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
</template>
</code-example>

<code-example code-example-id="colors-example-8">
<template v-slot:css-code>
#colors-example-8 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
  --color: linear-gradient(red, yellow);
}
</template>
<template v-slot:html-code>
<table class="charts-css area show-labels hide-data" id="colors-example-8">

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
</template>
</code-example>

## Use Pseudo Classes

You can use CSS pseudo-classes to target the elements you want to color.

```css
#my-chart tr {
  --color: #fdc;
}
#my-chart tr:nth-child(n+8):not(:last-child) {
  --color: #f84;
}
#my-chart tr:last-child {
  --color: repeating-linear-gradient(135deg, #fdc 0px, #fdc 6px, #f84 6px, #f84 12px);
}
```

<code-example code-example-id="colors-example-9">
<template v-slot:css-code>
#colors-example-9 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
}
#colors-example-9 tr {
  --color: #fdc;
}
#colors-example-9 tr:nth-child(n+8):not(:last-child) {
  --color: #f84;
}
#colors-example-9 tr:last-child {
  --color: repeating-linear-gradient(135deg, #fdc 0px, #fdc 6px, #f84 6px, #f84 12px);
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data data-spacing-5" id="colors-example-9">

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
</template>
</code-example>

## Use Patterns

You can even use custom CSS patterns.

```css
#my-chart {
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

Repeating gradients will do the trick.

<code-example code-example-id="colors-example-10">
<template v-slot:css-code>
#colors-example-10 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
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
<table class="charts-css column show-labels hide-data data-spacing-5" id="colors-example-10">

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
</template>
</code-example>

## Custom Color System

For more advanced use-cases there is an option to replace the current color system. Let's say we want 3 repeating colors.

```css
/* Multiple Datasets */
#my-chart.multiple tbody tr td:nth-of-type(3n + 1) {
  background-color: red;
}
#my-chart.multiple tbody tr td:nth-of-type(3n + 2) {
  background-color: green;
}
#my-chart.multiple tbody tr td:nth-of-type(3n + 3) {
  background-color: blue;
}

/* Single Dataset */
#my-chart:not(.multiple) tbody tr:nth-of-type(3n + 1) td {
  background-color: red;
}
#my-chart:not(.multiple) tbody tr:nth-of-type(3n + 2) td {
  background-color: green;
}
#my-chart:not(.multiple) tbody tr:nth-of-type(3n + 3) td {
  background-color: blue;
}
```

Three repeating colors in a single datasets table:

<code-example code-example-id="colors-example-10">
<template v-slot:css-code>
#colors-example-11 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
}
#colors-example-11:not(.multiple) tbody tr:nth-of-type(3n + 1) td {
  background-color: #f06464;
}
#colors-example-11:not(.multiple) tbody tr:nth-of-type(3n + 2) td {
  background-color: #8cdc78;
}
#colors-example-11:not(.multiple) tbody tr:nth-of-type(3n + 3) td {
  background-color: #82beff;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data" id="colors-example-11">

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
</template>
</code-example>

Three repeating colors in a multiple datasets table:

<code-example code-example-id="colors-example-12">
<template v-slot:css-code>
#colors-example-12 {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
}
#colors-example-12.charts-css.multiple tbody tr td:nth-of-type(3n + 1) {
  background-color: #f06464;
}
#colors-example-12.charts-css.multiple tbody tr td:nth-of-type(3n + 2) {
  background-color: #8cdc78;
}
#colors-example-12.charts-css.multiple tbody tr td:nth-of-type(3n + 3) {
  background-color: #82beff;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data data-spacing-10 show-data-axes" id="colors-example-12">

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
</template>
</code-example>
