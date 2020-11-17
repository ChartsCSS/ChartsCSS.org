---
permalink: /components/labels/
---

# Labels

Labels are used to describe the data or the dataset over the primary axis.

## Add Labels

To add labels to your primary axis, use `<th>` heading tags. To mark them as a row heading add the `scope="row"` attribute.

```html{12,16,20,24,28,32,36,40,44,48,52,56}
<table class="charts-css column hide-data">

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
```

<code-example code-example-id="labels-example-1">
<template v-slot:css-code>
#labels-example-1 {
  height: 250px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column hide-data" id="labels-example-1">

  <caption> Labels Example #1 </caption>

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

## Show Labels

**By default the labels are hidden**. To display the labels use the `.show-labels` class.

```html{12,16,20,24,28,32,36,40,44,48,52,56}
<table class="charts-css column hide-data show-labels">
  ..
</table>
```

<code-example code-example-id="labels-example-2">
<template v-slot:css-code>
#labels-example-2 {
  height: 250px;
  max-width: 100%;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column hide-data show-labels" id="labels-example-2">

  <caption> Labels Example #2 </caption>

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

## Label Size

Some chart use long labels others use short ones. To customize the label size use the `--labels-size` CSS variables.

Custom labels size for bar charts:

```css
#my-chart.bar {
  --labels-size: 200px;
}
```

Custom labels size for column charts:

```css
#my-chart.column {
  --labels-size: 3rem;
}
```

## Align Labels

Lastly, you can play with the label text alignment. Use the `labels-align-start`, `labels-align-center` and `labels-align-end` classes.

```html{1,13}
<table class="charts-css column multiple show-labels labels-align-start">
  ...
</table>
```

<v-row>

<code-example code-example-id="labels-example-3">
<template v-slot:css-code>
#labels-example-3 {
  height: 150px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data labels-align-start" id="labels-example-3">

  <caption> Labels Example #3 </caption>

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
      <th scope="row"> 2010 </th>
      <td style="--size: 0.1;"> <span class="data"> 10 </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
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

<code-example code-example-id="labels-example-4">
<template v-slot:css-code>
#labels-example-4 {
  height: 150px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column multiple show-labels hide-data labels-align-end" id="labels-example-4">

  <caption> Labels Example #4 </caption>

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
      <th scope="row"> 2010 </th>
      <td style="--size: 0.1;"> <span class="data"> 10 </span> </td>
      <td style="--size: 0.3;"> <span class="data"> 30 </span> </td>
      <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      <td style="--size: 0.7;"> <span class="data"> 70 </span> </td>
      <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
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

</v-row>

To override a specific label use the `--labels-align` variable on `<th>` or `<tr>` elements.

```html{1,13}
<table class="charts-css column show-labels labels-align-start">

  <tbody>
    <tr>
      <th scope="row"> Label </th>
      <td> Data </td>
    </tr>
    <tr>
      <th scope="row"> Label </th>
      <td> Data </td>
    </tr>
    <tr>
      <th scope="row" style="--labels-align: center"> Label </th>
      <td> Data </td>
    </tr>
  </tbody>

</table>
```
