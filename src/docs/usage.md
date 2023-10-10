---
permalink: /docs/usage/
---

# Usage

**Charts.css** visualizes data by applying **CSS classes** on HTML tags. The data is structured using semantic HTML tags and styled using CSS classes which change the visual representation displayed to the end user.

## HTML Tables

To make the data visible to search engines and accessible for screen readers, **Charts.css** is based on standard HTML `<table>` elements.

Example HTML table containing some data:

```html
<table>

  <caption> 2016 Summer Olympics Medal Table </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Gold </th>
      <th scope="col"> Silver </th>
      <th scope="col"> Bronze </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td> 46 </td>
      <td> 37 </td>
      <td> 38 </td>
    </tr>
    <tr>
      <th scope="row"> GBR </th>
      <td> 27 </td>
      <td> 23 </td>
      <td> 17 </td>
    </tr>
    <tr>
      <th scope="row"> CHN </th>
      <td> 26 </td>
      <td> 18 </td>
      <td> 26 </td>
    </tr>
  </tbody>

</table>
```

Result:

<table>

  <caption> 2016 Summer Olympics Medal Table </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Gold </th>
      <th scope="col"> Silver </th>
      <th scope="col"> Bronze </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td> 46 </td>
      <td> 37 </td>
      <td> 38 </td>
    </tr>
    <tr>
      <th scope="row"> GBR </th>
      <td> 27 </td>
      <td> 23 </td>
      <td> 17 </td>
    </tr>
    <tr>
      <th scope="row"> CHN </th>
      <td> 26 </td>
      <td> 18 </td>
      <td> 26 </td>
    </tr>
  </tbody>

</table>

## Add Data

To make the data available for use by **Charts.css**, it should be converted to CSS variables.

The same table with CSS `--size` variables:

```html{17-19,23-25,29-31}
<table>

  <caption> 2016 Summer Olympics Medal Table </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Gold </th>
      <th scope="col"> Silver </th>
      <th scope="col"> Bronze </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td style="--size: 0.46"> 46 </td>
      <td style="--size: 0.37"> 37 </td>
      <td style="--size: 0.38"> 38 </td>
    </tr>
    <tr>
      <th scope="row"> GBR </th>
      <td style="--size: 0.27"> 27 </td>
      <td style="--size: 0.23"> 23 </td>
      <td style="--size: 0.17"> 17 </td>
    </tr>
    <tr>
      <th scope="row"> CHN </th>
      <td style="--size: 0.26"> 26 </td>
      <td style="--size: 0.18"> 18 </td>
      <td style="--size: 0.26"> 26 </td>
    </tr>
  </tbody>

</table>
```

This has no effect on the table:

<table>

  <caption> 2016 Summer Olympics Medal Table </caption>

  <thead>
    <tr>
      <th scope="col"> Country </th>
      <th scope="col"> Gold </th>
      <th scope="col"> Silver </th>
      <th scope="col"> Bronze </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> USA </th>
      <td style="--size: 0.46"> 46 </td>
      <td style="--size: 0.37"> 37 </td>
      <td style="--size: 0.38"> 38 </td>
    </tr>
    <tr>
      <th scope="row"> GBR </th>
      <td style="--size: 0.27"> 27 </td>
      <td style="--size: 0.23"> 23 </td>
      <td style="--size: 0.17"> 17 </td>
    </tr>
    <tr>
      <th scope="row"> CHN </th>
      <td style="--size: 0.26"> 26 </td>
      <td style="--size: 0.18"> 18 </td>
      <td style="--size: 0.26"> 26 </td>
    </tr>
  </tbody>

</table>

This is an expected behavior. Search engines and screen readers should consume the table in its original form.

## Charts.css Utility Classes

To transform the HTML table to a chart, the framework offers several [chart types](/charts/) and [components](/components/). To apply any of them, simply add the relevant CSS class to the table.

### General Class

First, add the general `.charts-css` class to the `<table>` element to resets any existing styles:

```html
<table class="charts-css">
  ...
</table>
```

### Chart Type Classes

Next, choose one of the [chart types](/charts/) and apply it to your data table using a simple CSS class. For example, add the `.bar` class to display the data as a [bar chart](/charts/bar/):

```html
<table class="charts-css bar">
  ...
</table>
```

### Component Classes

The framework offers many [utility classes](/components/) to enhance chart visibility. For example, you can reverse the order of the data without changing the markup. You can add all kinds of axes to your chart. You can add tooltips describing the data. And much more.

```html
<table class="charts-css bar hide-data show-primary-axis show-data-axes">
  ...
</table>
```

If the class becomes longer then expected and unreadable, use the [class grouping](https://piccalil.li/blog/cube-css/#heading-grouping) technique introduced by **Andy Bell**.

```html
<table class="charts-css [ line ] [ multiple ] [ show-heading ] [ show-labels labels-align-start ] [ hide-data reverse-data data-spacing-5 ] [ show-primary-axis show-data-axes ] ">
  ...
</table>
```

## Custom Styling

The biggest advantage this framework has to offer is the ability to [customize](/customization/) visibility using CSS. Select any HTML element inside the `<table>` and add your own CSS rules.

Use either an `id` or a `class` attribute for your custom styles. In any case, you need to know basic concepts like CSS specificity, and know when one rule overrides the other.

The `id` attribute can be applied to a wrapper element:

```html{1}
<div id="my-chart">

  <table class="charts-css bar">
    ...
  </table>

  <ul class="charts-css legend">
    ...
  </ul>

</div>
```

```css
#my-chart {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}
#my-chart .bar {
  ...
}
#my-chart .legend {
  ...
}
```

To demonstrate how easy it is to add custom styling, check out our examples for applying [basic styles](/customization/basic-styling/), [3D effects](/customization/3d-effects/), [motion effects](/customization/motion-effects/) and [animations](/customization/animations/). It's amazing what you can do with a few lines of CSS.
