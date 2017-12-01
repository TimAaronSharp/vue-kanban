<template>
    <div class="task">
       <h3>{{name}}</h3> 
       
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        name: 'task',
        props: ['name', 'description', 'taskId', 'listId'],
        mounted() {
            // this.$store.dispatch('getTasks', this.$route.params.id)
        },
        methods: {
        },
        computed: {
            tasks() {
                return this.$store.state.activeTasks
            }
        },
    }
</script>

<style scoped>
</style>