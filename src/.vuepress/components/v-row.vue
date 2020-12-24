<template>
    <div :class="containerClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'v-row',
    props: {
        direction: {
            type: String,
            default: 'row',
        }
    },
    computed: {
        containerClass() {
            return {
                'v-row': true,
                'row': this.direction === 'row',
                'column': this.direction === 'column',
            }
        }
    }
}
</script>

<style>
.v-row {
    display: flex;
    gap: 20px
}
.v-row.row {
    flex-direction: row;
}
.v-row.column {
    flex-direction: column;
}
@media (max-width: 959px) {
    .v-row.row {
        flex-direction: column;
    }
    .v-row.row .code-example {
        margin: unset;
    }
}

</style>