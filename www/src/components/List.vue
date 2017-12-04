<template>

    <div>

        <div class=" list-header">
            <i class="fa fa-trash fa-md" @click="removeList(listId)"></i>
        </div>
        <div class="list-body">
            <h3>{{name}}</h3>
            <div v-if="description">
                <p>Description: {{description}}</p>
            </div>
            <button class="btn-info btn-xs margin" @click="seen = !seen">New Task</button>
            <div class="create-task" v-if="seen">
                <form @submit.prevent="createTask">
                    <div class="form-group">
                        <label for="name">name</label>
                        <input class="inline" size="15" type="text" name="name" placeholder="name" v-model="task.name" required>
                    </div>
                    <div class="form-group">
                        <label for="description">description</label>
                        <input class="inline" size="15" type="text" name="description" placeholder="description" v-model="task.description">
                        <button type="submit" class="btn-xs btn-success">Add</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="list-footer">
            <div class="the-task" v-for="task in tasks">
                <!-- <router-link :to="'/tasks/'+task._id">{{task.name}}</router-link> -->
                <task :name="task.name" :description="task.description" :taskId="task._id" :listId="listId" :boardId="boardId"></task>
            </div>
        </div>

    </div>

</template>

<script>
    import task from './task'
    export default {
        data() {
            return {
                list: {},
                task: {
                    listId: this.listId,
                    boardId: this.boardId
                },
                seen: false
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
                this.$store.dispatch('createTask', { task: this.task })
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
        border-radius: 5px;
        height: 600px;
        margin-top: 1%;
        overflow: auto;
        background: rgb(46, 94, 236);
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
    }

    .inline {
        display: inline;
    }

    /* .task{
        background-color: #2b2a2ab7; 
        color: white;
    } */

    .list-header {
        /* background-color: #9796965e; */
        padding: 1rem;
    }

    .margin {
        margin: 1rem;
    }
</style>