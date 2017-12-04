<template>
  <div>

    <h1>{{user.name}}'s Boards</h1>
    <div class="header container-fluid">
      <button @click="seen = !seen" class="btn-info">New Board</button>
      <button class="btn-danger" @click="userLogout">Logout</button>
    </div>
    <!-- <div class="boardHeader container">
    </div> -->
    <div class="boardList row">

      <div class="col-sm-3" v-for="board in boards">
        <div class="board">
          <router-link class="tdn" :to="'/boards/'+board._id">
            <p>


              {{board.name}}


            </p>
          </router-link>
          <span class="remove" @click="removeBoard(board)">x</span>
        </div>
      </div>

      <div v-if="seen" class="boardForm container">
        <form @submit.prevent="createBoard">
          <label for="name">Name:</label>
          <input class="form-control" placeholder="name" type="text" name="name" v-model="board.name" required>
          <label for="description">Description:</label>
          <input class="form-control" placeholder="description" type="text" name="description" v-model="board.description">
          <div class="blacktext">
            <button class="btn-success margins" type="submit">Add Board</button>
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
        register: {},
        login: {},
        board: {},
        seen: false
      }
    },
    name: 'boards',
    mounted() {
      this.$store.dispatch('getBoards')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      createBoard() {
        this.$store.dispatch('createBoard', this.board)
        this.board = {}
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
  .tdn {
    text-decoration: none;
    color: white;
  }

  .header {
    display: flex;
    justify-content: space-between
  }

  .font {
    font-size: 150%;
    font-weight: bold;
  }

  .boardForm {
    display: flex;
    max-width: 60rem;
    justify-content: center;
    background-color: rgba(31, 30, 30, 0.575);
    color: white;
    border-radius: 25px;
    padding: 1rem;

  }

  .boardHeader {
    display: flex;
    justify-content: flex-start
  }

  .boardList {
    margin: 5rem;
    /* background-color: rgba(8, 8, 8, 0.452); */
  }

  .board-boarder {
    margin: 2rem;
  }

  /* .board {
    background-color: rgb(255, 255, 255);
    color: black;
    margin: 1rem;
    text-decoration: none;
    font-size: 110%;
  } */

  .remove {
    color: red;
    cursor: pointer;
  }

  a {
    display: inline-block;
    margin: 1rem;
  }

  .blacktext {
    color: black;
  }

  .margins {
    margin: .5rem;
  }

  .bb {
    border-radius: 5px;
    background: lightblue;
  }

  .board {
    color: white;
    font-weight: bold;
    font-size: 2rem;
    color: white;
    height: 125px;
    margin: 2rem;
    border-radius: 5px;
    background: rgb(4, 60, 245);
  }
</style>