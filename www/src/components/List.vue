<template>
    <div>
        <div class="list">
            <h3>{{name}}</h3>
            <!-- <h5>{{description}}</h5> -->
            <!-- <h5>{{_id}}</h5> -->
            
        </div>

        <div class="task" v-for="(task, i) in tasks">
            <!-- <router-link :to="'/tasks/'+task._id">{{task.name}}</router-link> -->
            <task :name="task.name" :description="task.description" :taskId="task._id" :listId="listId" :boardId="board._id"></task>
        </div>
    </div>
</template>

<script>
    import task from './Task'
    export default {
        data() {
            return {    
                list:{}
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'boardId'],
        mounted() {
            // this.$store.dispatch('getLists', this.$route.params.id)
            this.$store.dispatch('getTasks', { listId: this.listId, boardId: this.boardId })
        },
        methods:{
            creatList(){
                this.$store.dispatch()
            }

        },
        computed: {
            tasks() {
                return this.$store.state.activeTasks[ this.listId ]
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