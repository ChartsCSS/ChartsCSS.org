<template>
  <div class="chart-builder">

    <form class="controls">

      <fieldset v-for="(group, idx) in chartControls">

        <template v-for="control in group">

          <legend v-if="control.type==='legend'">
            {{control.label}}
          </legend>

          <label v-if="control.type==='range'" disabled>
            {{control.label}}:
            <input type="range" disabled :min="control.min" :max="control.max" :step="control.step" :value="helper[control.id]" @click.prevent="toggleUserData(idx, control)" />
          </label>

          <button v-if="control.type==='button'" @click.prevent="toggleUserData(idx, control)" :class="{ pressed: userData[idx].includes(control.id) }" :disabled="control.disabled">
            {{control.label}}
          </button>

        </template>

      </fieldset>

    </form>

    <hr>

    <div class="chart-code">
      &lt;table class="<strong>{{chartClass}}</strong>"&gt;
      <br>
      ...
      <br>
      &lt;/table&gt;
    </div>

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
          <td style="--start: 0.4; --size: 0.2;"> <span class="data"> 20 </span> </td>
          <td style="--start: 0.3; --size: 0.5;"> <span class="data"> 50 </span> </td>
          <td style="--start: 0.2; --size: 1.0;"> <span class="data"> 100 </span> </td>
          <td style="--start: 0.1; --size: 0.7;"> <span class="data"> 70 </span> </td>
          <td style="--start: 0.0; --size: 0.4;"> <span class="data"> 40 </span> </td>
        </tr>
        <tr>
          <th scope="row"> 2010 </th>
          <td style="--start: 0.2; --size: 0.9;"> <span class="data"> 90 </span> </td>
          <td style="--start: 0.5; --size: 0.6;"> <span class="data"> 60 </span> </td>
          <td style="--start: 1.0; --size: 0.4;"> <span class="data"> 40 </span> </td>
          <td style="--start: 0.7; --size: 0.3;"> <span class="data"> 30 </span> </td>
          <td style="--start: 0.4; --size: 0.2;"> <span class="data"> 20 </span> </td>
        </tr>
        <tr>
          <th scope="row"> 2020 </th>
          <td style="--start: 0.9; --size: 0.2;"> <span class="data"> 20 </span> </td>
          <td style="--start: 0.6; --size: 0.4;"> <span class="data"> 40 </span> </td>
          <td style="--start: 0.4; --size: 0.6;"> <span class="data"> 60 </span> </td>
          <td style="--start: 0.3; --size: 0.1;"> <span class="data"> 10 </span> </td>
          <td style="--start: 0.2; --size: 0.4;"> <span class="data"> 40 </span> </td>
        </tr>
      </tbody>

    </table>

    <table :class="chartClass" v-if="! isMultiple">

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
          <td style="--start: 0.0; --size: 0.3;"> <span class="data"> 30 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Feb </th>
          <td style="--start: 0.3; --size: 0.5;"> <span class="data"> 50 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Mar </th>
          <td style="--start: 0.5; --size: 0.8;"> <span class="data"> 80 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Apr </th>
          <td style="--start: 0.8; --size: 1.0;"> <span class="data"> 100 </span> </td>
        </tr>
        <tr>
          <th scope="row"> May </th>
          <td style="--start: 1.0; --size: 0.65;"> <span class="data"> 65 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Jun </th>
          <td style="--start: 0.65; --size: 0.45;"> <span class="data"> 45 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Jul </th>
          <td style="--start: 0.45; --size: 0.15;"> <span class="data"> 15 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Aug </th>
          <td style="--start: 0.15; --size: 0.32;"> <span class="data"> 32 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Sep </th>
          <td style="--start: 0.32; --size: 0.6;"> <span class="data"> 60 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Oct </th>
          <td style="--start: 0.6; --size: 0.9;"> <span class="data"> 90 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Nov </th>
          <td style="--start: 0.9; --size: 0.55;"> <span class="data"> 55 </span> </td>
        </tr>
        <tr>
          <th scope="row"> Dec </th>
          <td style="--start: 0.55; --size: 0.4;"> <span class="data"> 40 </span> </td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: 'ChartBuilder',
  data() {
    return {
      chartControls: {
        chartType: [
          { id: '', label: 'Chart Type', type: 'legend' },
          { id: '', label: 'None', type: 'button' },
          { id: 'bar', label: 'Bar', type: 'button' },
          { id: 'column', label: 'Column', type: 'button' },
          { id: 'area', label: 'Area', type: 'button' },
          { id: 'line', label: 'Line', type: 'button' },
          { id: 'pie', label: 'Pie', type: 'button', disabled: 'disabled' },
          { id: 'donut', label: 'Donut', type: 'button', disabled: 'disabled' },
          { id: 'radar', label: 'Radar', type: 'button', disabled: 'disabled' },
          { id: 'polar', label: 'Polar', type: 'button', disabled: 'disabled' },
        ],
        datasets: [
          { id: '', label: 'Datasets', type: 'legend' },
          { id: 'multiple', label: 'Multiple', type: 'button' },
        ],
        heading: [
          { id: '', label: 'Chart Heading', type: 'legend' },
          { id: 'show-heading', label: 'Heading', type: 'button' },
        ],
        orientation: [
          { id: '', label: 'Orientation', type: 'legend' },
          { id: 'reverse', label: 'Reverse', type: 'button' },
        ],
        labels: [
          { id: '', label: 'Labels', type: 'legend' },
          { id: 'show-labels', label: 'Show Labels', type: 'button' },
        ],
        data: [
          { id: '', label: 'Data', type: 'legend' },
          { id: 'hide-data', label: 'Hide Data', type: 'button' },
          { id: 'show-data-on-hover', label: 'Show Data on Hover', type: 'button' },
        ],
        reverseOrder: [
          { id: '', label: 'Reverse Order', type: 'legend' },
          { id: 'reverse-data', label: 'Reverse Data', type: 'button' },
          { id: 'reverse-datasets', label: 'Reverse Datasets', type: 'button' },
        ],
        axes: [
          { id: '', label: 'Axes', type: 'legend' },
          { id: 'show-primary-axis', label: 'Primary Axis', type: 'button' },
          { id: 'show-data-axes', label: 'Data Axes', type: 'button' },
        ],
        axes2: [
          { id: '', label: 'Axes', type: 'legend' },
          { id: 'show-*-secondary-axes', label: 'Secondary Axes', type: 'range', min: '0', max: '10', step: '1' },
        ],
        spacing: [
          { id: '', label: 'Spacing', type: 'legend' },
          { id: 'data-spacing-*', label: 'Data', type: 'range', min: '0', max: '20', step: '1' },
          { id: 'datasets-spacing-*', label: 'Dataset', type: 'range', min: '0', max: '20', step: '1' },
        ],
      },
      userData: {
        chartType: [''],
        datasets: [],
        heading: [],
        orientation: [],
        labels: [],
        axes: [],
        data: [],
        reverseOrder: [],
        spacing: [],
      },
      helper: {
        'show-*-secondary-axes': 0,
        'data-spacing-*': 0,
        'dataset-spacing-*': 0,
      },
    }
  },
  computed: {
    isMultiple() {
      return this.userData.datasets.includes('multiple');
    },
    chartClass() {
      const type = ( !Array.isArray(this.userData.chartType) || this.userData.chartType.length <= 0 || this.userData.chartType[0] === '' )
        ? ''
        : 'charts-css ' + this.userData.chartType;
      const multiple = this.userData.datasets ? ' ' + this.userData.datasets.join(' ') : '';
      const heading = this.userData.heading ? ' ' + this.userData.heading.join(' ') : '';
      const data = this.userData.data ? ' ' + this.userData.data.join(' ') : '';
      const reverseOrder = this.userData.reverseOrder ? ' ' + this.userData.reverseOrder.join(' ') : '';
      const orientation = this.userData.orientation ? ' ' + this.userData.orientation.join(' ') : '';
      const labels = this.userData.labels ? ' ' + this.userData.labels.join(' ') : '';
      const axes = this.userData.axes ? ' ' + this.userData.axes.join(' ') : '';
      const dataSpacing = ( this.userData.spacing.dataSpacing > 0 ) ? ` data-spacing-${this.userData.spacing.dataSpacing}` : '';
      const datasetsSpacing = ( this.userData.spacing.datasetsSpacing > 0 ) ? ` datasets-spacing-${this.userData.spacing.datasetsSpacing}` : '';

      return `${type} ${multiple} ${heading} ${data} ${reverseOrder} ${orientation} ${labels} ${axes} ${dataSpacing} ${datasetsSpacing}`.trim();
    }
  },
  watch: {
    helper(newValue, oldValue) {
        var index = this.userData[group].indexOf(control.id);

        if (index === -1) {
          this.userData[group].push(control.id.replace('*', 'xxx'));
        } else {
          this.userData[group].splice(index, 1);
        }
    }
  },
  methods: {
    toggleUserData(group, control) {
      // Update chart type group (unique case)
      if (group === 'chartType') {
        this.userData.chartType = [];
        this.userData[group].push(control.id);
        return;
      }

      // Other groups
      if (control.type === 'button') {
        // Buttons
        var index = this.userData[group].indexOf(control.id);
        if (index === -1) {
          this.userData[group].push(control.id);
        } else {
          this.userData[group].splice(index, 1);
        }
      } else if (control.type === 'range') {
        // Range
        var className = this.helper[control.id];
        var index = this.userData[group].indexOf(control.id);

        if (index === -1) {
          // this.userData[group].push(control.id.replace('*', 'xxx'));
        } else {
          // this.userData[group].splice(index, 1);
        }
      }

    }
  }
}
</script>

<style>
.chart-builder .controls {
  display: grid;
  grid-template-columns: 110px 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    "chart-types multiple    heading"
    "chart-types orientation labels"
    "chart-types data        order"
    "chart-types axes        axes2"
    "chart-types spacing     spacing";
  padding: 1rem;
  border: 1px solid lightgrey;
}
.chart-builder .controls fieldset:nth-of-type(1) { grid-area: chart-types; }
.chart-builder .controls fieldset:nth-of-type(2) { grid-area: multiple; }
.chart-builder .controls fieldset:nth-of-type(3) { grid-area: heading; }
.chart-builder .controls fieldset:nth-of-type(4) { grid-area: orientation; }
.chart-builder .controls fieldset:nth-of-type(5) { grid-area: labels; }
.chart-builder .controls fieldset:nth-of-type(6) { grid-area: data; }
.chart-builder .controls fieldset:nth-of-type(7) { grid-area: order; }
.chart-builder .controls fieldset:nth-of-type(8) { grid-area: axes; }
.chart-builder .controls fieldset:nth-of-type(9) { grid-area: axes2; }
.chart-builder .controls fieldset:nth-of-type(10) { grid-area: spacing; }
.chart-builder .controls fieldset {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  border: 1px solid lightgrey;
  padding: 5px 5px 15px;
}
.chart-builder .controls fieldset:first-of-type {
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}
.chart-builder .controls button {
  -webkit-appearance: none;
  appearance: none;
  padding: 8px 12px;
  border: 1px solid black;
  border: 0;
  border-radius: 6px;
  color: #fff;
  outline: none;
  background-color: #f57;
  box-shadow: 0 4px 4px #999;
  transition-duration: 0.3s;
  cursor: pointer;
}
.chart-builder .controls button:hover,
.chart-builder .controls button:focus {
  background-color: #d57;
  box-shadow: 0 4px 4px #666;
}
.chart-builder .controls button:active,
.chart-builder .controls button.pressed {
  background-color: #a13;
  box-shadow: 0 3px 3px #666;
  transform: translateY(3px);
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
.chart-builder .controls input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: #d3d3d3;
  outline: none;
}
.chart-builder .controls input[type="range"]::-webkit-slider-thumb,
.chart-builder .controls input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border: 0;
  border-radius: 50%;
  background: #f57;
  cursor: pointer;
}
.chart-builder .chart-code {
  margin-block-start: 2rem;
  margin-block-end: 2rem;
  padding: 1rem;
  border: 1px solid lightgrey;
}
.chart-builder .chart-code strong {
  font-weight: bold;
}
.chart-builder table {
  margin: 0 auto;
  height: 250px;
}
.chart-builder table.charts-css.bar {
  width: 100%;
}
.chart-builder table.charts-css.column {
  height: 200px;
}
</style>
