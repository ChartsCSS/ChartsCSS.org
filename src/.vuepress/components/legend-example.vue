<template>
    <div :class="containerClass">
        <slot></slot>
        <div class="chart-placeholder"></div>
    </div>
</template>

<script>
export default {
    name: 'LegendExample',
    props: {
        orientation: {
            type: String,
            default: 'row'
        }
    },
    computed: {
        containerClass() {
            return {
                'legend-example': true,
                'column': this.orientation === 'column',
                'row': this.orientation === 'row',
            }
        }
    }
}
</script>

<style>
.legend-example {
    display: flex;
    gap: 20px;
}
.legend-example > * {
    flex: 1 1 0;
}
.legend-example.row {
    flex-direction: row-reverse;
}
.legend-example.column {
    flex-direction: column;
    margin: 0 auto;
    max-width: 50%;
}
.chart-placeholder {
    background-color: #aaa;
    width: 100%;
    min-height: 100px;
    background-image: url(/assets/img/logo.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 30% 30%;
    filter: grayscale(1) opacity(0.1);
}
</style>
