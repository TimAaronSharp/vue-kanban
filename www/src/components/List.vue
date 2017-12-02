<template>

    <div>
        <div class="list">
            <div class=" list-header">
                <i class="fa fa-plus fa-md" @click="seen = !seen"></i>
                <i class="fa fa-trash fa-md" @click="removeList(listId)"></i>
                <div class="commentForm" v-if="seen">
                    <div class="cformHead">
                        <h4>New Comment</h4>
                    </div>
                    <form @submit="newComment">
                        <div class="form-group">
                            <label for="description">Comment:</label>
                            <input name="description" type="text">
                        </div>
                        <div class="form-group">
                            <button type="submit">Add</button>
                        </div>

                    </form>

                </div>

            </div>
            <div class="list-body">
                <h3>List: {{name}}</h3>
                <p>List Description: {{description}}</p>
            </div>
            <div class="task" v-for="task in tasks">
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
                list: {},
<<<<<<< HEAD
                seen: false
=======
                newTask: {}
>>>>>>> d32181439a32be4fbd6ad43151c6638144f326c6
            }
        },
        name: 'list',
        props: ['name', 'description', 'listId', 'boardId'],
        mounted() {
            // this.$store.dispatch('getLists', this.$route.params.id)
            this.$store.dispatch('getTasks', { listId: this.listId, boardId: this.boardId })
        },
        methods: {
            removeList(listId) {
                this.$store.dispatch('removeList', { listId: listId, boardId: this.boardId })

            },
<<<<<<< HEAD
            newComment(listId) {
                this.$store.dispatch('newComment', { listId: listId, boardId: this.boardId })
=======
            createTask(){
                debugger
                this.$store.dispatch('createTask', {listId: this.listId, boardId: this.boardId, newTask: this.newTask})
>>>>>>> d32181439a32be4fbd6ad43151c6638144f326c6
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
<<<<<<< HEAD

=======
    .create-task{
        position: absolute;
        bottom: 5px;
    }
>>>>>>> d32181439a32be4fbd6ad43151c6638144f326c6
    /* .task{
        background-color: #2b2a2ab7; 
        color: white;
    } */

    .list-header {
        /* background-color: #9796965e; */
        padding: 1rem;
    }
</style>