<template>
    <div>


        <div class="comments">
            <p class="open-comments" @click="openComments">Task: {{name}}</p>
            <div class="the-comments" v-for="comment in comments">
                <p>{{comment.description}}</p>
            </div>
        </div>
        <!-- <div class="the-lists">
            <select @change="moveTaskToDifferentList">
                <option v-for="list in lists">{{list.name}}</option>
            </select>
        </div>  -->
        <i class="fa fa-plus fa-md" @click="seen = !seen"></i>
        <div class="commentForm" v-if="seen">
            <!-- <div class="cformHead">
                <h4>New Comment</h4>
            </div> -->
            <div class="newComment">
                <form @submit="newComment">
                    <div class="form-group">
                        <label for="description">Comment:</label>
                        <input name="description" type="text" size="10" v-model="newComment.description">
                        <button class="btn-success btn-xs" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                seen: false,
                comment: {}
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
                this.$store.dispatch('moveTaskToDifferentList', { taskId: this.taskId, listId: this.listId, boardId: this.boardId })
            },
            newComment() {
                this.$store.dispatch('newComment', { taskId: this.taskId, description: this.newComment.description })
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