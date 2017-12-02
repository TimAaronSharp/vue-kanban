<template>
    <div class="task">
        <p class="open-comments" @click="openComments">Task: {{name}}</p>
        <div class="the-comments" v-for="comment in comments">
                <p><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> {{comment.description}} <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></p>
        </div>
<<<<<<< HEAD
        <!-- <div class="the-lists">
            <select >
=======
        <div class="the-lists">
            <select @change="moveTaskToDifferentList">
>>>>>>> eb76db5f638fc21621d85060a8d49f93dbcaf64b
                <option v-for="list in lists">{{list.name}}</option>
            </select>
        </div> -->

    </div>
</template>

<script>

    export default {
        data() {
            return {

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
        font-size: 100%; 
    }
</style>