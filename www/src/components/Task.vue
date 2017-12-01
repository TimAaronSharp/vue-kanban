<template>
    <div class="task">
        <h3 class="open-comments" @click="openComments">{{name}}</h3>
        <div class="the-comments" v-for="comment in comments">
            <p>{{comment.description}}</p>
        </div>

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
                this.$store.dispatch('getComments', { taskId: this.taskId, listId: this.listId, boardId: this.boardId})
            }
        },
        computed: {
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
    }
</style>