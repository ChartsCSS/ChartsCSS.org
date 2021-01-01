---
permalink: /components/legend/
next: ../../charts/
---

# Legend

Chart legend displays the labels of the datasets appear on a chart. The chart visualize the raw data, the legend visualize the datasets.

## Legend Structure

The legend is a separate component with a separate HTML tag. You have the freedom to position the legend wherever you want. Just like any other HTML tag. 

Note: Currently legend required to use `<ul>` + `<li>` or `<ol>` + `<li>` tags. In the next versions you will have the freedom to use any HTML tag.

## Legend Position

So if you choose to display the chart legend. You can position it wherever you want. Use float (`float: right;`), flexbox (`flex-direction: row;`), grid (`grid-template-columns: 100px 1fr;`), or any other method.

```html
<div id="my-chart">

  <ul class="charts-css legend">
  </ul>

  <table class="charts-css bar|column|area|line multiple ...">
  </table>

</div>
```

## Legend Class

Use the `.legend` class to style your chart legend.

```html
<ul class="charts-css legend">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-1">
<template v-slot:css-code>
#legend-example-1 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-1 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-1 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="legend-example-1">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

## Legend Orientation

By default legend dataset labels vertically are aligned vertically. Usually used to position the legend beside the chart.

To aligning legend dataset labels horizontally, use the `.legend-inline` class. Usually used to position the legend above or below the chart.

```html
<ul class="charts-css legend legend-inline">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-2">
<template v-slot:css-code>
#legend-example-2 {
  margin: 0 auto;
  max-width: 500px;
}
#legend-example-2 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-2 .legend {
  margin-top: 20px;
  justify-content: space-between;
}
</template>
<template v-slot:html-code>
<div id="legend-example-2">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-inline">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

## Legend Shape

### Circle

Use the `.legend-circle` class to display a circular shape label.

```html
<ul class="charts-css legend legend-circle">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-3">
<template v-slot:css-code>
#legend-example-3 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-3 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-3 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="legend-example-3">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-circle">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

### Ellipse

Use the `.legend-ellipse` class to display a circular shape label.

```html
<ul class="charts-css legend legend-ellipse">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-4">
<template v-slot:css-code>
#legend-example-4 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-4 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-4 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="legend-example-4">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-ellipse">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

### Square

Use the `.legend-square` class to display a square shape label.

```html
<ul class="charts-css legend legend-square">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-5">
<template v-slot:css-code>
#legend-example-5 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-5 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-5 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="legend-example-5">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-square">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

### Rectangle

Use the `.legend-rectangle` class to display a rectangular shape label.

```html
<ul class="charts-css legend legend-rectangle">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-6">
<template v-slot:css-code>
#legend-example-6 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-6 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-6 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="legend-example-6">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-rectangle">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

### Rhombus

Use the `.legend-rhombus` class to display a circular shape label.

```html
<ul class="charts-css legend legend-rhombus">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-7">
<template v-slot:css-code>
#legend-example-7 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-7 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-7 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="legend-example-7">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-rhombus">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

### Line

Use the `.legend-line` class to display a line shape label.

```html
<ul class="charts-css legend legend-line">
  <li> Label 1 </li>
  <li> Label 2 </li>
  <li> Label 3 </li>
</ul>
```

<code-example code-example-id="legend-example-8">
<template v-slot:css-code>
#legend-example-8 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-8 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-8 .legend {
  flex-shrink: 3;
}
</template>
<template v-slot:html-code>
<div id="legend-example-8">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-line">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

## Custom Styles

You can change every aspect of the legend element using CSS. Simply target the CSS selector and apply your own style.

For example, lets change the text color, the background color and add a box-shadow:

```css
.legend {
  color: #ccc;
  background-color: #333;
  box-shadow: 0 0 15px #000;
}
```

<code-example code-example-id="legend-example-9">
<template v-slot:css-code>
#legend-example-9 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-9 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-9 .legend {
  flex-shrink: 3;
  color: #ccc;
  background-color: #333;
  box-shadow: 0 0 15px #000;
}
</template>
<template v-slot:html-code>
<div id="legend-example-9">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-square">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>

To target an individual legend element, we can do something like:

```css
.legend > li:nth-of-type(3) {
  color: red;
}
```

<code-example code-example-id="legend-example-10">
<template v-slot:css-code>
#legend-example-10 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-10 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-10 .legend {
  flex-shrink: 3;
  color: #ccc;
  background-color: #333;
  box-shadow: 0 0 15px #000;
}
#legend-example-10 .legend > li:nth-of-type(3) {
  color: red;
}
</template>
<template v-slot:html-code>
<div id="legend-example-10">

  <table class="charts-css column multiple hide-data show-labels data-spacing-5">
    <caption> Front End Developer Salary </caption>
    <thead>
      <tr>
        <th scope="row"> Continent </th>
        <th scope="col"> 2000 </th>
        <th scope="col"> 2005 </th>
        <th scope="col"> 2010 </th>
        <th scope="col"> 2015 </th>
        <th scope="col"> 2020 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Asia </th>
        <td style="--size: calc( 20 / 100 );"> <span class="data"> $20K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 40 / 100 );"> <span class="data"> $40K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 60 / 100 );"> <span class="data"> $60K </span> </td>
      </tr>
      <tr>
        <th scope="row"> Australia </th>
        <td style="--size: calc( 10 / 100 );"> <span class="data"> $10K </span> </td>
        <td style="--size: calc( 30 / 100 );"> <span class="data"> $30K </span> </td>
        <td style="--size: calc( 50 / 100 );"> <span class="data"> $50K </span> </td>
        <td style="--size: calc( 70 / 100 );"> <span class="data"> $70K </span> </td>
        <td style="--size: calc( 90 / 100 );"> <span class="data"> $90K </span> </td>
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

  <ul class="charts-css legend legend-square">
    <li> 2000 </li>
    <li> 2005 </li>
    <li> 2010 </li>
    <li> 2015 </li>
    <li> 2020 </li>
  </ul>

</div>
</template>
</code-example>
