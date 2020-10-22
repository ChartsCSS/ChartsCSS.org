---
permalink: /charts/bar/
prev: ../
---

# Bar

Bar charts display raw data as horizontal bars.

## Usage

To visualize your data with bar chart, the main `.charts-css` class should be followed by the `.bar` class.

```html
<table class="charts-css bar">
  ...
</table>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart.bar {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
```

```html
<table class="charts-css bar" id="my-bar-chart">
  ...
</table>
```

## Labels

You can control the labels positions and size.

### Labels Position

By default the labels are displayed before the chart. To display the labels after the chart use the `.labels-after` class.

```html
<table class="charts-css bar labels-after">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar" id="bar-example-1">

  <caption> Bar Example #1 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar labels-after" id="bar-example-2">

  <caption> Bar Example #2 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

### Labels Size

Some chart use long labels others use short ones. To customize the label size use the `--labels-size` variable.

```css
#my-chart.bar {
  --labels-size: 50px;
}
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --labels-size: 50px;
}
</style>
<table class="charts-css bar" id="bar-example-3">

  <caption> Bar Example #3 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --labels-size: 50px;
}
</style>
<table class="charts-css bar labels-after" id="bar-example-4">

  <caption> Bar Example #4 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

## Axes

You can control the axes that will be displayed on the chart.

### Primary Axis

To add a primary axis to separate the labels from the chart itself use the `.show-primary-axis` class.

```html
<table class="charts-css bar show-primary-axis">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-5 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar" id="bar-example-5">

  <caption> Bar Example #5 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-6 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis" id="bar-example-6">

  <caption> Bar Example #6 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

### Secondary Axes

To add secondary axes, located inside the chart itself, use the `.show-*-secondary-axes` class.

```html
<table class="charts-css bar show-4-secondary-axes">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-7 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-4-secondary-axes" id="bar-example-7">

  <caption> Bar Example #7 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.25"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.5"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.125"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.75"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.25"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-8 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-10-secondary-axes" id="bar-example-8">

  <caption> Bar Example #8 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

### Data Axes

To add data axes which are auto-generated based on the amount of rows (`<tr>` tags) you have. Use the `.show-data-axes` class to add them.

```html
<table class="charts-css bar show-data-axes">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-9 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-data-axes" id="bar-example-9">

  <caption> Bar Example #9 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.25"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.5"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.125"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.75"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.25"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-10 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-4-secondary-axes show-data-axes" id="bar-example-10">

  <caption> Bar Example #10 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

## Spacing

You can control the space between the data items and between the datasets.

### Data Spacing

To add spacing between data items use the `.data-spacing-*` class.

```html
<table class="charts-css bar data-spacing-10">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-11 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-data-axes" id="bar-example-11">

  <caption> Bar Example #11 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-12 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-data-axes data-spacing-10" id="bar-example-12">

  <caption> Bar Example #12 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

### Datasets Spacing

To add spacing between data items use the `.datasets-spacing-*` class.

```html
<table class="charts-css bar multiple datasets-spacing-10">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-13 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar multiple show-primary-axis show-data-axes" id="bar-example-13">

  <caption> Bar Example #13 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1</th>
      <th scope="col"> Progress 2</th>
      <th scope="col"> Progress 3</th>
      <th scope="col"> Progress 4</th>
      <th scope="col"> Progress 5</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.5;"> </td>
      <td style="--size: 1.0;"> </td>
      <td style="--size: 0.7;"> </td>
      <td style="--size: 0.4;"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-14 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar multiple show-primary-axis show-data-axes datasets-spacing-10" id="bar-example-14">

  <caption> Bar Example #14 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1</th>
      <th scope="col"> Progress 2</th>
      <th scope="col"> Progress 3</th>
      <th scope="col"> Progress 4</th>
      <th scope="col"> Progress 5</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.5;"> </td>
      <td style="--size: 1.0;"> </td>
      <td style="--size: 0.7;"> </td>
      <td style="--size: 0.4;"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

## Reverse Order

You can reverse the order of the elements without changing the HTML markup.

### Reverse Data Order

To reverse thr data order use the `.reverse-data` class.

```html
<table class="charts-css bar reverse-data">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-15 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar" id="bar-example-15">

  <caption> Bar Example #15 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-16 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar reverse-data" id="bar-example-16">

  <caption> Bar Example #16 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.4"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.8"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 1"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

### Reverse Datasets Order

To reverse datasets order use the `.reverse-datasets` class.

```html
<table class="charts-css bar reverse-datasets">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-17 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar multiple data-spacing-10 show-primary-axis show-data-axes" id="bar-example-17">

  <caption> Bar Example #17 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1</th>
      <th scope="col"> Progress 2</th>
      <th scope="col"> Progress 3</th>
      <th scope="col"> Progress 4</th>
      <th scope="col"> Progress 5</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.5;"> </td>
      <td style="--size: 1.0;"> </td>
      <td style="--size: 0.7;"> </td>
      <td style="--size: 0.4;"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-18 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar multiple data-spacing-10 show-primary-axis show-data-axes reverse-datasets" id="bar-example-18">

  <caption> Bar Example #18 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1</th>
      <th scope="col"> Progress 2</th>
      <th scope="col"> Progress 3</th>
      <th scope="col"> Progress 4</th>
      <th scope="col"> Progress 5</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.5;"> </td>
      <td style="--size: 1.0;"> </td>
      <td style="--size: 0.7;"> </td>
      <td style="--size: 0.4;"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>

### Reverse Data & Datasets Order

You can combine the two classes to reverse data order and datasets order.

```html
<table class="charts-css bar reverse-data reverse-datasets">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#bar-example-19 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar multiple data-spacing-10 show-primary-axis show-data-axes" id="bar-example-19">

  <caption> Bar Example #19 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1</th>
      <th scope="col"> Progress 2</th>
      <th scope="col"> Progress 3</th>
      <th scope="col"> Progress 4</th>
      <th scope="col"> Progress 5</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.5;"> </td>
      <td style="--size: 1.0;"> </td>
      <td style="--size: 0.7;"> </td>
      <td style="--size: 0.4;"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#bar-example-20 {
  height: 400px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar multiple data-spacing-10 show-primary-axis show-data-axes reverse-data reverse-datasets" id="bar-example-20">

  <caption> Bar Example #20 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress 1</th>
      <th scope="col"> Progress 2</th>
      <th scope="col"> Progress 3</th>
      <th scope="col"> Progress 4</th>
      <th scope="col"> Progress 5</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2000 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.5;"> </td>
      <td style="--size: 1.0;"> </td>
      <td style="--size: 0.7;"> </td>
      <td style="--size: 0.4;"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.2;"> </td>
      <td style="--size: 0.4;"> </td>
      <td style="--size: 0.6;"> </td>
      <td style="--size: 0.8;"> </td>
      <td style="--size: 1.0;"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

</v-row>
