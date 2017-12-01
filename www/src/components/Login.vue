<template>
<div class="loginbox">

    <div class='login'>
       <div class="header container">
           <h1>Login:</h1>
       </div>
       
        <form @submit.prevent="userLogin" class="form-horizontal" role="form">
            <div class="form-group">
                <label class="col-sm-2 control-label" for="inputEmail3">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="login.email" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label" for="inputPassword3">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="login.password" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">Sign in</button>
                </div>
            </div>
        </form>


        <!-- <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModalHorizontal">
            Launch Horizontal Form
        </button>

        
        <div class="modal fade" id="myModalHorizontal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                   
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">
                            User Login
                        </h4>
                    </div>

                    
                    <div class="modal-body">

                        <form @submit.prevent="userLogin" class="form-horizontal" role="form">
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputEmail3">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="login.email"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputPassword3">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="login.password" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn btn-default">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> -->
    </div>

</div>
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
                },
                login: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            userLogin() {
                this.$store.dispatch('userLogin', this.login)
            },
            userRegister() {
                this.$store.dispatch('userRegister', this.register)
            },
            modalToggle() {

            }
        }

    }
</script>

<style>
    .modal-body .form-horizontal .col-sm-2,
    .modal-body .form-horizontal .col-sm-10 {
        width: 100%
    }

    .modal-body .form-horizontal .control-label {
        text-align: left;
    }

    .modal-body .form-horizontal .col-sm-offset-2 {
        margin-left: 15px;
    }
    .header{
        display: flex;
        justify-content: flex-start;
    }
    .loginbox{
        background-color: #b8dcffa2;
    }
</style>

<!-- <div class="authButtons">
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
                    </div>-->