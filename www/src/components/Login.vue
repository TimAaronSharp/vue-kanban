<template>
    <div class='login'>
        <div class="authButtons">
            <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal">Login</button>

            <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#regModal">Register</button>

            <div class="modal register-modal fade" id="regModal" role="dialog">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Register</h4>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="userRegister">
                                <div class="formgroup">
                                    <label for="regemail">Email:</label>
                                    <input class="form-control" name="regemail" placeholder="john@email.com" type="text" v-model="register.email">
                                </div>
                                <div class="formgroup">
                                    <label for="regName">Username:</label>
                                    <input class="form-control" name="regName" placeholder="Username" type="text" v-model="register.name">
                                </div>
                                <div class="formgroup">
                                    <label for="regpass">Password:</label>
                                    <input class="form-control" name="regpass" placeholder="****" type="text" v-model="register.password">
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal login-modal fade" id="myModal" role="dialog">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Login</h4>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="userLogin">
                                <div class="formgroup">
                                    <label for="logemail">Email:</label>
                                    <input class="form-control" name="logemail" placeholder="john@email.com" type="text" v-model="login.email">
                                </div>
                                <div class="formgroup">
                                    <label for="logpass">Password:</label>
                                    <input class="form-control" name="logpass" placeholder="****" type="text" v-model="login.password">
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<script>
    export default {
        name: 'login',
        data() {
            return {
                register:{
                    name:'',
                    email:'',
                    password:''
                },
                login:{
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            userLogin() {
                this.$store.dispatch('userLogin', this.login)
            },
            userRegister() {
                debugger
                this.$store.dispatch('userRegister', this.register)
            }
        }

    }
</script>