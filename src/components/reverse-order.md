---
permalink: /components/reverse-order/
---

# Reverse Order

You can reverse the order of the elements without changing the HTML markup.

## Reordering Data

Generally speaking, the framework doesn't deal with data - it only styles the data.

But in some unique cases you don't have access to the HTML markup. In other cases you receive an auto-generate HTML table from a backend server you have no control over.

You can use JS to alter the content, but **Charts.css** has two utility classes that can change displayed order without changing the HTML markup.

Note: Before changing content order using CSS, make sure there are no focusable elements (`<button>`, `<a>` etc.). It can be very confusing for users using a keyboard.

## Reverse Data Order

When using a single datasets, you can use the `.reverse-data` class to reverse the order of your data.

```html
<table class="charts-css column reverse-data">
  ...
</table>
```

Original data:

<code-example code-example-id="reverse-data-example-1">
<template v-slot:css-code>
#reverse-data-example-1 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data" id="reverse-data-example-1">

  <caption> Reverse Data Example #1 </caption>

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

Reversed data:

<code-example code-example-id="reverse-data-example-2">
<template v-slot:css-code>
#reverse-data-example-2 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels hide-data reverse-data" id="reverse-data-example-2">

  <caption> Reverse Data Example #2 </caption>

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

## Reverse Datasets Order

When using a multiple datasets, you can use the `.reverse-datasets` class to reverse the order of your datasets.

```html
<table class="charts-css column reverse-datasets">
  ...
</table>
```

Original:

<code-example code-example-id="reverse-datasets-example-1">
<template v-slot:css-code>
#reverse-datasets-example-1 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4" id="reverse-datasets-example-1">

  <caption> Reverse Datasets Example #1 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1 </th>
      <th scope="col"> Progress 2 </th>
      <th scope="col"> Progress 3 </th>
      <th scope="col"> Progress 4 </th>
      <th scope="col"> Progress 5 </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

Reversed datasets:

<code-example code-example-id="reverse-datasets-example-2">
<template v-slot:css-code>
#reverse-datasets-example-2 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4 reverse-datasets" id="reverse-datasets-example-2">

  <caption> Reverse Datasets Example #2 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1 </th>
      <th scope="col"> Progress 2 </th>
      <th scope="col"> Progress 3 </th>
      <th scope="col"> Progress 4 </th>
      <th scope="col"> Progress 5 </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

## Reverse Data & Datasets Order

You can combine the two classes to reverse data order and datasets order.


```html
<table class="charts-css column reverse-data reverse-datasets">
  ...
</table>
```

Original:

<code-example code-example-id="reverse-data-datasets-example-1">
<template v-slot:css-code>
#reverse-data-datasets-example-1 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4" id="reverse-data-datasets-example-1">

  <caption> Reverse Data & Datasets Example #1 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1 </th>
      <th scope="col"> Progress 2 </th>
      <th scope="col"> Progress 3 </th>
      <th scope="col"> Progress 4 </th>
      <th scope="col"> Progress 5 </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

Reversed data & datasets:

<code-example code-example-id="reverse-data-datasets-example-2">
<template v-slot:css-code>
#reverse-data-datasets-example-2 {
  height: 250px;
  max-width: 800px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4 reverse-data reverse-datasets" id="reverse-data-datasets-example-2">

  <caption> Reverse Data & Datasets Example #2 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1 </th>
      <th scope="col"> Progress 2 </th>
      <th scope="col"> Progress 3 </th>
      <th scope="col"> Progress 4 </th>
      <th scope="col"> Progress 5 </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2010 </th>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> <span class="data"> 20 </span> </td>
      <td style="--size: 0.4;"> <span class="data"> 40 </span> </td>
      <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      <td style="--size: 1.0;"> <span class="data"> 100 </span> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>
