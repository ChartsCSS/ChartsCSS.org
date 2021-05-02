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
| [Area](./area/)     | <Badge type="tip" vertical="middle" text="Released" />              | `charts-css area  ` |
| [Line](./line/)     | <Badge type="tip" vertical="middle" text="Released" />              | `charts-css line`   |
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
  width: 40px;
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
      <th scope="col"> Area </th>
      <th scope="col"> Line </th>
      <th scope="col"> Pie </th>
      <th scope="col"> Donut </th>
      <th scope="col"> Radar </th>
      <th scope="col"> Polar </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> <code>show-heading</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-d /> </td>
      <td> <status-d /> </td>
      <td> <status-d /> </td>
      <td> <status-d /> </td>
    </tr>
    <tr>
      <th scope="row"> [single dataset] </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>multiple</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>hide-data</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>show-data-on-hover</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>reverse</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>show-labels</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>labels-align-start</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>labels-align-center</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>labels-align-end</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>show-primary-axis</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>show-*-secondary-axes</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>show-data-axes</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>data-spacing-*</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>datasets-spacing-*</code> </th>
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
      <th scope="row"> <code>reverse-data</code> </th>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-v /> </td>
      <td> <status-d /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
      <td> <status-x /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>reverse-datasets</code> </th>
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
      <th scope="row"> <code>stacked</code> </th>
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
  </tbody>

</table>

* <status-v /> : Released and working.
* <status-d /> : Currently under development.
* <status-x /> : Not developed yet.
