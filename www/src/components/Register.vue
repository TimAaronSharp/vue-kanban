<template>
    



</template>


<script>
    export default {
        name: 'login',
        data() {
            return {
                register: {
                    name: '',
                    email: '',
                    password: ''

                }
            }
        },
        methods: {
            userRegister() {
                this.$store.dispatch('userRegister', this.register)
            },

        },
        props:{

        }

    }
</script>
<style></style>