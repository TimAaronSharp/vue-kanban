<template>

    <div>
        <div class="list">
            <div class=" list-header">
                <i class="fa fa-trash fa-md" @click="removeList(listId)"></i>
            </div>
            <div class="list-body">
                <h3>List: {{name}}</h3>
                <p>List Description: {{description}}</p>
                <div class="createTask">
                    <form @submit="createTask">
                        <div class="form-group">
                            <label for="name">Task:</label>
                            <input name="name" type="text" size="10" v-model="createTask.name" placeholder="task">
                            <button class="btn-success btn-xs" type="submit">Add</button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="list-footer">
                <div class="task" v-for="task in tasks">
                    <!-- <router-link :to="'/tasks/'+task._id">{{task.name}}</router-link> -->
                    <task :name="task.name" :description="task.description" :taskId="task._id" :listId="listId" :boardId="boardId"></task>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import task from './Task'
    export default {
        data() {
            return {
                list: {},
                task: {}
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'boardId', 'taskId'],
        mounted() {
            // this.$store.dispatch('getLists', this.$route.params.id)
            this.$store.dispatch('getTasks', { listId: this.listId, boardId: this.boardId })
        },
        methods: {
            removeList(listId) {
                this.$store.dispatch('removeList', { listId: listId, boardId: this.boardId })

            },
            createTask() {
                debugger
                this.$store.dispatch('createTask', { listId: this.listId, boardId: this.boardId, name: this.name })
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
        min-height: 400px;
        margin-top: 1%;
    }

    .fa-trash {
        float: right;
    }

    .create-task {
        position: absolute;
        bottom: 5px;
    }

    /* .task{
        background-color: #2b2a2ab7; 
        color: white;
    } */

    .list-header {
        /* background-color: #9796965e; */
        padding: 1rem;
    }
</style>