<template>
    <div>
        <div class="list" v-for="list in lists">
            
            <h3>{{name}}</h3>
            
            <!-- <h5>{{id}}</h5> -->
        </div>

        <div class="task" v-for="task in tasks">
            <router-link :to="'/tasks/'+task._id">{{task.name}}</router-link>
            <task :name="task.name" :description="task.description"></task>
        </div>
    </div>
</template>

<script>
    import task from './Task'
    export default {
        data() {
            return {

            }
        },
        name: 'list',
        props: ['name', 'description'],
        mounted() {
            debugger
            // this.$store.dispatch('getLists', this.$route.params.id)
            // this.$store.dispatch('getTasks', this.list)
        },
        computed: {
            tasks() {
                return this.$store.state.activeTasks
            },
            lists() {
                return this.$store.state.activeLists
            }
        },
        components: {
            task
        }

    }

</script>

<style>
</style>