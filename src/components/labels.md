---
permalink: /components/labels/
---

# Labels

Labels describe the data or the dataset along the chart primary axis.

## Add Labels

To add labels to the primary axis, use `<th>` heading tags. To mark them as a row heading add the `scope="row"` attribute.

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
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="labels-example-1">
  <table class="charts-css column hide-data">
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
</div>
</template>
</code-example>

## Show Labels

**By default, labels are hidden**. To display labels use the `.show-labels` class.

```html
<table class="charts-css column hide-data show-labels">
  ..
</table>
```

<code-example code-example-id="labels-example-2">
<template v-slot:css-code>
#labels-example-2 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="labels-example-2">
  <table class="charts-css column hide-data show-labels">
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
</div>
</template>
</code-example>

When using this class the framework will allocate space automatically for the labels at the expense of the chart data.

## Hide Specific Labels

To control which labels to hide, use `.show-labels` class on the main table to display all the labels and then use `.hide-label` class on specific `<tr>` or `<th>` elements.

```html{1,13}
<table class="charts-css column show-labels">

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
      <th scope="row" class="hide-label"> Label </th>
      <td> Data </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="labels-example-3">
<template v-slot:css-code>
#labels-example-3 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="labels-example-3">
  <table class="charts-css column hide-data show-labels">
    <caption> Labels Example #3 </caption>
    <thead>
      <tr>
        <th scope="col"> Month </th>
        <th scope="col"> Progress </th>
      </tr>
    </thead>
    <tbody>
      <tr class="hide-label">
        <th scope="row"> Jan </th>
        <td style="--size: 0.3;"> <span class="data"> 30 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Feb </th>
        <td style="--size: 0.5;"> <span class="data"> 50 </span> </td>
      </tr>
      <tr class="hide-label">
        <th scope="row"> Mar </th>
        <td style="--size: 0.8;"> <span class="data"> 80 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Apr </th>
        <td style="--size: 1;"> <span class="data"> 100 </span> </td>
      </tr>
      <tr class="hide-label">
        <th scope="row"> May </th>
        <td style="--size: 0.65;"> <span class="data"> 65 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Jun </th>
        <td style="--size: 0.45;"> <span class="data"> 45 </span> </td>
      </tr>
      <tr class="hide-label">
        <th scope="row"> Jul </th>
        <td style="--size: 0.15;"> <span class="data"> 15 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Aug </th>
        <td style="--size: 0.32;"> <span class="data"> 32 </span> </td>
      </tr>
      <tr class="hide-label">
        <th scope="row"> Sep </th>
        <td style="--size: 0.6;"> <span class="data"> 60 </span> </td>
      </tr>
      <tr>
        <th scope="row"> Oct </th>
        <td style="--size: 0.9;"> <span class="data"> 90 </span> </td>
      </tr>
      <tr class="hide-label">
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

## Label Size

Some charts use long labels, others use short ones. To customize the label size use the `--labels-size` CSS variable.

Custom label size for bar charts:

```css{2}
#my-chart .bar {
  --labels-size: 200px;
}
```

Custom label size for column charts:

```css{2}
#my-chart .column {
  --labels-size: 4rem;
}
```

<code-example code-example-id="labels-example-4">
<template v-slot:css-code>
#labels-example-4 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
#labels-example-4 .column {
  --labels-size: 4rem;
}
#labels-example-4 .column th {
  background-color: #f6f6f6;
}
.sun {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  background:
    linear-gradient(to bottom, currentColor 4px,transparent 0) no-repeat 5px -6px/2px 6px,
    linear-gradient(to bottom, currentColor 4px,transparent 0) no-repeat 5px 14px/2px 6px,
    linear-gradient(to bottom, currentColor 4px,transparent 0) no-repeat -8px 5px/6px 2px,
    linear-gradient(to bottom, currentColor 4px,transparent 0) no-repeat 14px 5px/6px 2px;
  border-radius: 100px;
  box-shadow: inset 0 0 0 2px;
  border: 6px solid transparent;
}
.sun::after,
.sun::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 2px;
  border-right: 4px solid;
  border-left: 4px solid;
  left: -6px;
  top: 5px;
}
.sun::before {
  transform: rotate(-45deg);
}
.sun::after {
  transform: rotate(45deg);
}
.cloud {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 8px;
    height: 2px;
    background: currentColor;
    margin-bottom: 4px;
    margin-top: 20px;
}
.cloud::after,
.cloud::before {
    content: "";
    display: block;
    position: absolute;
    border: 2px solid;
    box-sizing: border-box;
    bottom: 0;
}
.cloud::before {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border-right: 0;
    left: -6px;
    width: 7px;
    height: 12px;
}
.cloud::after {
    width: 16px;
    height: 16px;
    border-radius: 100px;
    border-left-color: transparent;
    right: -8px;
    transform: rotate(-45deg);
}
</template>
<template v-slot:html-code>
<div id="labels-example-4">
  <table class="charts-css column show-labels">
    <caption> Labels Example #4 </caption>
    <thead>
      <tr>
        <th scope="col"> Day </th>
        <th scope="col"> Forecast </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> Mon <br><div class="sun"></div> </th>
        <td style="--size: calc(28 / 30);"> <span class="data"> 28° </span> </td>
      </tr>
      <tr>
        <th scope="row"> Tue <div class="sun"></div> </th>
        <td style="--size: calc(25 / 30);"> <span class="data"> 25° </span> </td>
      </tr>
      <tr>
        <th scope="row"> Wed <div class="sun"></div> </th>
        <td style="--size: calc(23 / 30);"> <span class="data"> 23° </span> </td>
      </tr>
      <tr>
        <th scope="row"> Thu <div class="cloud"></div> </th>
        <td style="--size: calc(16 / 30);"> <span class="data"> 16° </span> </td>
      </tr>
      <tr>
        <th scope="row"> Fri <div class="cloud"></div> </th>
        <td style="--size: calc(14 / 30);"> <span class="data"> 14° </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sat <div class="cloud"></div> </th>
        <td style="--size: calc(18 / 30);"> <span class="data"> 18° </span> </td>
      </tr>
      <tr>
        <th scope="row"> Sun <div class="sun"></div> </th>
        <td style="--size: calc(22 / 30);"> <span class="data"> 22° </span> </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
</code-example>

## Align Labels

Lastly, play with the label text alignment. Use the following classes:

* `labels-align-block-start`
* `labels-align-block-center`
* `labels-align-block-end`
* `labels-align-inline-start`
* `labels-align-inline-center`
* `labels-align-inline-end`

The alignment class use logical properties naming conventions to keep the chart flow-relative based on the page writing directions.

```html{1,13}
<table class="charts-css column multiple show-labels labels-align-inline-start">
  ...
</table>
```

<code-example code-example-id="labels-example-5">
<template v-slot:css-code>
#labels-example-5 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="labels-example-5">
  <table class="charts-css column multiple show-labels hide-data labels-align-inline-start">
    <caption> Labels Example #5 </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="labels-example-6">
<template v-slot:css-code>
#labels-example-6 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<div id="labels-example-6">
  <table class="charts-css column multiple show-labels hide-data labels-align-inline-end">
    <caption> Labels Example #6 </caption>
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
</div>
</template>
</code-example>

To override a specific label, use the `--labels-align-inline` or  `--labels-align-block` variables on `<th>` or `<tr>` elements.

For example, use `labels-align-block-end` to align all the labels to the end on the block axis, and align a specific label to the start using `--labels-align-block: start` style.

```html{1,13}
<table class="charts-css column show-labels labels-align-block-end">

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
      <th scope="row" style="--labels-align-block: start"> Label </th>
      <td> Data </td>
    </tr>
    <tr>
      <th scope="row"> Label </th>
      <td> Data </td>
    </tr>
  </tbody>

</table>
```

<code-example code-example-id="labels-example-7">
<template v-slot:css-code>
#labels-example-7 {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
#labels-example-7 .column {
  --labels-size: 3rem;
}
#labels-example-7 .column th {
  background-color: rgba(255, 220, 200, 0.5);
}
</template>
<template v-slot:html-code>
<div id="labels-example-7">
  <table class="charts-css column hide-data show-labels labels-align-block-end">
    <caption> Labels Example #3 </caption>
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
        <th scope="row" style="--labels-align-block: start;"> Apr </th>
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
        <th scope="row" style="--labels-align-block: start;"> Oct </th>
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
