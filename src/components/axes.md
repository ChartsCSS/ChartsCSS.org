---
permalink: /components/axes/
---

# Axes

Chart axes are used to visually categorize and measure the data.

## Axes Types

### General Definitions

There are 3 types of axes:
* **Vertical axis**, also known as Y axis.
* **Horizontal axis**, known as X axis.
* **Depth axis**, which is known as Z axis.

Different chart types use different axes systems. Here are some examples:
* **Single axis charts** are used by Polar chart. 
* **Dual axes charts** used by Column chart, Bar chart and Line chart. 
* **Triple axes charts** are used by 3D column chart, 3D pyramid chart and 3D cone chart.

### Chart.css Axes

Currently **Chart.css** supports only Y & X axis as there are no triple axes charts (yet).

The axis system designed as a separate component. It has several CSS class. **All axes are hidden by default**. Using the utility classes you choose which axes to display.

### Naming Convention

One of the framework philosophical guidelines is to use direction free class names. This way can support out-of-the-box all languages, left-to-right (LTR), right-to-left (RTL) and top-to-bottom (TTB).

Class like `.show-x-axes` and `.show-y-axes` deprecated early-on in favor of `.show-primary-axis`, `.show-*-secondary-axes`, `.show-data-axes` and `.show-dataset-axes`. 

### Supported Axes

Currently, **Chart.css** axes system supports 3 types of axes:

* **Primary Axis** separating the labels from the chart.
* **Secondary Axes** located inside the chart itself, parallel to the primary axis.
* **Data Axes** located inside the chart itself, crossing the primary axis.

## Add Primary Axis

The primary axis separate the labels from the chart itself. To display the primary axis use the `.show-primary-axis` class.

Note that in bar chart the primary axis is horizontal while in column chart it is vertical. If the change the labels position (before of after), the primary axis will change its position too.

```html
<table class="charts-css bar show-primary-axis">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#axes-example-1 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis" id="axes-example-1">

  <caption> Axes Example #1 </caption>

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
#axes-example-2 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis labels-before" id="axes-example-2">

  <caption> Axes Example #2 </caption>

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
#axes-example-3 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis labels-after" id="axes-example-3">

  <caption> Axes Example #3 </caption>

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
#axes-example-4 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis" id="axes-example-4">

  <caption> Axes Example #4 </caption>

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

To customize the primary axis use the following CSS variable:

```css
#primary-axis {
  --primary-axis-color: rgba(0, 0, 0, 1);
  --primary-axis-style: solid;
  --primary-axis-width: 1px;
}
```

## Add Secondary Axes

If the primary axis separate the labels from the chart, the secondary axes are located inside the chart itself. Therefor you can choose how much axes to display. Use the `.show-*-secondary-axes` class.

```html
<table class="charts-css bar show-4-secondary-axes">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#axes-example-5 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-2-secondary-axes" id="axes-example-5">

  <caption> Axes Example #5 </caption>

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
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.4"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#axes-example-6 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-6-secondary-axes labels-before" id="axes-example-6">

  <caption> Axes Example #6 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.5"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.16"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.33"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.07"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.67"> </td>
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
#axes-example-7 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-4-secondary-axes labels-after" id="axes-example-7">

  <caption> Axes Example #7 </caption>

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
#axes-example-8 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-10-secondary-axes" id="axes-example-8">

  <caption> Axes Example #8 </caption>

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

To customize the secondary axes use the following CSS variable:

```css
#secondary-axes {
  --secondary-axes-color: rgba(0, 0, 0, 1);
  --secondary-axes-style: solid;
  --secondary-axes-width: 1px;
}
```

## Add Data Axes

Data axes are based on the amount of rows (`<tr>` tags), therefor data axes are auto-generated using CSS border property. To display data axes use the `.show-data-axes` class.

```html
<table class="charts-css bar show-data-axes">
  ...
</table>
```

<v-row>

<v-col>

<code-example>
<style>
#axes-example-9 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-4-secondary-axes show-data-axes" id="axes-example-9">

  <caption> Axes Example #9 </caption>

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
      <td style="--size: 0.2"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.6"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.4"> </td>
    </tr>
  </tbody>

</table>
</code-example>

</v-col>

<v-col>

<code-example>
<style>
#axes-example-10 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css column show-primary-axis show-4-secondary-axes show-data-axes labels-before" id="axes-example-10">

  <caption> Axes Example #10 </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Progress </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: 0.5"> </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: 0.16"> </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: 0.33"> </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: 0.07"> </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: 0.67"> </td>
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
#axes-example-11 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-4-secondary-axes show-data-axes labels-after" id="axes-example-11">

  <caption> Axes Example #11 </caption>

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
#axes-example-12 {
  height: 200px;
  width: 300px;
  margin: 0 auto;
}
</style>
<table class="charts-css bar show-primary-axis show-4-secondary-axes show-data-axes" id="axes-example-12">

  <caption> Axes Example #12 </caption>

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

To customize the data axes use the following CSS variable:

```css
#data-axes {
  --data-axes-color: rgba(0, 0, 0, 0.15);
  --data-axes-style: solid;
  --data-axes-width: 1px;
}
```
