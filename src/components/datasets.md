---
permalink: /components/datasets/
---

# Datasets

Datasets are different series of data.

## Add Datasets

To add multiple datasets simply add more than one `<td>` tag to each of your `<tr>` tags.

```html{8-12,16-20}
<table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <th scope="row"> Asia </th>
      <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
      <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
      <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
      <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
      <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
    </tr>
    <tr>
      <th scope="row"> Europe </th>
      <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
      <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
      <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
      <td style="--size: calc( 100 / 100 );"> <span class="data"> $100K </span> </td>
    </tr>
  </tbody>

</table>
```

It is also recommended to add a [legend](/components/legend/) and [labels](/components/labels/) to describe the datasets.

```html
<ul class="charts-css legend">
  <li> 1st year </li>
  <li> 2nd year </li>
  <li> 3rd year </li>
  <li> 4th year </li>
  <li> 5th year </li>
</ul>
```

The result:

<code-example code-example-id="datasets-example-1">
<template v-slot:css-code>
#datasets-example-1 .column {
  height: 300px;
  max-width: 800px;
}
#datasets-example-1 .legend {
  margin-block-start: 1rem;
  justify-content: center;
}
</template>
<template v-slot:html-code>
<div id="datasets-example-1">

  <table class="charts-css column show-labels data-spacing-5 datasets-spacing-1">
    <caption> Front End Developer Salary </caption>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
        <td style="--size: calc( 100 / 100 );"> <span class="data"> $100K </span> </td>
      </tr>
    </tbody>
  </table>

  <ul class="charts-css legend legend-inline legend-square">
    <li> 1st year </li>
    <li> 2nd year </li>
    <li> 3rd year </li>
    <li> 4th year </li>
    <li> 5th year </li>
  </ul>

</div>
</template>
</code-example>

As you can see we have an issue with colors in our datasets. Continue reading to see how to solve the issue.

## Datasets Colors

By default, **Charts.css** assumes you use a single dataset. The framework uses different colors for each data record.

On charts with multiple datasets you should add the `.multiple` class to make the framework use different color for each dataset.

```html{1}
<table class="charts-css column multiple">
  ...
</table>
```

<code-example code-example-id="datasets-example-2">
<template v-slot:css-code>
#datasets-example-2 .column {
  height: 300px;
  max-width: 800px;
}
#datasets-example-2 .legend {
  margin-block-end: 1rem;
  justify-content: center;
}
</template>
<template v-slot:html-code>
<div id="datasets-example-2">

  <ul class="charts-css legend legend-inline legend-square">
    <li> 1st year </li>
    <li> 2nd year </li>
    <li> 3rd year </li>
    <li> 4th year </li>
    <li> 5th year </li>
  </ul>

  <table class="charts-css column multiple show-labels data-spacing-10 datasets-spacing-1">
    <caption> Front End Developer Salary </caption>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
        <td style="--size: calc( 100 / 100 );"> <span class="data"> $100K </span> </td>
      </tr>
    </tbody>
  </table>

</div>
</template>
</code-example>

## Datasets Display Alternatives

You can display multiple datasets in two ways:

<code-example code-example-id="datasets-example-3">
<template v-slot:css-code>
#datasets-example-3 {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
#datasets-example-3 .column {
  height: 300px;
  max-width: 700px;
}
#datasets-example-3 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="datasets-example-3">

  <ul class="charts-css legend legend-inline legend-square">
    <li> 1st year </li>
    <li> 2nd year </li>
    <li> 3rd year </li>
    <li> 4th year </li>
    <li> 5th year </li>
  </ul>

  <table class="charts-css column multiple show-labels data-spacing-5 datasets-spacing-1">
    <caption> Front End Developer Salary </caption>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Europe </th>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
        <td style="--size: calc( 100 / 100 );"> <span class="data"> $100K </span> </td>
      </tr>
    </tbody>
  </table>

</div>
</template>
</code-example>

Or:

<code-example code-example-id="datasets-example-4">
<template v-slot:css-code>
#datasets-example-4 {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
#datasets-example-4 .column {
  height: 300px;
  max-width: 700px;
}
#datasets-example-4 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="datasets-example-4">

  <ul class="charts-css legend legend-inline legend-square">
    <li> Asia </li>
    <li> Europe </li>
  </ul>

  <table class="charts-css column multiple show-labels data-spacing-5 datasets-spacing-1">
    <caption> Front End Developer Salary </caption>
    <tbody>
      <tr>
        <th scope="row"> 1st year </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2nd year </th>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 3rd year </th>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 4th year </th>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
      </tr>
      <tr>
        <th scope="row"> 5th year </th>
        <td style="--size: calc( 75 / 100 );"> <span class="data"> $75K </span> </td>
        <td style="--size: calc( 100 / 100 );"> <span class="data"> $100K </span> </td>
      </tr>
    </tbody>
  </table>

</div>
</template>
</code-example>

The same data, with multiple datasets, displayed in two different ways.
