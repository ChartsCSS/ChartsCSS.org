<template>
    <div :class="exampleClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CodeExample',
    computed: {
        exampleClass() {
            return {
                'code-example': true,
            }
        }
    }
}
</script>

<style>
.code-example {
    margin: 0 auto;
}
</style>