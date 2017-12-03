<template>
    <div>


        <div class="comments">
            <p class="open-comments" @click="openComments">Task: {{name}}</p>
            <div class="the-comments" v-for="comment in comments">
                <p>{{comment.description}}</p>
            </div>
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
                moveComment: {
                    boardId: this.boardId,
                    taskId: this.taskId
                },
                formOption: ''
            }
        },
        name: 'task',
        props: ['name', 'description', 'taskId', 'listId', 'boardId'],
        mounted() {
            // this.$store.dispatch('getTasks', this.$route.params.id)
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
        color: red;
        cursor: pointer;
        /* font-size: 100%;  */
    }
</style>