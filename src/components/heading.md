---
permalink: /components/heading/
---

# Heading

A heading briefly describing the content of the chart.

## Add a Heading

Semantically speaking, any content on the page should have a heading. With `<table>` you should use the `<caption>` tag to specify the caption (or title) of a table.

```html{2}
<table>
  <caption> Custom Heading </caption>
  ...
</table>
```

## Display the Heading

**By default the heading is hidden**. To display the heading use the `.show-heading` class.

```html{1}
<table class="charts-css column show-heading">
  <caption> Custom Heading </caption>
  ...
</table>
```

<v-row>

<code-example code-example-id="heading-example-1">
<template v-slot:css-code>
#heading-example-1 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column" id="heading-example-1">

  <caption> Hidden Chart Heading </caption>

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
</template>
</code-example>

<code-example code-example-id="heading-example-2">
<template v-slot:css-code>
#heading-example-2 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-heading" id="heading-example-2">

  <caption> Visible Chart Heading </caption>

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
</template>
</code-example>

</v-row>

## Style the Heading

To style the heading you can use regular CSS but with very long headings you will need to increase the `<caption>` height. To keep the chart proportions use the `--heading-size` variable.

```css{3}
#my-chart {
  height: 200px;
  --heading-size: 3rem;
}
#my-chart caption {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
}
```

<v-row>

<code-example code-example-id="heading-example-3">
<template v-slot:css-code>
#heading-example-3 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-heading" id="heading-example-3">

  <caption> A Very Long Chart Heading Without any Custom Styling Applied on Captions </caption>

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
</template>
</code-example>

<code-example code-example-id="heading-example-4">
<template v-slot:css-code>
#heading-example-4 {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
  --heading-size: 3rem;
}
#heading-example-4 caption {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
}
</template>
<template v-slot:html-code>
<table class="charts-css column show-heading" id="heading-example-4">

  <caption> A Very Long Chart Heading With Some Custom Styling Applied on Captions </caption>

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
</template>
</code-example>

</v-row>
