---
prev: ../components/legend
next: ./bar
---

# Charts

**Charts.css** comes with several built-in chart types and each type has built-in features.

## Chart Types

Before using charts, check the development status. If a chart type is already released, you can use it with the **usage class**.

| Type                | Development Status                                                  | Usage Class         |
|:--------------------|:--------------------------------------------------------------------|:--------------------|
| [Bar](./bar/)       | <Badge type="tip" vertical="middle" text="Released" />              | `charts-css bar`    |
| [Column](./column/) | <Badge type="tip" vertical="middle" text="Released" />              | `charts-css column` |
| [Line](./line/)     | <Badge type="warning" vertical="middle" text="Under Development" /> | `charts-css line`   |
| [Bubble](./bubble/) | <Badge type="warning" vertical="middle" text="Under Development" /> | `charts-css bubble` |
| [Pie](./pie/)       | <Badge type="warning" vertical="middle" text="Under Development" /> | `charts-css pie`    |
| [Donut](./donut/)   | <Badge type="warning" vertical="middle" text="Under Development" /> | `charts-css donut`  |
| [Radar](./radar/)   | <Badge type="warning" vertical="middle" text="Under Development" /> | `charts-css radar`  |
| [Polar](./polar/)   | <Badge type="warning" vertical="middle" text="Under Development" /> | `charts-css polar`  |

## Supported Features

The current state of supported feature:

<style>
#features {
  width: 100%;
  max-width: 100%;
}
#features thead tr th:not(:first-of-type) {
  transform: rotate(-90deg);
  width: 60px;
  height: 80px;
  padding: 0;
  text-align: start;
}
#features tbody tr th {
  text-align: left;
  font-weight: normal;
}
</style>
<table id="features">

  <thead>
    <tr>
      <th scope="col"> Feature / Class </th>
      <th scope="col"> Bar </th>
      <th scope="col"> Column </th>
      <th scope="col"> Line </th>
      <th scope="col"> Bubble </th>
      <th scope="col"> Pie </th>
      <th scope="col"> Donut </th>
      <th scope="col"> Radar </th>
      <th scope="col"> Polar </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> [single dataset]</th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .multiple </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .hide-data </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .show-data-on-hover </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .labels-before </th>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .labels-after </th>
      <td> <status-x /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .labels-hide </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .labels-align-start </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .labels-align-center </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .labels-align-end </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .show-primary-axis </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .show-*-secondary-axes </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .show-data-axes </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .data-spacing-* </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .datasets-spacing-* </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .reverse-data </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .reverse-datasets </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> .stacked </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> [tooltips] </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> [table caption] </th>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
  </tbody>

</table>

* <status-v /> : Released and working.
* <status-d /> : Currently under development.
* <status-x /> : Not developed yet.
