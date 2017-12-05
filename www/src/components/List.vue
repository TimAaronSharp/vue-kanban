<template>
    <draggable :options="{group: 'lists'}">
        <div :id="listId">

            <div class="list-header">
                <i class="fa fa-trash fa-md" @click="removeList(listId)"></i>
            </div>
            <div class="list-body">
                <h3 class="list-text-color">{{name}}</h3>
                <div v-if="description">
                    <p class="list-text-color">Description: {{description}}</p>
                </div>
                <button class="btn-success btn-xs margin" @click="toggleTaskForm">New Task</button>
                <div class="create-task" v-if="showAddTaskForm">
                    <form @submit.prevent="createTask">
                        <div class="form-group">
                            <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="task.name" required>
                            <button type="submit" class="btn-xs btn-success">Add</button>
                        </div>
                        <!-- <div class="form-group">
                            <label for="description">description</label>
                            <input class="inline" size="15" type="text" name="description" placeholder="description" v-model="task.description">
                        </div> -->
                        <!-- e -->
                    </form>
                </div>

            </div>
            <div class="list-footer">
                <div class="the-task" v-for="task in tasks">
                    <!-- <router-link :to="'/tasks/'+task._id">{{task.name}}</router-link> -->
                    <task :name="task.name" :description="task.description" :taskId="task._id" :listId="listId" :boardId="boardId" :newListId="newListId"></task>
                </div>
            </div>

        </div>
    </draggable>
</template>

<script>
    import task from './task'
    import draggable from 'vuedraggable'
    export default {
        data() {
            return {
                list: {},
                task: {
                    listId: this.listId,
                    boardId: this.boardId

                },
                showAddTaskForm: false,
                newListId: document.getElementById('listId')
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'boardId', 'taskId', 'id'],
        mounted() {
            // this.$store.dispatch('getLists', this.$route.params.id)
            this.$store.dispatch('getTasks', { listId: this.listId, boardId: this.boardId })
        },
        methods: {
            removeList(listId) {
                this.$store.dispatch('removeList', { listId: listId, boardId: this.boardId })
            },
            createTask() {
                
                this.task.order = this.$store.state.activeTasks[this.listId].length
                this.$store.dispatch('createTask', { task: this.task })
                this.task = {
                    listId: this.listId,
                    boardId: this.boardId

                }
                this.toggleTaskForm()
            },

            toggleTaskForm() {
                this.showAddTaskForm = !this.showAddTaskForm
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
            task,
            draggable

        }

    }

</script>

<style>
    .list {
        border-radius: 5px;
        height: 600px;
        margin-top: 1%;
        overflow: auto;
        background: rgb(104, 142, 255);
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    .fa-trash {
        float: right;
        color: rgb(235, 15, 15);
    }
    .fa-trash:hover{
       color: rgb(255, 155, 155);
    }

    .inline {
        display: inline;
    }

    /* .task{
        background-color: #2b2a2ab7; 
        color: white;
    } */

    .list-text-color {
        color: white;
    }

    .list-header {
        /* background-color: #9796965e; */
        padding: 1rem;
    }

    .margin {
        margin: 1rem;
    }

    .the-task {
        margin-top: 0.5rem;
    }
</style>