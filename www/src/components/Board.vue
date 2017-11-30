<template>
  <div> 
     {{board.name}}
     <button @click="listTest"></button>
     <div class="drawList" v-for="list in lists">
       <list :name="list.name" :description="list.description">

       </list>

     </div>

  </div>
  
</template>

<script>
import lists from './List'
export default {
  name: 'board',
  mounted(){
    this.$store.dispatch('getBoard',this.$route.params.id)
  },
  methods:{
    listTest(){
      this.$store.dispatch('getLists', this.$route.params.id)
    }
  },
  computed:{
    board(){
      return this.$store.state.activeBoard
    },
    components:{
      lists
    }
  }
}
</script>

<style scoped>

</style>
