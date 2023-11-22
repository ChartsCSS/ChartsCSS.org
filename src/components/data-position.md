---
permalink: /components/data-position/
---

# Data Position

The position of the data in the chart can be controlled without changing the HTML markup.

## Position System

The framework offers several CSS utility classes which help customize the position of the data.

### Global Data Position

The data position supports the following classes:

* `.data-start` - Inside the data block, near the primary axis, where the data begins.
* `.data-end` - Inside the data block, away from the primary axis, where the data ends.
* `.data-center` - Inside the data block, in the center of the data block.
* `.data-outside` - Outside of the data block.

<!--

### Specific Data Position

Override the position of a specific item with the following CSS variable:

* `--data-position: start;`
* `--data-position: end;`
* `--data-position: center;`

-->

### Edge Cases

Furthermore, when you have a very low or a very heigh value on your bar and column charts, the data seems out of position. You can use utility classes added either to the `<td>` element<!-- or to the `<span>` element wrapping the data-->.

* `.inside`
* `.outside`

## Change Data Position

To display the data at the start, use the `.data-start` class:

```html
<table class="charts-css column data-start">
  ...
</table>
```

<code-example code-example-id="data-position-example-1">
<template v-slot:css-code>
#data-position-example-1 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-1 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-1">
  <table class="charts-css column data-start">
    <caption> Data Position Example #1 </caption>
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

To display the data at the center, use the `.data-center` class:

```html
<table class="charts-css column data-center">
  ...
</table>
```

<code-example code-example-id="data-position-example-2">
<template v-slot:css-code>
#data-position-example-2 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-2 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-2">
  <table class="charts-css column data-center">
    <caption> Data Position Example #2 </caption>
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

To display the data at the end, use the `.data-end` class:

```html
<table class="charts-css column data-end">
  ...
</table>
```

<code-example code-example-id="data-position-example-3">
<template v-slot:css-code>
#data-position-example-3 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-3 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-3">
  <table class="charts-css column data-end">
    <caption> Data Position Example #3 </caption>
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

To display the data outside of the data block, use the `.data-outside` class:

```html
<table class="charts-css column data-outside">
  ...
</table>
```

<code-example code-example-id="data-position-example-4">
<template v-slot:css-code>
#data-position-example-4 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-4 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-4">
  <table class="charts-css column data-outside">
    <caption> Data Position Example #4 </caption>
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

## Edge Cases

**Charts.css** was build with CSS, therefore it inherits some CSS issues. For such cases, the framework offers utility classes that handle these display issues.

### Position Outside

A good example is when the data positioned at the end of the column, and some columns have small values which display them below the chart.

<code-example code-example-id="data-position-example-5">
<template v-slot:css-code>
#data-position-example-5 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-5 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-5">
  <table class="charts-css column show-primary-axis data-end">
    <caption> Data Position Example #5 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <th scope="row"> Jan </th>
          <td style="--size: 0;"> <span class="data"> 0 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.01;"> <span class="data"> 1 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 0.02;"> <span class="data"> 2 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 0.03;"> <span class="data"> 3 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.04;"> <span class="data"> 4 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.05;"> <span class="data"> 5 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 0.06;"> <span class="data"> 6 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.07;"> <span class="data"> 7 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.08;"> <span class="data"> 8 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.09;"> <span class="data"> 9 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.1;"> <span class="data"> 10 </span> </td>
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

To fix this, use the `.outside` utility class as follows:

```html{1,5}
<table class="charts-css column data-end">
  ...
  <tbody>
      <tr>
          <td style="--size: 0;"> <span class="data outside"> 0 </span> </td>
      </tr>
  </tbody>
  ...
</table>
```

<code-example code-example-id="data-position-example-6">
<template v-slot:css-code>
#data-position-example-6 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-6 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-6">
  <table class="charts-css column show-primary-axis data-end">
    <caption> Data Position Example #6 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <th scope="row"> Jan </th>
          <td style="--size: 0;"> <span class="data outside"> 0 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.01;"> <span class="data outside"> 1 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 0.02;"> <span class="data outside"> 2 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 0.03;"> <span class="data outside"> 3 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.04;"> <span class="data outside"> 4 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.05;"> <span class="data outside"> 5 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 0.06;"> <span class="data outside"> 6 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.07;"> <span class="data"> 7 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.08;"> <span class="data"> 8 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.09;"> <span class="data"> 9 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.1;"> <span class="data"> 10 </span> </td>
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

### Position Inside

Another good example is when the data positioned outside the column, and some columns have large values which display them outside of the chart.

<code-example code-example-id="data-position-example-7">
<template v-slot:css-code>
#data-position-example-7 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-7 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-7">
  <table class="charts-css column show-primary-axis show-1-secondary-axes data-outside">
    <caption> Data Position Example #7 </caption>
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
        <td style="--size: 0.99;"> <span class="data"> 99 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 0.98;"> <span class="data"> 98 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 0.97;"> <span class="data"> 97 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.96;"> <span class="data"> 96 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.95;"> <span class="data"> 95 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 0.94;"> <span class="data"> 94 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.93;"> <span class="data"> 93 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.92;"> <span class="data"> 92 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.91;"> <span class="data"> 91 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--size: 0;"> <span class="data"> 0 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

To fix this, use the `.inside` utility class as follows:

```html{1,5}
<table class="charts-css column data-outside">
  ...
  <tbody>
      <tr>
          <td style="--size: 0;"> <span class="data inside"> 0 </span> </td>
      </tr>
  </tbody>
  ...
</table>
```

<code-example code-example-id="data-position-example-8">
<template v-slot:css-code>
#data-position-example-8 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#data-position-example-8 .column {
  --aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="data-position-example-8">
  <table class="charts-css column show-primary-axis show-1-secondary-axes data-outside">
    <caption> Data Position Example #8 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <th scope="row"> Jan </th>
          <td style="--size: 1;"> <span class="data inside"> 100 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.99;"> <span class="data inside"> 99 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Mar </th>
        <td style="--size: 0.98;"> <span class="data inside"> 98 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 0.97;"> <span class="data inside"> 97 </span> </td>
      </tr>
      <tr>
        <th scope="row"> May </th>
        <td style="--size: 0.96;"> <span class="data inside"> 96 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.95;"> <span class="data inside"> 95 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jul </th>
        <td style="--size: 0.94;"> <span class="data inside"> 94 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.93;"> <span class="data"> 93 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sep </th>
        <td style="--size: 0.92;"> <span class="data"> 92 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.91;"> <span class="data"> 91 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Nov </th>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Dec </th>
        <td style="--size: 0;"> <span class="data"> 0 </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>
