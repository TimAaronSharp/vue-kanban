<template>
  <div>

    <h1>Boards</h1>
    <div class="header container">
      <button class="btn-success">New Board</button>
      <button class="btn-danger" @click="userLogout">Logout</button>
    </div>
    <!-- <div class="boardHeader container">
    </div> -->
    <div class="boardList">
      
        <div v-for="board in boards">
          <router-link :to="'/boards/'+board._id">{{board.name}}</router-link>
          <span @click="removeBoard(board)">x</span>
        </div>
      
    </div>
      
    <div class="boardForm container">

      <form @submit.prevent="createBoard">
        <label for="name">Name</label>
        <input class="form-control" type="text" name="name" v-model="board.name">
        <label for="description">description</label>
        <input class="form-control" type="text" name="description" v-model="board.description">
        <div>
          <button type="submit">Add Board</button>
        </div>
      </form>
    </div>
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
  .header {
    display: flex;
    justify-content: space-between
  }

  .boardForm {
    display: flex;
    max-width: 60rem;
    justify-content: center;
    background-color: grey;

    
  }

  .boardHeader {
    display: flex;
    justify-content: flex-start
  }
  .boardList{
    margin: 5rem;
  }
  
</style>