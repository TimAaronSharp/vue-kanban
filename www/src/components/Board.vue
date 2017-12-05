<template>
  <div class="board container-fluid">
    <div class="boardHeaderC container">

      <div class="boardheader">
        <h2>{{board.name}}</h2>
        <h4 v-if="board.description" class="board-description">Description: {{board.description}}</h4>
        <button class="btn-success" @click="toggleListForm">New List</button>
      </div>
    </div>
    <div class="createList" v-if="showAddListForm">
      <form @submit.prevent="createList">
        <input type="text" name="name" placeholder="name" v-model="list.name" required>
        <input type="text" name="description" placeholder="description" v-model="list.description">
        <button type="submit" class="btn btn-success btn-sm">add</button>
      </form>
    </div>

    <div class="row dalists">
      <div class="drawList col-sm-3" v-for="list in lists">
        <list class="list" :name="list.name" :description="list.description" :listId="list._id" :boardId="board._id"></list>
      </div>
    </div>

  </div>
</template>

<script>
  import list from './List'
  export default {
    data() {
      return {
        list: {
          boardId: this.$route.params.id
        },
        showAddListForm: false
      }
    },
    name: 'board',
    mounted() {
      this.$store.dispatch('getBoard', { boardId: this.$route.params.id })
    },
    methods: {
      createList() {
        this.$store.dispatch('createList', { list: this.list })
        this.list = {
          boardId: this.$route.params.id
        }
        this.toggleListForm()
      },
      toggleListForm() {
        debugger
        this.showAddListForm = !this.showAddListForm
      }
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
  .dalists {
    margin: 1rem;
  }
  .board-description{
    color: rgb(233, 233, 233);
  }
  .boardheader {
    background-color: rgb(104, 142, 255);
    border-radius: 15px;
    color: rgb(250, 248, 248);
    display: inline block;
    padding: 1rem;
  }
  .boardHeaderC{
    display: flex;
    justify-content:center
  }
</style>