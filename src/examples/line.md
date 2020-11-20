---
permalink: /examples/line/
editLink: false
prev: false
next: false
pageClass: example-page
---

# Line Examples

<div class="examples">
  <h2>Regular</h2>
  <h2>Reverse</h2>
</div>

<h3>Single</h3>

<div class="examples">

  <table class="charts-css line hide-data show-labels show-primary-axis" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th>Year</th>
        <th>Progress</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.2; --size: 0.4"> <span class="data"> 40% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.4; --size: 0.8"> <span class="data"> 80% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.8; --size: 0.6"> <span class="data"> 60% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.6; --size: 1.0"> <span class="data"> 100% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 1.0; --size: 0.3"> <span class="data"> 30% </span> </td>
      </tr>
    </tbody>
  </table>

  <table class="charts-css line hide-data show-labels show-primary-axis reverse" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th>Year</th>
        <th>Progress</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.2; --size: 0.4"> <span class="data"> 40% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.4; --size: 0.8"> <span class="data"> 80% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.8; --size: 0.6"> <span class="data"> 60% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.6; --size: 1.0"> <span class="data"> 100% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 1.0; --size: 0.3"> <span class="data"> 30% </span> </td>
      </tr>
    </tbody>
  </table>

</div>

<h3>Single & Reverse Data</h3>

<div class="examples">

  <table class="charts-css line hide-data show-labels show-primary-axis reverse-data" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th>Year</th>
        <th>Progress</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.2; --size: 0.4"> <span class="data"> 40% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.4; --size: 0.8"> <span class="data"> 80% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.8; --size: 0.6"> <span class="data"> 60% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.6; --size: 1.0"> <span class="data"> 100% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 1.0; --size: 0.3"> <span class="data"> 30% </span> </td>
      </tr>
    </tbody>
  </table>

  <table class="charts-css line hide-data show-labels show-primary-axis reverse-data reverse" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th>Year</th>
        <th>Progress</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2016 </th>
        <td style="--start: 0.2; --size: 0.4"> <span class="data"> 40% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2017 </th>
        <td style="--start: 0.4; --size: 0.8"> <span class="data"> 80% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2018 </th>
        <td style="--start: 0.8; --size: 0.6"> <span class="data"> 60% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2019 </th>
        <td style="--start: 0.6; --size: 1.0"> <span class="data"> 100% </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start: 1.0; --size: 0.3"> <span class="data"> 30% </span> </td>
      </tr>
    </tbody>
  </table>

</div>

<h3>Multiple</h3>

<div class="examples">

  <table class="charts-css line hide-data show-labels show-primary-axis show-data-axes multiple" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

  <table class="charts-css line hide-data show-labels show-primary-axis show-data-axes multiple reverse" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

</div>

<h3>Multiple & Reverse Data</h3>

<div class="examples">

  <table class="charts-css line hide-data show-labels show-primary-axis show-data-axes multiple reverse-data" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

  <table class="charts-css line hide-data show-labels show-primary-axis show-data-axes multiple reverse-data reverse" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

</div>

<!--
<h3>Stacked</h3>

<div class="examples">

  <table class="charts-css line hide-data show-labels show-primary-axis show-10-secondary-axes data-spacing-5 multiple stacked" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

  <table class="charts-css line hide-data show-labels show-primary-axis show-10-secondary-axes data-spacing-5 multiple stacked reverse" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

</div>

<h3>Stacked & Reverse Dataset</h3>

<div class="examples">

  <table class="charts-css line hide-data show-labels show-primary-axis show-10-secondary-axes data-spacing-5 multiple stacked reverse-datasets" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

  <table class="charts-css line hide-data show-labels show-primary-axis show-10-secondary-axes data-spacing-5 multiple stacked reverse-datasets reverse" style="height: 200px;">
    <caption>Years Compared</caption>
    <thead>
      <tr>
        <th scope="col"> Year </th>
        <th scope="col"> Progress 1 </th>
        <th scope="col"> Progress 2 </th>
        <th scope="col"> Progress 3 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"> 2000 </th>
        <td style="--start:0.1; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.0; --size: 0.2;"> <span class="data"> 20 </span> </td>
        <td style="--start:0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2010 </th>
        <td style="--start:0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        <td style="--start:0.2; --size: 0.5;"> <span class="data"> 50 </span> </td>
        <td style="--start:0.4; --size: 0.1;"> <span class="data"> 10 </span> </td>
      </tr>
      <tr>
        <th scope="row"> 2020 </th>
        <td style="--start:0.8; --size: 0.4;"> <span class="data"> 40 </span> </td>
        <td style="--start:0.5; --size: 0.3;"> <span class="data"> 30 </span> </td>
        <td style="--start:0.1; --size: 0.2;"> <span class="data"> 20 </span> </td>
      </tr>
    </tbody>
  </table>

</div>
-->
