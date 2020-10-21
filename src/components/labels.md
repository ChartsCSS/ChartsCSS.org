---
permalink: /components/labels/
---

# Labels

Labels are used to describe the data or the dataset over the primary axis.

## Add Labels

To add labels to your primary axis, use `<th>` heading tags. To mark it as a row heading add the `scope="row"` attribute.

```html{12,16,20,24,28,32,36,40,44,48,52,56}
<table class="charts-css column">

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

<code-example>
<style>
#labels-example-1 {
  height: 250px;
  margin: 0 auto;
}
</style>
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
</code-example>

## Label Position

Direction free class names is a key philosophical guideline. It makes it easier to change the chart type without the need of changing the other class.

Above all, this way we can support all language directions including left-to-right (LTR), right-to-left (RTL) and top-to-bottom (TTB).

Labels position can be controlled with `.labels-before` and `.labels-after` classes.

```html
<table class="charts-css bar labels-after">
  ...
</table>
```

It does not matter where you start writing in your language from, you know where is "before" and where is "after". Displaying labels before or after the chart is relatively easy.

<v-row>

<v-col>

<code-example>
<style>
#labels-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column labels-after" id="labels-example-2">

  <caption> Labels Example #2 </caption>

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
#labels-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column labels-before" id="labels-example-3">

  <caption> Labels Example #3 </caption>

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

<br>

<v-row>

<v-col>

<code-example>
<style>
#labels-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar labels-before" id="labels-example-4">

  <caption> Labels Example #4 </caption>

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
#labels-example-5 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar labels-after" id="labels-example-5">

  <caption> Labels Example #5 </caption>

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

## Label Size

Some chart use long labels others use short ones. To customize the label size use the `--labels-size` CSS variables.

Custom labels size for bar charts:

```css
#bar-chart-labels-size {
  --labels-size: 200px;
}
```

Custom labels size for column charts:

```css
#column-chart-labels-size {
  --labels-size: 3rem;
}
```

## Hide Labels

There are two ways to hide your labels. You can delete `<th scope="row"></th>` tags, but as mentioned previously this is a bad practice. The other way is to use the `.labels-hide` class.

```html
<table class="charts-css column labels-hide">
  ...
</table>
```

<code-example>
<style>
#labels-example-6 {
  height: 250px;
  margin: 0 auto;
}
</style>
<table class="charts-css column hide-data labels-hide" id="labels-example-6">

  <caption> Labels Example #6 </caption>

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
</code-example>

## Align Labels

Lastly, you can play with the label text alignment. Use the `labels-align-start`, `labels-align-center` and `labels-align-end` classes.

```html{1,13}
<table class="charts-css column multiple labels-align-start">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#labels-example-7 {
  height: 250px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple hide-data labels-align-start" id="labels-example-7">

  <caption> Labels Example #7 </caption>

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
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#labels-example-8 {
  height: 250px;
  max-width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column multiple hide-data  labels-align-end" id="labels-example-8">

  <caption> Labels Example #8 </caption>

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
</code-example>

</v-col>

</v-row>

To override a specific label use the `--labels-align` variable on `<th>` or `<tr>` elements.

```html{1,13}
<table class="charts-css column labels-align-start">

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