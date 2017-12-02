<template>
  <div class="board container-fluid">
    <div class="boardheader">
      <h2>Board: {{board.name}}</h2>
      <h2>{{board.description}}</h2>
    </div>
    <button class="btn-info" @click="seen = !seen">New List</button>
    <div class="createNewList" v-if="seen">
        <form @submit.prevent="creatList">
          <label for="name">name</label>
          <input type="text" name="name" v-model="newList.name">
          <label for="description">description</label>
          <input type="text" name="description" v-model="newList.description">
          <button type="submit" class="btn btn-success btn-sm">add</button>
        </form>
      </div>
    
    <div class="row dalists">
      <div class="drawList col-sm-4" v-for="list in lists">
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
        newList: {},
        seen: false
      }
    },
    name: 'board',
    mounted() {
      this.$store.dispatch('getBoard', { boardId: this.$route.params.id })
    },
    methods: {
      creatList() {
        this.$store.dispatch('createList', { name: this.newList.name, description: this.newList.description, boardId: this.$route.params.id })
        this.newList = {}
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
  .boardheader{
    background-color: rgb(253, 251, 251);
    border-radius: 15px;
    color: black;
    display: inline;
  }
  .list{
    background-color: rgba(253, 202, 119, 0.795);
  }
</style>