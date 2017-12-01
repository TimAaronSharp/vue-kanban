<template>
  <div>


    <button @click="userLogout">Logout</button>
    <form @submit.prevent="createBoard">
      <label for="name">Name</label>
      <input class="form-control" type="text" name="name" v-model="board.name">
      <label for="description">description</label>
      <input class="form-control" type="text" name="description" v-model="board.description">
      <div>
        <button type="submit">Add Board</button>
      </div>
    </form>
    <ul>
      <li v-for="board in boards">
        <router-link :to="'/boards/'+board._id">{{board.name}}</router-link>
        <span @click="removeBoard(board)">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        register: {},
        login: {},
        board: {}
      }
    },
    name: 'boards',
    mounted() {
      this.$store.dispatch('getBoards')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      }
    },
    methods: {
      createBoard() {
        
        this.$store.dispatch('createBoard', this.board)
      },
      userLogout() {
        this.$store.dispatch('logout', this.$store.state.user._id)
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      }
    }
  }
</script>

<style scoped>
</style>