<template>

    <div>
        <div class="list">
            <div class=" list-header">
                <i class="fa fa-trash fa-md" @click="removeList(listId)"></i>
            </div>
            <div class="list-body">
                <h3>{{name}}</h3>
                <div v-if="description">
                    <p>Description: {{description}}</p>
                </div>
                <div class="create-task">
                    <form @submit.prevent="createTask">
                        <label for="name">name</label>
                        <input class="form-control" type="text" name="name" v-model="newTask.name" required>
                        <label for="description">description</label>
                        <input class="form-control" type="text" name="description" v-model="newTask.description">
                        <button type="submit" class="btn btn-success">add new task</button>
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
<<<<<<< HEAD
            createTask() {
                debugger
                this.$store.dispatch('createTask', { listId: this.listId, boardId: this.boardId, name: this.name })
=======

            newComment() {
                this.$store.dispatch('newComment', { listId: listId, boardId: this.boardId, description: this.newComment.description, })
            },
            createTask(listId) {
                this.$store.dispatch('createTask', { listId: this.listId, boardId: this.boardId, newTask: this.newTask })
>>>>>>> 83a3042114bc2449787964f8f5b5006d68143c10
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
        bottom: 10px;
        left:25%;
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