<template>
  <div>
    {{board.name}}
    <div class="drawList" v-for="list in lists">
      <list :name="list.name" :description="list.description":id="list._id">

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