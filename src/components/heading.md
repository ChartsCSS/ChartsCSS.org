---
permalink: /components/heading/
---

# Heading

The heading briefly describes the chart content and its data.

## Add a Heading

Semantically speaking, any content on the page should have a heading. With `<table>` you should use the `<caption>` tag to specify the caption (or title) of a table.

```html{2}
<table>
  <caption> Custom Heading </caption>
  ...
</table>
```

## Display the Heading

**By default, the heading is hidden**. To display the heading use the `.show-heading` class.

```html{1}
<table class="charts-css column show-heading">
  <caption> Custom Heading </caption>
  ...
</table>
```

<v-row>

<code-example code-example-id="heading-example-1">
<template v-slot:css-code>
#heading-example-1  {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#heading-example-1 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="heading-example-1">
  <table class="charts-css column">
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
</div>
</template>
</code-example>

<code-example code-example-id="heading-example-2">
<template v-slot:css-code>
#heading-example-2 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#heading-example-2 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="heading-example-2">
  <table class="charts-css column show-heading">
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
</div>
</template>
</code-example>

</v-row>

## Heading Size

Since the `<caption>` element is separated from the `<tbody>`, the chart proportions will remain the same whether you use a short or long heading.

<v-row>

<code-example code-example-id="heading-example-3">
<template v-slot:css-code>
#heading-example-3 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#heading-example-3 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="heading-example-3">
  <table class="charts-css column show-heading">
    <caption> Short heading </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="heading-example-4">
<template v-slot:css-code>
#heading-example-4 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#heading-example-4 .column {
  --aspect-ratio: 4 / 3;
}
</template>
<template v-slot:html-code>
<div id="heading-example-4">
  <table class="charts-css column show-heading">
    <caption> A lengthy chart heading that spans across multiple lines </caption>
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
</div>
</template>
</code-example>

</v-row>

## Style the Heading

To style the heading, use regular HTML inside the `<caption>`:

```html
<caption>
  Chart <em>heading</em> with custom HTML tags
  inside the <code>caption</code> element.
</caption>
```

Or regular CSS, targeting the chart `caption`:

```css
#my-chart .column caption {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
}
```

<v-row>

<code-example code-example-id="heading-example-5">
<template v-slot:css-code>
#heading-example-5 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#heading-example-5 .column {
  --aspect-ratio: 4 / 3;
}
#heading-example-5 .column caption {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
  padding-block: 10px;
}
</template>
<template v-slot:html-code>
<div id="heading-example-5">
  <table class="charts-css column show-heading">
    <caption> Chart heading styled with custom CSS </caption>
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
</div>
</template>
</code-example>

<code-example code-example-id="heading-example-6">
<template v-slot:css-code>
#heading-example-6 {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#heading-example-6 .column {
  --aspect-ratio: 4 / 3;
}
#heading-example-6 .column caption {
  padding-block: 10px;
}
</template>
<template v-slot:html-code>
<div id="heading-example-6">
  <table class="charts-css column show-heading">
    <caption>
      <strong>Chart heading</strong> styled with <em>HTML</em> tags
    </caption>
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
</div>
</template>
</code-example>

</v-row>