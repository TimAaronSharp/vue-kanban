<template>
    <div class="list">
       <h1>LIST</h1>
       <h3>{{name}}</h3>
       <h4>{{description}}</h4>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        name: 'list',
        props: ['name','description'],
        mounted(){
            return this.$store.dispatch('getList', this.$route.params.id)
    }

    }

</script>

<style>
</style>