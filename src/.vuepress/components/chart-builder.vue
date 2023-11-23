<template>
  <div class="chart-builder">

    <form class="controls">

      <fieldset v-for="(controlData, controlGroup) in chartControls">

        <template v-for="control in controlData">

          <legend v-if="control.type === 'legend'">
            {{ control.label }}
          </legend>

          <button
            v-if="control.type === 'button'"
            @click.prevent="toggleUserData( controlGroup, control )"
            :class="{ pressed: userData[controlGroup].includes( control.id ) }"
            :disabled="control.disabled || checkCondition( control.condition )"
          >
            {{ control.label }}
          </button>

        </template>

      </fieldset>

      <table :class="chartClass" v-if="( ! isMultiple ) && ( ! isStacked )">

        <caption> Single Dataset Table </caption>

        <thead>
          <tr>
            <th scope="col"> Month </th>
            <th scope="col"> Progress </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"> Jan </th>
            <td style="--start: 0.0; --end: 0.3;"> <span class="data"> 30 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Feb </th>
            <td style="--start: 0.3; --end: 0.5;"> <span class="data"> 50 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Mar </th>
            <td style="--start: 0.5; --end: 0.8;"> <span class="data"> 80 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Apr </th>
            <td style="--start: 0.8; --end: 1.0;"> <span class="data"> 100 </span> </td>
          </tr>
          <tr>
            <th scope="row"> May </th>
            <td style="--start: 1.0; --end: 0.65;"> <span class="data"> 65 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Jun </th>
            <td style="--start: 0.65; --end: 0.45;"> <span class="data"> 45 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Jul </th>
            <td style="--start: 0.45; --end: 0.15;"> <span class="data"> 15 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Aug </th>
            <td style="--start: 0.15; --end: 0.32;"> <span class="data"> 32 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Sep </th>
            <td style="--start: 0.32; --end: 0.6;"> <span class="data"> 60 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Oct </th>
            <td style="--start: 0.6; --end: 0.9;"> <span class="data"> 90 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Nov </th>
            <td style="--start: 0.9; --end: 0.55;"> <span class="data"> 55 </span> </td>
          </tr>
          <tr>
            <th scope="row"> Dec </th>
            <td style="--start: 0.55; --end: 0.4;"> <span class="data"> 40 </span> </td>
          </tr>
        </tbody>

      </table>

      <table :class="chartClass" v-if="isMultiple">

        <caption> Multiple Dataset Table </caption>

        <thead>
          <tr>
            <th scope="col"> Year </th>
            <th scope="col"> Progress 1 </th>
            <th scope="col"> Progress 2 </th>
            <th scope="col"> Progress 3 </th>
            <th scope="col"> Progress 4 </th>
            <th scope="col"> Progress 5 </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"> 2000 </th>
            <td style="--start: 0.4; --end: 0.2;"> <span class="data"> 20 </span> </td>
            <td style="--start: 0.3; --end: 0.5;"> <span class="data"> 50 </span> </td>
            <td style="--start: 0.2; --end: 1.0;"> <span class="data"> 100 </span> </td>
            <td style="--start: 0.1; --end: 0.7;"> <span class="data"> 70 </span> </td>
            <td style="--start: 0.0; --end: 0.4;"> <span class="data"> 40 </span> </td>
          </tr>
          <tr>
            <th scope="row"> 2010 </th>
            <td style="--start: 0.2; --end: 0.9;"> <span class="data"> 90 </span> </td>
            <td style="--start: 0.5; --end: 0.6;"> <span class="data"> 60 </span> </td>
            <td style="--start: 1.0; --end: 0.4;"> <span class="data"> 40 </span> </td>
            <td style="--start: 0.7; --end: 0.3;"> <span class="data"> 30 </span> </td>
            <td style="--start: 0.4; --end: 0.2;"> <span class="data"> 20 </span> </td>
          </tr>
          <tr>
            <th scope="row"> 2020 </th>
            <td style="--start: 0.9; --end: 0.2;"> <span class="data"> 20 </span> </td>
            <td style="--start: 0.6; --end: 0.4;"> <span class="data"> 40 </span> </td>
            <td style="--start: 0.4; --end: 0.6;"> <span class="data"> 60 </span> </td>
            <td style="--start: 0.3; --end: 0.1;"> <span class="data"> 10 </span> </td>
            <td style="--start: 0.2; --end: 0.4;"> <span class="data"> 40 </span> </td>
          </tr>
        </tbody>

      </table>

      <table :class="chartClass" v-if="isStacked">

        <caption> Stacked Dataset Table </caption>

        <thead>
          <tr>
            <th scope="col"> Continent </th>
            <th scope="col"> #1 </th>
            <th scope="col"> #2 </th>
            <th scope="col"> #3 </th>
            <th scope="col"> #4 </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"> America </th>
            <td style="--size: calc(50 / 150);"><span class="data"> 50$ </span></td>
            <td style="--size: calc(50 / 150);"><span class="data"> 50$ </span></td>
            <td style="--size: calc(30 / 150);"><span class="data"> 30$ </span></td>
            <td style="--size: calc(20 / 150);"><span class="data"> 20$ </span></td>
          </tr>
          <tr>
            <th scope="row"> Asia </th>
            <td style="--size: calc(30 / 150);"><span class="data"> 30$ </span></td>
            <td style="--size: calc(30 / 150);"><span class="data"> 30$ </span></td>
            <td style="--size: calc(30 / 150);"><span class="data"> 30$ </span></td>
            <td style="--size: calc(30 / 150);"><span class="data"> 30$ </span></td>
          </tr>
          <tr>
            <th scope="row"> Europe </th>
            <td style="--size: calc(40 / 150);"><span class="data"> 40$ </span></td>
            <td style="--size: calc(25 / 150);"><span class="data"> 25$ </span></td>
            <td style="--size: calc(45 / 150);"><span class="data"> 45$ </span></td>
            <td style="--size: calc(30 / 150);"><span class="data"> 30$ </span></td>
          </tr>
          <tr>
            <th scope="row"> Africa </th>
            <td style="--size: calc(20 / 150);"><span class="data"> 20$ </span></td>
            <td style="--size: calc(20 / 150);"><span class="data"> 20$ </span></td>
            <td style="--size: calc(20 / 150);"><span class="data"> 20$ </span></td>
            <td style="--size: calc(20 / 150);"><span class="data"> 20$ </span></td>
          </tr>
        </tbody>

      </table>

      <fieldset class="chart-code">
        <legend>Chart code</legend>
        <code>
          &lt;table class="<strong>{{ chartClass }}</strong>"&gt;
          <br>
          ...
          <br>
          &lt;/table&gt;
        </code>
      </fieldset>

    </form>

  </div>
</template>

<script>
export default {
  name: 'ChartBuilder',
  data() {
    return {
      chartControls: {
        chartType: [
          { type: 'legend', label: 'Chart Type' },
          { type: 'button', id: '', label: 'None' },
          { type: 'button', id: 'bar', label: 'Bar' },
          { type: 'button', id: 'column', label: 'Column' },
          { type: 'button', id: 'area', label: 'Area' },
          { type: 'button', id: 'line', label: 'Line' },
          { type: 'button', id: 'pie', label: 'Pie', disabled: 'disabled' },
          { type: 'button', id: 'radial', label: 'Radial', disabled: 'disabled' },
          { type: 'button', id: 'radar', label: 'Radar', disabled: 'disabled' },
          { type: 'button', id: 'polar', label: 'Polar', disabled: 'disabled' },
        ],
        dataset: [
          { type: 'legend', label: 'Datasets' },
          { type: 'button', id: '', label: 'Single' },
          { type: 'button', id: 'multiple', label: 'Multiple' },
          { type: 'button', id: 'multiple stacked', label: 'Stacked', condition: [ 'bar', 'column' ], disabled: 'disabled' },
        ],
        data: [
          { type: 'legend', label: 'Data' },
          { type: 'button', id: 'hide-data', label: 'Hide Data', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-data-on-hover', label: 'Show Data on Hover', condition: [ 'bar', 'column', 'area', 'line' ] },
        ],
        dataPosition: [
          { type: 'legend', label: 'Data Position' },
          { type: 'button', id: 'data-start', label: 'Data Start', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-center', label: 'Data Center', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-end', label: 'Data End', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-outside', label: 'Data Outside', condition: [ 'bar', 'column' ] },
        ],
        heading: [
          { type: 'legend', label: 'Heading' },
          { type: 'button', id: 'show-heading', label: 'Show Heading', condition: [ 'bar', 'column', 'area', 'line' ] },
        ],
        labels: [
          { type: 'legend', label: 'Labels' },
          { type: 'button', id: 'show-labels', label: 'Show Labels', condition: [ 'bar', 'column', 'area', 'line' ] },
        ],
        orientation: [
          { type: 'legend', label: 'Orientation' },
          { type: 'button', id: 'reverse', label: 'Reverse', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'reverse-labels', label: 'Reverse Labels', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'reverse-data', label: 'Reverse Data', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'reverse-datasets', label: 'Reverse Datasets', condition: [ 'bar multiple', 'column multiple' ] },
        ],
        primaryAxis: [
          { type: 'legend', label: 'Primary Axis' },
          { type: 'button', id: 'show-primary-axis', label: 'Primary Axis', condition: [ 'bar', 'column', 'area', 'line' ] },
        ],
        dataAxes: [
          { type: 'legend', label: 'Data Axes' },
          { type: 'button', id: 'show-data-axes', label: 'Data Axes', condition: [ 'bar', 'column', 'area', 'line' ] },
        ],
        secondaryAxes: [
          { type: 'legend', label: 'Secondary Axes' },
          { type: 'button', id: '', label: 'None', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'show-1-secondary-axes', label: '1', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-2-secondary-axes', label: '2', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-3-secondary-axes', label: '3', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-4-secondary-axes', label: '4', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-5-secondary-axes', label: '5', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-6-secondary-axes', label: '6', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-7-secondary-axes', label: '7', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-8-secondary-axes', label: '8', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-9-secondary-axes', label: '9', condition: [ 'bar', 'column', 'area', 'line' ] },
          { type: 'button', id: 'show-10-secondary-axes', label: '10', condition: [ 'bar', 'column', 'area', 'line' ] },
        ],
        dataSpacing: [
          { type: 'legend', label: 'Data Spacing' },
          { type: 'button', id: '', label: 'None', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-1', label: '1', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-2', label: '2', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-3', label: '3', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-4', label: '4', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-5', label: '5', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-6', label: '6', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-7', label: '7', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-8', label: '8', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-9', label: '9', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-10', label: '10', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-11', label: '11', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-12', label: '12', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-13', label: '13', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-14', label: '14', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-15', label: '15', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-16', label: '16', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-17', label: '17', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-18', label: '18', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-19', label: '19', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'data-spacing-20', label: '20', condition: [ 'bar', 'column' ] },
        ],
        datasetsSpacing: [
          { type: 'legend', label: 'Datasets Spacing' },
          { type: 'button', id: '', label: 'None', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-1', label: '1', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-2', label: '2', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-3', label: '3', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-4', label: '4', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-5', label: '5', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-6', label: '6', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-7', label: '7', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-8', label: '8', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-9', label: '9', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-10', label: '10', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-11', label: '11', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-12', label: '12', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-13', label: '13', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-14', label: '14', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-15', label: '15', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-16', label: '16', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-17', label: '17', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-18', label: '18', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-19', label: '19', condition: [ 'bar', 'column' ] },
          { type: 'button', id: 'datasets-spacing-20', label: '20', condition: [ 'bar', 'column' ] },
        ],
      },
      userData: {
        chartType: [''],
        dataset: [''],
        data: [],
        dataPosition: [],
        heading: [],
        labels: [],
        orientation: [],
        primaryAxis: [],
        dataAxes: [],
        secondaryAxes: [''],
        dataSpacing: [''],
        datasetsSpacing: [''],
      },
    }
  },
  computed: {
    isMultiple() {
      return this.userData.dataset.includes('multiple');
    },
    isStacked() {
      return this.isMultiple && this.userData.dataset.includes('stacked');
    },
    chartClass() {
      let chartClass = '';

      chartClass += ( !Array.isArray(this.userData.chartType) || this.userData.chartType.length <= 0 || this.userData.chartType[0] === '' )
        ? ''
        : 'charts-css ' + this.userData.chartType;

      const elements = [
        'dataset',
        'data',
        'dataPosition',
        'heading',
        'labels',
        'orientation',
        'primaryAxis',
        'dataAxes',
        'secondaryAxes',
        'dataSpacing',
        'datasetsSpacing',
      ];

      for (const i of elements) {
        chartClass += this.userData[i] ? ' ' + this.userData[i].join(' ') : '';
      }

      return chartClass.trim();
    }
  },
  methods: {
    toggleUserData(controlGroup, control) {
      if (controlGroup === 'chartType') {
        this.userData.chartType = [];
        this.userData[controlGroup].push(control.id);
        return;
      }

      if (controlGroup === 'dataset') {
        this.userData.dataset = [];
        this.userData[controlGroup].push(control.id);
        return;
      }

      if (controlGroup === 'dataPosition') {
        this.userData.dataPosition = [];
        this.userData[controlGroup].push(control.id);
        return;
      }

      if (controlGroup === 'secondaryAxes') {
        this.userData.secondaryAxes = [];
        this.userData[controlGroup].push(control.id);
        return;
      }

      if (controlGroup === 'dataSpacing') {
        this.userData.dataSpacing = [];
        this.userData[controlGroup].push(control.id);
        return;
      }

      if (controlGroup === 'datasetsSpacing') {
        this.userData.datasetsSpacing = [];
        this.userData[controlGroup].push(control.id);
        return;
      }

      if (control.type === 'button') {
        var index = this.userData[controlGroup].indexOf(control.id);
        if (index === -1) {
          this.userData[controlGroup].push(control.id);
        } else {
          this.userData[controlGroup].splice(index, 1);
        }
      }
    },
    checkCondition(conditions) {
      if ( conditions === undefined ) {
        return false;
      }

      return ! conditions.some(cond => this.chartClass.split(' ').includes(cond));
    }
  }
}
</script>

<style>
.chart-builder .controls {
  display: grid;
  grid-template-columns: 110px 1fr 1fr;
  gap: 10px;
  grid-template-areas:
    "chart-types data            data"
    "chart-types dataPosition    dataPosition"
    "chart-types heading         labels"
    "chart-types orientation     orientation"
    "chart-types primaryAxis     dataAxes"
    "chart-types secondaryAxes   secondaryAxes"
    "dataset     secondaryAxes   secondaryAxes"
    "dataset     dataSpacing     dataSpacing"
    "dataset     datasetsSpacing datasetsSpacing"
    "chartTable  chartTable      chartTable"
    "chartCode   chartCode       chartCode";
  margin-block-end: 40px;
}
.chart-builder .controls fieldset:nth-of-type(1) {
  grid-area: chart-types;
}
.chart-builder .controls fieldset:nth-of-type(2) {
  grid-area: dataset;
}
.chart-builder .controls fieldset:nth-of-type(3) {
  grid-area: data;
}
.chart-builder .controls fieldset:nth-of-type(4) {
  grid-area: dataPosition;
}
.chart-builder .controls fieldset:nth-of-type(5) {
  grid-area: heading;
}
.chart-builder .controls fieldset:nth-of-type(6) {
  grid-area: labels;
}
.chart-builder .controls fieldset:nth-of-type(7) {
  grid-area: orientation;
}
.chart-builder .controls fieldset:nth-of-type(8) {
  grid-area: primaryAxis;
}
.chart-builder .controls fieldset:nth-of-type(9) {
  grid-area: dataAxes;
}
.chart-builder .controls fieldset:nth-of-type(10) {
  grid-area: secondaryAxes;
}
.chart-builder .controls fieldset:nth-of-type(11) {
  grid-area: dataSpacing;
}
.chart-builder .controls fieldset:nth-of-type(12) {
  grid-area: datasetsSpacing;
}
.chart-builder .controls fieldset.chart-code {
  grid-area: chartCode;
}
.chart-builder .controls table {
  grid-area: chartTable;
}
.chart-builder .controls fieldset {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  border: 1px solid lightgrey;
  padding: 4px 4px 12px;
}
.chart-builder .controls fieldset:first-of-type {
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
.chart-builder .controls legend {
  font-size: 14px;
  font-weight: bold;
}
.chart-builder .controls label {
  font-size: 14px;
}
.chart-builder .controls button {
  -webkit-appearance: none;
  appearance: none;
  padding: 4px 8px;
  border: 1px solid #666;
  border: 0;
  border-radius: 4px;
  color: #fff;
  outline: none;
  background-color: #f57;
  box-shadow: 0 4px 8px #999;
  transition-duration: 0.3s;
  cursor: pointer;
}
.chart-builder .controls button:hover,
.chart-builder .controls button:focus {
  background-color: #d57;
  box-shadow: 0 4px 6px #666;
}
.chart-builder .controls button:active,
.chart-builder .controls button.pressed {
  background-color: #a13;
}
.chart-builder .controls button[disabled] {
  color: #999;
  background-color: #ccc;
  cursor: not-allowed;
}
.chart-builder .controls button[disabled]:hover,
.chart-builder .controls button[disabled]:focus {
  background-color: #ccc;
  box-shadow: 0 4px 4px #999;
}
.chart-builder .chart-code {
  padding: 1rem;
  margin-block-start: 2rem;
  margin-block-end: 2rem;
  border: 1px solid lightgrey;
}
.chart-builder .chart-code code {
  width: 100%;
  background-color: unset;
}
.chart-builder .chart-code strong {
  font-weight: bold;
}
.chart-builder table {
  margin: 20px auto;
}
.chart-builder table.charts-css {
  height: 250px;
}
.chart-builder table.charts-css.bar {
  width: 100%;
  height: unset;
}
</style>
