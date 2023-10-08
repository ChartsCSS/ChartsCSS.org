---
permalink: /components/stacked/
---

# Stacked

Stacked charts place the items either atop one another (column chart) or side-by-side (bar chart).

## Stacked Charts

Stacked charts are used to show how a larger group is divided into smaller groups and what the relationship of each part is to the total amount.

There are two types of stacked charts:

* **Simple stacked chart** - each item is placed after the previous one. The total number of items equals the items added together. This is ideal for comparing groups.

* **Percentage stacked chart** - shows the percentage as a whole for each group. These charts are plotted using the percentage of each item within each group. This makes it easier to see the relative differences between quantities in each group.

## Using Stacked Charts

By definition, stacked views can be applied only on multiple datasets (with `.multiple` class). A single dataset has nothing to stack.

To display a stacked view simply use the `.stacked` class.

```html
<table class="charts-css multiple stacked">
  ...
</table>
```

## Stacked Bars

Stack items side-by-side using a `.bar` chart.

```html
<table class="charts-css bar multiple stacked">
  ...
</table>
```

<code-example code-example-id="stacked-example-1">
<template v-slot:css-code>
#stacked-example-1 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#stacked-example-1 .bar {
  --color-1: rgba(255, 200, 0, 0.6);
  --color-2: rgba(255, 150, 0, 0.6);
  --color-3: rgba(255,  75, 0, 0.6);
  --color-4: rgba(255,   0, 0, 0.6);
}
#stacked-example-1 .bar caption {
  font-weight: bold;
  padding-block-end: 1rem;
}
#stacked-example-1 .bar tbody {
  aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="stacked-example-1">
  <table class="charts-css bar hide-data show-heading show-labels show-primary-axis show-5-secondary-axes data-spacing-5 multiple stacked">
    <caption> Simple Stacked Bars </caption>
    <thead>
      <tr>
        <th scope="col"> Continent </th>
        <th scope="col"> #1 </th>
        <th scope="col"> #2 </th>
        <th scope="col"> #3 </th>
        <th scope="col"> #4 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> America </th>
        <td style="--size: calc(50 / 150);"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(50 / 150);"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc(40 / 150);"> <span class="data"> 40$ </span> </td>
        <td style="--size: calc(25 / 150);"> <span class="data"> 25$ </span> </td>
        <td style="--size: calc(45 / 150);"> <span class="data"> 45$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Africa </th>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="stacked-example-2">
<template v-slot:css-code>
#stacked-example-2 {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
#stacked-example-2 .bar {
  --color-1: rgba(255, 200, 0, 0.6);
  --color-2: rgba(255, 150, 0, 0.6);
  --color-3: rgba(255,  75, 0, 0.6);
  --color-4: rgba(255,   0, 0, 0.6);
}
#stacked-example-2 .bar caption {
  font-weight: bold;
  padding-block-end: 1rem;
}
#stacked-example-2 .bar tbody {
  aspect-ratio: 21 / 9;
}
</template>
<template v-slot:html-code>
<div id="stacked-example-2">
  <table class="charts-css bar hide-data show-heading show-labels show-primary-axis show-5-secondary-axes data-spacing-5 multiple stacked">
    <caption> Percentage Stacked Bars </caption>
    <thead>
      <tr>
        <th scope="col"> Continent </th>
        <th scope="col"> #1 </th>
        <th scope="col"> #2 </th>
        <th scope="col"> #3 </th>
        <th scope="col"> #4 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> America </th>
        <td style="--size: calc(50 / (50 + 50 + 30 + 20));"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(50 / (50 + 50 + 30 + 20));"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(30 / (50 + 50 + 30 + 20));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(20 / (50 + 50 + 30 + 20));"> <span class="data"> 20$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc(40 / (40 + 25 + 45 + 30));"> <span class="data"> 40$ </span> </td>
        <td style="--size: calc(25 / (40 + 25 + 45 + 30));"> <span class="data"> 25$ </span> </td>
        <td style="--size: calc(45 / (40 + 25 + 45 + 30));"> <span class="data"> 45$ </span> </td>
        <td style="--size: calc(30 / (40 + 25 + 45 + 30));"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Africa </th>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Stacked Columns

Stack items atop one another using a `.column` chart.

```html
<table class="charts-css column multiple stacked">
  ...
</table>
```

<v-row>

<code-example code-example-id="stacked-example-3">
<template v-slot:css-code>
#stacked-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#stacked-example-3 .column {
  --color-1: rgba(255, 200, 0, 0.6);
  --color-2: rgba(255, 150, 0, 0.6);
  --color-3: rgba(255,  75, 0, 0.6);
  --color-4: rgba(255,   0, 0, 0.6);
}
#stacked-example-3 .column caption {
  font-weight: bold;
  padding-block-end: 1rem;
}
#stacked-example-3 .column tbody {
  aspect-ratio: 1 / 1;
}
</template>
<template v-slot:html-code>
<div id="stacked-example-3">
  <table class="charts-css column hide-data show-heading show-labels show-primary-axis show-3-secondary-axes data-spacing-10 multiple stacked">
    <caption> Simple Stacked Columns </caption>
    <thead>
      <tr>
        <th scope="col"> Continent </th>
        <th scope="col"> #1 </th>
        <th scope="col"> #2 </th>
        <th scope="col"> #3 </th>
        <th scope="col"> #4 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> America </th>
        <td style="--size: calc(50 / 150);"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(50 / 150);"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc(40 / 150);"> <span class="data"> 40$ </span> </td>
        <td style="--size: calc(25 / 150);"> <span class="data"> 25$ </span> </td>
        <td style="--size: calc(45 / 150);"> <span class="data"> 45$ </span> </td>
        <td style="--size: calc(30 / 150);"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Africa </th>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / 150);"> <span class="data"> 20$ </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

<code-example code-example-id="stacked-example-4">
<template v-slot:css-code>
#stacked-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#stacked-example-4 .column {
  --color-1: rgba(255, 200, 0, 0.6);
  --color-2: rgba(255, 150, 0, 0.6);
  --color-3: rgba(255,  75, 0, 0.6);
  --color-4: rgba(255,   0, 0, 0.6);
}
#stacked-example-4 .column caption {
  font-weight: bold;
  padding-block-end: 1rem;
}
#stacked-example-4 .column tbody {
  aspect-ratio: 1 / 1;
}
</template>
<template v-slot:html-code>
<div id="stacked-example-4">
  <table class="charts-css column hide-data show-heading show-labels show-primary-axis show-3-secondary-axes data-spacing-10 multiple stacked">
    <caption> Percentage Stacked Columns </caption>
    <thead>
      <tr>
        <th scope="col"> Continent </th>
        <th scope="col"> #1 </th>
        <th scope="col"> #2 </th>
        <th scope="col"> #3 </th>
        <th scope="col"> #4 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> America </th>
        <td style="--size: calc(50 / (50 + 50 + 30 + 20));"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(50 / (50 + 50 + 30 + 20));"> <span class="data"> 50$ </span> </td>
        <td style="--size: calc(30 / (50 + 50 + 30 + 20));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(20 / (50 + 50 + 30 + 20));"> <span class="data"> 20$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
        <td style="--size: calc(30 / (30 + 30 + 30 + 30));"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc(40 / (40 + 25 + 45 + 30));"> <span class="data"> 40$ </span> </td>
        <td style="--size: calc(25 / (40 + 25 + 45 + 30));"> <span class="data"> 25$ </span> </td>
        <td style="--size: calc(45 / (40 + 25 + 45 + 30));"> <span class="data"> 45$ </span> </td>
        <td style="--size: calc(30 / (40 + 25 + 45 + 30));"> <span class="data"> 30$ </span> </td>
      </tr>
      <tr>
        <th scope="row"> Africa </th>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
        <td style="--size: calc(20 / (20 + 20 + 20 + 20));"> <span class="data"> 20$ </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

</v-row>

## Simple vs. Percentage

To change the display from a simple stacked view to a percentage stacked view, change the `--size` property.

For a **simple view**, we divide by the total number we want to compare the group to:

```html{2-4,7-9}
<tr>
  <td style="--size: calc(3 / 12);"> </td>
  <td style="--size: calc(1 / 12);"> </td>
  <td style="--size: calc(5 / 12);"> </td>
</tr>
<tr>
  <td style="--size: calc(1 / 12);"> </td>
  <td style="--size: calc(4 / 12);"> </td>
  <td style="--size: calc(2 / 12);"> </td>
</tr>
```

For a **percentage view**, we divide by the relative number of each group (each `<tr>`), which totals the amount of group items:

```html{2-4,7-9}
<tr>
  <td style="--size: calc(3 / (3 + 1 + 5));"> </td>
  <td style="--size: calc(1 / (3 + 1 + 5));"> </td>
  <td style="--size: calc(5 / (3 + 1 + 5));"> </td>
</tr>
<tr>
  <td style="--size: calc(1 / (1 + 4 + 2));"> </td>
  <td style="--size: calc(4 / (1 + 4 + 2));"> </td>
  <td style="--size: calc(2 / (1 + 4 + 2));"> </td>
</tr>
```

