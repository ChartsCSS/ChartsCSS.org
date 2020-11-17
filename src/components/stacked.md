---
permalink: /components/stacked/
---

# Stacked

Stacked charts places the items atop one another.

## Use Stacked View

Bt definition, stacked view can be applied only on multiple datasets. With a single datasets there there is nothing to stack.

The Change display to stacked view simply use the `.stacked` class.

```html
<table class="charts-css bar multiple stacked">
  ...
</table>
```

<code-example code-example-id="stacked-example-1">
<template v-slot:css-code>
#stacked-example-1 {
  height: 150px;
  margin: 0 auto;
  --color-1: rgba(0, 200, 100, 0.5);
  --color-2: rgba(255, 150, 0, 0.5);
  --color-3: rgba(255, 50, 50, 0.5);
}
</template>
<template v-slot:html-code>
<table class="charts-css bar show-labels show-data-on-hover show-primary-axis show-10-secondary-axes data-spacing-5 multiple stacked" id="stacked-example-1">

  <caption> Stacked Example #1 </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Rent </th>
      <th scope="col"> Food </th>
      <th scope="col"> Other </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td style="--size: 0.5;"> <span class="data"> 50% </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
      <td style="--size: 0.2;"> <span class="data"> 20% </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
    </tr>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: 0.2;"> <span class="data"> 20% </span> </td>
      <td style="--size: 0.2;"> <span class="data"> 20% </span> </td>
      <td style="--size: 0.0;"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>

<code-example code-example-id="stacked-example-2">
<template v-slot:css-code>
#stacked-example-2 {
  height: 250px;
  width: 250px;
  margin: 0 auto;
  --color-1: rgba(0, 200, 100, 0.5);
  --color-2: rgba(255, 150, 0, 0.5);
  --color-3: rgba(255, 50, 50, 0.5);
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-labels show-data-on-hover show-primary-axis show-4-secondary-axes data-spacing-5 multiple stacked" id="stacked-example-2">

  <caption> Stacked Example #2 </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Rent </th>
      <th scope="col"> Food </th>
      <th scope="col"> Other </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td style="--size: 0.5;"> <span class="data"> 50% </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
      <td style="--size: 0.2;"> <span class="data"> 20% </span> </td>
    </tr>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30% </span> </td>
    </tr>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: 0.2;"> <span class="data"> 20% </span> </td>
      <td style="--size: 0.2;"> <span class="data"> 20% </span> </td>
      <td style="--size: 0.0;"> </td>
    </tr>
  </tbody>

</table>
</template>
</code-example>
