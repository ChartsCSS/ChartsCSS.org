---
permalink: /docs/usage/
---

# Usage

**Charts.css** visualize data by applying **CSS classes** on HTML tags. The data is structured using semantic HTML tags and styled using CSS classes which change the visual representation displayed to the end user.

## Data Table

The raw data placed in the document as HTML `<table>` tag, making it visible to search engines and screen readers.

Example data table:

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

## Apply Charts.css

To display the data as a chart, first you need to add the `.charts-css` class to the `<table>` element:

```html
<table class="charts-css">
  ...
</table>
```

## Chart Types

Next, choose one of the [chart types](/charts/) and apply it on your data table using a simple CSS class. For example, add the `.bar` class to display the data as a [bar chart](/charts/bar/):

```html
<table class="charts-css bar">
  ...
</table>
```

## Component Classes

The framework offers many [utility classes](/components/) to enhance chart visibility. For example, you can reverse the order of the data without changing the markup. You can add all kind of axes to your chart. You can add tooltip describing the data. And much more.

```html
<table class="charts-css bar hide-data show-primary-axis show-data-axes">
  ...
</table>
```

If your class becomes longer then expected and unreadable, you can use [class grouping](https://piccalil.li/blog/cube-css/#heading-grouping) technique introduced by Andy Bell.

```html
<table class="charts-css [ line ] [ multiple ] [ show-labels labels-align-start ] [ hide-data reverse-data data-spacing-5 ] [ show-primary-axis show-data-axes ] ">
  ...
</table>
```

## Custom Styling

The best advantage the framework has to offer is the ability to [customize](/customization/) the visibility using CSS. You can select any HTML element inside the `<table>` and add your own CSS rules.

You can use either an `id` or a `class` for your custom styles. In any case, you need to know basic concepts like CSS specificity, and know when one rule overrides the other.

```html{1}
<table class="charts-css bar ..." id="my-chart">
  ...
</table>
```

```css
#my-chart {
  ...
}
```

Or with a wrapper element:

```html{1}
<div id="my-chart">
  <table class="charts-css bar ...">
    ...
  </table>
</div>
```

```css
#my-chart .bar {
  ...
}
```

To demonstrate how easy it is, check out our basic examples for creating [3D effects](/customization/3d-effects/), [motion effects](/customization/motion-effects/) and [animations](/customization/animations/). It's amazing what you can do with a few lines of CSS.
