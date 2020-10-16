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
    padding-top: 1rem;
    padding-bottom: 1rem;
}
</style>