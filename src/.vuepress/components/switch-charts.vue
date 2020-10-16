<template>
    <div class="switch-charts">

        <form class="controls">

            <fieldset class="chart-type-controls">
                <legend>Chart Type:</legend>
                <button v-for="chart in controls.chartType" @click.prevent="selectedChartType=chart.id"> {{chart.label}} </button>
            </fieldset>

            <fieldset class="reverse-order-controls">
                <legend>Reverse Order:</legend>
                <button v-for="order in controls.reverseOrder" @click.prevent="toggleOrder(order.id)"> {{order.label}} </button>
            </fieldset>

            <fieldset class="labels-controls">
                <legend>Labels:</legend>
                <button v-for="label in controls.labels" @click.prevent="toggleLabels(label.id)"> {{label.label}} </button>
            </fieldset>

            <fieldset class="axes-controls">
                <legend>Axes:</legend>
                <button v-for="axes in controls.axes" @click.prevent="toggleAxes(axes.id)"> {{axes.label}} </button>
            </fieldset>

            <fieldset class="spacing-controls">
                <legend>Spacing:</legend>
                Data:
                <input type="range" min="0" max="20" step="1" v-model.number="dataSpacing" />
                Dataset:
                <input type="range" min="0" max="20" step="1" v-model.number="datasetsSpacing" />
            </fieldset>

        </form>

        <div class="chart-code">
            &lt;table class="<strong>{{chartClass}}</strong>"&gt;
            <br>
            ...
            <br>
            &lt;/table&gt;
        </div>

        <table :class="chartClass">

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
                <tr>
                    <th scope="row"> RUS </th>
                    <td style="--size: 0.19"> 19 </td>
                    <td style="--size: 0.17"> 17 </td>
                    <td style="--size: 0.20"> 20 </td>
                </tr>
                <tr>
                    <th scope="row"> GER </th>
                    <td style="--size: 0.17"> 17 </td>
                    <td style="--size: 0.10"> 10 </td>
                    <td style="--size: 0.15"> 15 </td>
                </tr>
            </tbody>

        </table>

    </div>
</template>

<script>
export default {
    name: 'SwitchCharts',
    data() {
        return {
            controls: {
                chartType: [
                    { id: '', label: 'None' },
                    { id: 'bar', label: 'Bar' },
                    { id: 'column', label: 'Column' },
                    { id: 'line', label: 'Line' },
                    { id: 'bubble', label: 'Bubble' },
                    { id: 'pie', label: 'Pie' },
                    { id: 'donut', label: 'Donut' },
                    { id: 'radar', label: 'Radar' },
                    { id: 'polar', label: 'Polar' },
                ],
                reverseOrder: [
                    { id: 'reverse-data', label: 'Reverse Data' },
                    { id: 'reverse-datasets', label: 'Reverse Datasets' },
                ],
                labels: [
                    { id: 'labels-before', label: 'Label Before' },
                    { id: 'labels-after', label: 'Label After' },
                ],
                axes: [
                    { id: 'show-primary-axis', label: 'Primary Axis' },
                    { id: 'show-data-axes', label: 'Data Axes' },
                    // { id: 'show-dataset-axes', label: 'Dataset Axes' },
                ]
            },
            selectedChartType: '',
            selectedOrder: [],
            selectedLabels: [],
            selectedAxes: [],
            dataSpacing: 0,
            datasetsSpacing: 0,
        }
    },
    computed: {
        chartClass() {
            const inAllowed = this.controls.chartType.some( chart => chart.id === this.selectedChartType );

            if ( this.selectedChartType === '' || !inAllowed )
                return '';

            return `charts-css ${this.selectedChartType} multiple ${this.selectedOrder.join(' ')} ${this.selectedLabels.join(' ')} ${this.selectedAxes.join(' ')} ${this.dataSpacingClass} ${this.datasetsSpacingClass}`;
        },
        dataSpacingClass() {
            return ( this.dataSpacing > 0 ) ? `data-spacing-${this.dataSpacing}` : '';
        },
        datasetsSpacingClass() {
            return ( this.datasetsSpacing > 0 ) ? `datasets-spacing-${this.datasetsSpacing}` : '';
        }
    },
    methods: {
        toggleOrder( value ) {
            var index = this.selectedOrder.indexOf(value);
            if (index === -1) {
                this.selectedOrder.push(value);
            } else {
                this.selectedOrder.splice(index, 1);
            }
        },
        toggleLabels( value ) {
            var index = this.selectedLabels.indexOf(value);
            if (index === -1) {
                this.selectedLabels.push(value);
            } else {
                this.selectedLabels.splice(index, 1);
            }
        },
        toggleAxes( value ) {
            var index = this.selectedAxes.indexOf(value);
            if (index === -1) {
                this.selectedAxes.push(value);
            } else {
                this.selectedAxes.splice(index, 1);
            }
        },
    },
}
</script>

<style>
.switch-charts {
    margin: 0 auto;
    /* max-width: 600px; */
}
.controls {
    padding: 1rem;
    border: 1px solid lightgrey;
}
.controls fieldset {
    border: 1px solid lightgrey;
}
.controls button {
    -webkit-appearance: none;
    appearance: none;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 6px;
    color: #fff;
    background-color: #f57;
}
.controls input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    background: #d3d3d3;
    outline: none;
}
.controls input[type="range"]::-webkit-slider-thumb,
.controls input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border: 0;
    border-radius: 50%;
    background: #f57;
    cursor: pointer;
}
.controls .chart-type-controls,
.controls .reverse-order-controls,
.controls .labels-controls,
.controls .axes-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-block-end: 1rem;
}
.chart-code {
    margin-block-start: 2rem;
    margin-block-end: 2rem;
    padding: 1rem;
    border: 1px solid lightgrey;
}
.chart-code strong {
    font-weight: bold;
}
table {
    margin: 0 auto;
}
table.charts-css.bar {
    width: 100%;
}
table.charts-css.column {
    height: 200px;
}
</style>