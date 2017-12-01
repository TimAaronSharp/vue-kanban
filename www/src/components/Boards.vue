<template>
  <div>
    <h2>Boards</h2>
    <div class="header container">
      <button class="btn-danger" @click="userLogout">Logout</button>
    </div>
    
    <button @click="createBoard">Add Board</button>
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
        this.$store.dispatch('createBoard', )
      },
      userLogout(){
        this.$store.dispatch('logout', this.$store.state.user._id)
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      }
    }
  }
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: flex-end
  }
</style>
