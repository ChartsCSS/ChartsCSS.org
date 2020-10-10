---
permalink: /docs/usage/
next: ../../components/
---

# Usage

**Charts.css** visualize data by applying **CSS classes** on HTML tags. The data is structured using semantic HTML tags and styled using CSS classes which change the visual representation displayed to the end user.

## Data

The raw data placed in the document as HTML tags, making it visible to search engines and screen readers. This improve accessibility and SEO.

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

To display the data table as a chart just add the `.charts-css` class to the `<table>` element:

```html
<table class="charts-css">
    ...
</table>
```

## Chart Types

Next, choose one of the **[chart types](/charts/)** and apply it to your data using a simple CSS class. For example, add the `.bar` class to display the data as a [bar chart](/charts/bar/):

```html
<table class="charts-css bar">
    ...
</table>
```

That's it! You've just turned your data table element into a chart.

## Utility Classes

Each chart has its own utility classes to enhance the visibility. For example, you can reverse the data order without changing the markup. You can add all kind of axes to your chart. You can add tooltip to your data. The framework even lets you add animations and motion effects.

## Custom Styling

The best advantage the framework has to offer is the ability to customize the visibility using CSS. You can select and HTML element and add your own CSS rules.
