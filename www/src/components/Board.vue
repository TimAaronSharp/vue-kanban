<template>
  <div class="board container-fluid">
    <h2>Board: {{board.name}}</h2>
    <form @submit.prevent="creatList">
      <label for="name">name</label>
      <input type="text" name="name" v-model="newList.name">
      <label for="description">description</label>
      <input type="text" name="description" v-model="newList.description">
      <button type="submit" class="btn btn-success">add new list</button>
    </form>
    <div class="row dalists">
      <div class="drawList col-sm-4" v-for="list in lists">
        <list :name="list.name" :description="list.description" :listId="list._id" :boardId="board._id"></list>
      </div>
    </div>
  </div>
</template>

<script>
  import list from './List'
  export default {
    data() {
      return {
        newList:{}
      }
    },
    name: 'board',
    mounted() {
      this.$store.dispatch('getBoard', {boardId: this.$route.params.id})
    },
    methods: {
      creatList(){
        this.$store.dispatch('createList', { name:this.newList.name, description:this.newList.description , boardId:this.$route.params.id})
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


</style>