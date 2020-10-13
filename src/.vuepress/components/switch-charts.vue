<template>
    <div class="switch-charts">

        <div class="charts-selector">
            <button v-on:click="chartType=''"> None </button>
            <button v-on:click="chartType='bar'"> Bar </button>
            <button v-on:click="chartType='column'"> Column </button>
            <button v-on:click="chartType='line'"> Line </button>
            <button v-on:click="chartType='bubble'"> Bubble </button>
            <button v-on:click="chartType='pie'"> Pie </button>
            <button v-on:click="chartType='donut'"> Donut </button>
            <button v-on:click="chartType='radar'"> Radar </button>
            <button v-on:click="chartType='polar'"> Polar </button>
        </div>

        <div class="charts-class">
            &lt;table class="{{chartType ? 'charts-css ' + chartType : ''}}"&gt;
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
            </tbody>

        </table>

    </div>
</template>

<script>
export default {
    name: 'SwitchCharts',
    data() {
        return {
            chartType: {
                type: String,
                default: ' '
            }
        }
    },
    computed: {
        chartClass() {
            return {
                'charts-css bar multiple': this.chartType === 'bar',
                'charts-css column multiple': this.chartType === 'column',
                'charts-css line multiple': this.chartType === 'line',
                'charts-css bubble multiple': this.chartType === 'bubble',
                'charts-css pie multiple': this.chartType === 'pie',
                'charts-css donut multiple': this.chartType === 'donut',
                'charts-css radar multiple': this.chartType === 'radar',
                'charts-css polar multiple': this.chartType === 'polar',
            }
        }
    },
    mounted() {
        this.chartType='';
    },
}
</script>

<style>
.switch-charts {
    margin: 0 auto;
    max-width: 500px;
}
.charts-selector {
    display: flex;
    justify-content: space-between;
    margin-block-start: 2rem;
    margin-block-end: 2rem;
}
.charts-selector button {
    /* color: #fff; */
    /* background-color: #f57; */
    padding-top: 4px;
    padding-bottom: 4px;
    border: 1px solid currentColor;
    border-radius: 3px;
    /* transition: background-color 0.1s ease; */
    /* box-sizing: border-box; */
}
.charts-class {
    margin-block-start: 2rem;
    margin-block-end: 2rem;
    padding: 1rem;
    border: 1px solid lightgrey;
    font-weight: bold;
}
.switch-charts table {
    margin: 0 auto;
}
.switch-charts table.bar {
    width: 100%;
}
.switch-charts table.column {
    height: 200px;
}
</style>