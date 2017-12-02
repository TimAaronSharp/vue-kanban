<template>

    <div>
        <div class="list">

            <div class="list-header">
                <h3>List: {{name}}</h3>
                <p>List Description: {{description}}</p>
            </div>
            <!-- <h5>{{_id}}</h5> -->
            <div class="task" v-for="(task, i) in tasks">
                <!-- <router-link :to="'/tasks/'+task._id">{{task.name}}</router-link> -->
                <task :name="task.name" :description="task.description" :taskId="task._id" :listId="listId" :boardId="boardId"></task>
            </div>
        </div>

    </div>

</template>

<script>
    import task from './Task'
    export default {
        data() {
            return {
                list: {}
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'boardId'],
        mounted() {
            // this.$store.dispatch('getLists', this.$route.params.id)
            this.$store.dispatch('getTasks', { listId: this.listId, boardId: this.boardId })
        },
        methods: {
            creatList() {
                this.$store.dispatch()
            }

        },
        computed: {
            tasks() {
                return this.$store.state.activeTasks[this.listId]
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
    .list {
        border: black;
        border-style: solid;
        margin: 1rem;
    }
    .task{
        background-color: #2b2a2ab7;
        color: white;
    }
    /* .list-header {
        background-color: #9796965e;
    } */
</style>