<template>
    <div>
        Hello {{name}}!
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',

        props: {
            name: {
                type: String,
                default: 'World',
                required: false
            }
        },

        data: () => ({ }),

        methods: { }
    }
</script>
