<template>
    <div class="task">
        {{task.name}}
        <div class="drawList" v-for="task in tasks">
            <list :name="task.name" :description="task.description">

            </list>

        </div>

    </div>

</template>

<script>

    export default {
        data() {
            return {

            }
        },
        name: 'task',
        props: ['name', 'description'],
        mounted() {
            //this.$store.dispatch('getTasks', this.$route.params.id)
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