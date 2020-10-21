---
permalink: /charts/column/
---

# Column

Column charts display raw data as vertical columns.

## Usage

To visualize your data with column chart, the main `.charts-css` class should be followed by the `.column` class.

```html
<table class="charts-css column">
  ...
</table>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-column-chart {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
```

```html
<table class="charts-css column" id="my-column-chart">
  ...
</table>
```

## Labels

You can control the labels positions and size.

### Labels Position

By default the labels are displayed after the chart. To display the labels before the chart use the `.labels-before` class.

```html
<table class="charts-css column labels-before">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="column-example-1">

  <caption> Column Example #1 </caption>

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
#column-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column labels-before" id="column-example-2">

  <caption> Column Example #2 </caption>

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
#my-column-chart {
  --labels-size: 3em;
}
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="column-example-3">

  <caption> Column Example #3 </caption>

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
#column-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --labels-size: 3em;
}
</style>
<table class="charts-css column" id="column-example-4">

  <caption> Column Example #4 </caption>

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
<table class="charts-css column show-primary-axis">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-5 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="column-example-5">

  <caption> Column Example #5 </caption>

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
#column-example-6 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis" id="column-example-6">

  <caption> Column Example #6 </caption>

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
<table class="charts-css column show-4-secondary-axes">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-7 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-4-secondary-axes" id="column-example-7">

  <caption> Column Example #7 </caption>

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
#column-example-8 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-10-secondary-axes" id="column-example-8">

  <caption> Column Example #8 </caption>

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
<table class="charts-css column show-data-axes">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-9 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-data-axes" id="column-example-9">

  <caption> Column Example #9 </caption>

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
#column-example-10 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-4-secondary-axes show-data-axes" id="column-example-10">

  <caption> Column Example #10 </caption>

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
<table class="charts-css column data-spacing-20">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-11 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-data-axes" id="column-example-11">

  <caption> Column Example #11 </caption>

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
#column-example-12 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-data-axes data-spacing-20" id="column-example-12">

  <caption> Column Example #12 </caption>

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
<table class="charts-css column multiple datasets-spacing-10">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-13 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple show-primary-axis show-data-axes" id="column-example-13">

  <caption> Column Example #13 </caption>

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
#column-example-14 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple show-primary-axis show-data-axes datasets-spacing-10" id="column-example-14">

  <caption> Column Example #14 </caption>

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
<table class="charts-css column reverse-data">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-15 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column" id="column-example-15">

  <caption> Column Example #15 </caption>

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
#column-example-16 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column reverse-data" id="column-example-16">

  <caption> Column Example #16 </caption>

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
<table class="charts-css column reverse-datasets">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#column-example-17 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple data-spacing-10 show-primary-axis show-data-axes" id="column-example-17">

  <caption> Column Example #17 </caption>

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
#column-example-18 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple data-spacing-10 show-primary-axis show-data-axes reverse-datasets" id="column-example-18">

  <caption> Column Example #18 </caption>

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
