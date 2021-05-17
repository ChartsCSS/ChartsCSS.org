---
permalink: /development/supported-features/
---

# Supported Features

The current state of supported features.

## Classes

A list of components and their support.

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
      <th scope="col"> Radial </th>
      <th scope="col"> Pie </th>
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
      <td> <status-x /> </td>
      <td> <status-d /> </td>
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
      <td> <status-d /> </td>
      <td> <status-d /> </td>
      <td> <status-d /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>show-data-on-hover</code> </th>
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
      <td> <status-d /> </td>
      <td> <status-d /> </td>
      <td> <status-d /> </td>
    </tr>
    <tr>
      <th scope="row"> <code>show-*-secondary-axes</code> </th>
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
      <td> <status-x /> </td>
      <td> <status-d /> </td>
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

## Variables

A list of supported CSS variables.

<style>
#variable {
  width: 100%;
  max-width: 100%;
}
#variable tbody tr th {
  text-align: left;
  vertical-align: top;
}
</style>
<table id="variable">

  <thead>
    <tr>
      <th scope="col"> Component </th>
      <th scope="col"> Variable </th>
      <th scope="col"> Type </th>
      <th scope="col"> Default Value </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th> Size </th>
      <td> <code>--size</code> </td>
      <td> <code>number</code> </td>
      <td> 0 </td>
    </tr>
    <tr>
      <th rowspan="2"> Color </th>
      <td> <code>--color</code> </td>
      <td> <code>color</code> </td>
      <td> transparent </td>
    </tr>
    <tr>
      <td> <code>--color-*</code> </td>
      <td> <code>color</code> </td>
      <td> transparent </td>
    </tr>
    <tr>
      <th> Heading </th>
      <td> <code>--heading-size</code> </td>
      <td> <code>length</code> </td>
      <td> 0 </td>
    </tr>
    <tr>
      <th rowspan="2"> Labels </th>
      <td> <code>--labels-size</code> </td>
      <td> <code>length</code> </td>
      <td> 0 </td>
    </tr>
    <tr>
      <td> <code>--labels-align</code> </td>
      <td> <code>string</code> </td>
      <td> center </td>
    </tr>
    <tr>
      <th rowspan="9"> Axes </th>
      <td> <code>--primary-axis-color</code> </td>
      <td> <code>color</code> </td>
      <td> transparent </td>
    </tr>
    <tr>
      <td> <code>--primary-axis-style</code> </td>
      <td> <code>line-style</code> </td>
      <td> solid </td>
    </tr>
    <tr>
      <td> <code>--primary-axis-width</code> </td>
      <td> <code>length</code> </td>
      <td> 1px </td>
    </tr>
    <tr>
      <td> <code>--secondary-axes-color</code> </td>
      <td> <code>color</code> </td>
      <td> transparent </td>
    </tr>
    <tr>
      <td> <code>--secondary-axes-style</code> </td>
      <td> <code>line-style</code> </td>
      <td> solid </td>
    </tr>
    <tr>
      <td> <code>--secondary-axes-width</code> </td>
      <td> <code>length</code> </td>
      <td> 1px </td>
    </tr>
    <tr>
      <td> <code>--data-axes-color</code> </td>
      <td> <code>color</code> </td>
      <td> transparent </td>
    </tr>
    <tr>
      <td> <code>--data-axes-style</code> </td>
      <td> <code>line-style</code> </td>
      <td> solid </td>
    </tr>
    <tr>
      <td> <code>--data-axes-width</code> </td>
      <td> <code>length</code> </td>
      <td> 1px </td>
    </tr>
    <tr>
      <th> Legend </th>
      <td> <code>--legend-border-color</code> </td>
      <td> <code>color</code> </td>
      <td> transparent </td>
    </tr>
  </tbody>

</table>
