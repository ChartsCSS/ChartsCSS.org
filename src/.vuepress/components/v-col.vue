<template>
    <div :class="containerClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'v-col',
    computed: {
        containerClass() {
            return {
                'v-col': true,
            }
        }
    }
}
</script>

<style>
.v-col {
    flex: 1 1 0;
}
</style>