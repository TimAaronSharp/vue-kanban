<template>
    <div class="comment-container">


        <div class="tasks open-comments">
            <p @click="commentsSeen = !commentsSeen">Task: {{name}}
                <button @click="removeTask">x</button>
                <div class="comments" v-if="commentsSeen" v-for="comment in comments">
                    <p>{{comment.description}}
                        <button @click="removeComment(comment._id)">x</button>
                    </p>
                </div>
            </p>
        </div>
        <div class="the-lists">
            <form @change="moveTaskToDifferentList">
                <select v-model="formOption">
                    <option disabled selected>Select List</option>
                    <option v-for="list in lists" :value="list._id">{{list.name}}</option>
                </select>
            </form>
        </div>
        <i class="fa fa-plus fa-md" @click="seen = !seen"></i>
        <div class="commentForm" v-if="seen">
            <!-- <div class="cformHead">
                <h4>New Comment</h4>
            </div> -->
            <div class="newComment">
                <form @submit.prevent="newComment">
                    <div class="form-group">
                        <label for="description">Comment:</label>
                        <input name="description" type="text" size="10" v-model="comment.description">
                        <button class="btn-success btn-xs" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                seen: false,
                comment: {
                    boardId: this.boardId,
                    listId: this.listId,
                    taskId: this.taskId
                },
                formOption: '',
                commentsSeen: false
            }
        },
        name: 'task',
        props: ['name', 'description', 'taskId', 'listId', 'boardId'],
        mounted() {
            this.$store.dispatch('getComments', { taskId: this.taskId, listId: this.listId, boardId: this.boardId })
        },
        methods: {
            openComments() {

                this.$store.dispatch('getComments', { taskId: this.taskId, listId: this.listId, boardId: this.boardId })
            },
            moveTaskToDifferentList() {

                this.$store.dispatch('moveTaskToDifferentList', { taskId: this.taskId, boardId: this.boardId, oldListId: this.listId, listId: this.formOption })
            },
            newComment() {

                this.$store.dispatch('newComment', { comment: this.comment })
            },
            removeTask() {
                this.$store.dispatch('removeTask', { taskId: this.taskId, listId: this.listId, boardId: this.boardId })
            },
            removeComment(commentId) {
                debugger
                this.$store.dispatch('removeComment', { taskId: this.taskId, listId: this.listId, boardId: this.boardId, commentId: commentId })
            }
        },
        computed: {
            lists() {
                return this.$store.state.activeLists
            },
            tasks() {
                return this.$store.state.activeTasks
            },
            comments() {
                return this.$store.state.activeComments[this.taskId]
            }
        },

    }
</script>

<style scoped>
    .open-comments {
        color: white;
        cursor: pointer;
        /* font-size: 100%;  */
    }

    .comment-container {
        margin-left: 2rem;
        margin-right: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        background: pink;
    }

    .comments {
        margin: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        background:lightgreen;
        word-wrap: normal;
    }
    /* .tasks{
        margin-top: 0.5rem;
    } */
</style>