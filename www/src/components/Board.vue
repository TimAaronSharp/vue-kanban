<template>
  <div>
    <h2>Board: {{board.name}}</h2>
    <div class="drawList" v-for="list in lists">
      <list :name="list.name" :description="list.description" :listId="list._id" :boardId="board._id">

      </list>

    </div>

  </div>

</template>

<script>
  import list from './List'
  export default {
    data() {
      return {

      }
    },
    name: 'board',
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)
    },
    methods: {
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.activeLists
      }
    },
    components: {
      list
    }
  }
</script>

<style scoped>
</style>