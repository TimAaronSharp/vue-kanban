webpackJsonp([1],[,,,,,,,,,,,,,function(t,s,e){"use strict";var a=e(7),o=e.n(a),i=e(104),n=e(93),r=e.n(n),c=e(92),d=e.n(c),l=e(95),m=e.n(l);o.a.use(i.a),s.a=new i.a({routes:[{path:"/",name:"Boards",component:r.a},{path:"/boards/:id",name:"Board",component:d.a},{path:"/login",name:"Login",component:m.a}]})},,,,,,,,,,,,,,,,,,function(t,s,e){e(79);var a=e(3)(e(62),e(99),null,null);t.exports=a.exports},,,,function(t,s,e){"use strict";var a=e(40),o=e.n(a),i=e(7),n=e.n(i),r=e(106),c=e(13),d=o.a.create({baseURL:"/api/",timeout:2e3,withCredentials:!0}),l=o.a.create({baseURL:"/",timeout:2e3,withCredentials:!0});n.a.use(r.a);var m=new r.a.Store({state:{boards:[],activeBoard:{},activeLists:[],activeTasks:{},activeComments:{},error:{},user:{}},mutations:{setUser:function(t,s){t.user=s},setBoards:function(t,s){t.boards=s},handleError:function(t,s){t.error=s},setActiveBoard:function(t,s){t.activeBoard=s},setActiveLists:function(t,s){t.activeLists=s},setActiveTasks:function(t,s){n.a.set(t.activeTasks,s.listId,s.task)},setActiveComments:function(t,s){n.a.set(t.activeComments,s.taskId,s.comment)}},actions:{getBoards:function(t){var s=t.commit;t.dispatch;d("userboards").then(function(t){s("setBoards",t.data.data)}).catch(function(t){s("handleError",t)})},getBoard:function(t,s){var e=t.commit,a=t.dispatch;d("boards/"+s.boardId).then(function(t){e("setActiveBoard",t.data.data),a("getLists",t.data.data._id)}).catch(function(t){e("handleError",t)})},createBoard:function(t,s){var e=t.commit,a=t.dispatch;d.post("boards/",s).then(function(t){a("getBoards")}).catch(function(t){e("handleError",t)})},removeBoard:function(t,s){var e=t.commit,a=t.dispatch;d.delete("boards/"+s._id).then(function(t){a("getBoards")}).catch(function(t){e("handleError",t)})},getLists:function(t,s){var e=t.commit;t.dispatch;d("boards/"+s+"/lists").then(function(t){e("setActiveLists",t.data.data)}).catch(function(t){e("handleError",t)})},createList:function(t,s){var e=t.commit,a=t.dispatch;d.post("lists/",s.list).then(function(t){a("getLists",s.list.boardId)}).catch(function(t){e("handleError",t)})},removeList:function(t,s){var e=t.commit,a=t.dispatch;d.delete("lists/"+s.listId).then(function(t){a("getLists",s.boardId)}).catch(function(t){e("handleError",t)})},getTasks:function(t,s){var e=t.commit;t.dispatch;d("boards/"+s.boardId+"/lists/"+s.listId+"/tasks").then(function(t){e("setActiveTasks",{task:t.data.data,listId:s.listId})}).catch(function(t){e("handleError",t)})},createTask:function(t,s){var e=t.commit,a=t.dispatch;d.post("/tasks",s.task).then(function(t){a("getTasks",s.task)}).catch(function(t){e("handleError",t)})},moveTaskToDifferentList:function(t,s){var e=t.commit,a=t.dispatch;d.put("tasks/"+s.taskId,{listId:s.listId}).then(function(t){a("getTasks",s),a("getTasks",{listId:s.oldListId,boardId:s.boardId})}).catch(function(t){e("handleError",t)})},removeTask:function(t,s){var e=t.commit,a=t.dispatch;d.delete("tasks/"+s.taskId).then(function(t){a("getTasks",s)}).catch(function(t){e("handleError",t)})},getComments:function(t,s){var e=t.commit;t.dispatch;d("boards/"+s.boardId+"/lists/"+s.listId+"/tasks/"+s.taskId+"/comments").then(function(t){e("setActiveComments",{comment:t.data.data,taskId:s.taskId})}).catch(function(t){e("handleError",t)})},newComment:function(t,s){var e=t.commit,a=t.dispatch;d.post("/comments",s.comment).then(function(t){a("getComments",s.comment)}).catch(function(t){e("handleError",t)})},removeComment:function(t,s){var e=t.commit,a=t.dispatch;d.delete("comments/"+s.commentId).then(function(t){a("getComments",s)}).catch(function(t){e("handleError",t)})},userLogin:function(t,s){var e=t.commit;t.dispatch;l.post("login",s).then(function(t){e("setUser",t.data.data),c.a.push({name:"Boards"})}).catch(function(){c.a.push({name:"Login"})})},userRegister:function(t,s){var e=t.commit;t.dispatch;l.post("register",s).then(function(t){e("setUser",t.data.data),c.a.push({name:"Boards"})}).catch(function(t){e("handleError",t),c.a.push({name:"Login"})})},authenticate:function(t){var s=t.commit;t.dispatch;l("authenticate").then(function(t){s("setUser",t.data.data),c.a.push({name:"Boards"})}).catch(function(){c.a.push({name:"Login"})})},logout:function(t,s){var e=(t.commit,t.dispatch);l.delete("logout").then(function(t){e("authenticate")}).catch(function(t){res.status(401).send({Error:t})})},handleError:function(t,s){var e=t.commit;t.dispatch;e("handleError",s)}}});s.a=m},,function(t,s,e){e(78);var a=e(3)(e(58),e(98),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(94),o=e.n(a);s.default={name:"app",components:{Error:o.a},mounted:function(){this.$store.dispatch("authenticate")}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(31),o=e.n(a);s.default={data:function(){return{list:{boardId:this.$route.params.id},showAddListForm:!1}},name:"board",mounted:function(){this.$store.dispatch("getBoard",{boardId:this.$route.params.id})},methods:{createList:function(){this.$store.dispatch("createList",{list:this.list}),this.list={boardId:this.$route.params.id},this.toggleListForm()},toggleListForm:function(){this.showAddListForm=!this.showAddListForm}},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.activeLists}},components:{list:o.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{register:{},login:{},board:{},showBoardForm:!1}},name:"boards",mounted:function(){this.$store.dispatch("getBoards")},computed:{boards:function(){return this.$store.state.boards},user:function(){return this.$store.state.user}},methods:{createBoard:function(){this.$store.dispatch("createBoard",this.board),this.board={},this.toggleBoradForm()},userLogout:function(){this.$store.dispatch("logout",this.$store.state.user._id)},removeBoard:function(t){this.$store.dispatch("removeBoard",t)},toggleBoradForm:function(){this.showBoardForm=!this.showBoardForm}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"error",computed:{error:function(){return this.$store.state.error}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(96),o=e.n(a),i=e(32),n=e.n(i);s.default={data:function(){return{list:{},task:{listId:this.listId,boardId:this.boardId},showAddTaskForm:!1,newListId:document.getElementById("listId")}},name:"list",props:["name","description","listId","boardId","taskId","id"],mounted:function(){this.$store.dispatch("getTasks",{listId:this.listId,boardId:this.boardId})},methods:{removeList:function(t){this.$store.dispatch("removeList",{listId:t,boardId:this.boardId})},createTask:function(){this.task.order=this.$store.state.activeTasks[this.listId].length,this.$store.dispatch("createTask",{task:this.task}),this.task={listId:this.listId,boardId:this.boardId},this.toggleTaskForm()},toggleTaskForm:function(){this.showAddTaskForm=!this.showAddTaskForm}},computed:{tasks:function(){return this.$store.state.activeTasks[this.listId]},lists:function(){return this.$store.state.activeLists}},components:{task:o.a,draggable:n.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"login",data:function(){return{register:{},login:{email:"",password:""}}},methods:{userLogin:function(){this.$store.dispatch("userLogin",this.login)},userRegister:function(){this.$store.dispatch("userRegister",this.register)},toggleForms:function(){this.showForm=!this.showForm},modalToggle:function(){}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(32),o=e.n(a),i=e(31);e.n(i);s.default={data:function(){return{showCommentForm:!1,comment:{boardId:this.boardId,listId:this.listId,taskId:this.taskId},formOption:"",commentsSeen:!1}},name:"task",props:["name","description","taskId","listId","boardId","newListId"],mounted:function(){this.$store.dispatch("getComments",{taskId:this.taskId,listId:this.listId,boardId:this.boardId})},methods:{openComments:function(){this.$store.dispatch("getComments",{taskId:this.taskId,listId:this.listId,boardId:this.boardId})},moveTaskToDifferentList:function(t){this.$store.dispatch("moveTaskToDifferentList",{taskId:this.taskId,boardId:this.boardId,oldListId:this.listId,listId:this.formOption})},newComment:function(){this.$store.dispatch("newComment",{comment:this.comment}),this.comment={boardId:this.boardId,listId:this.listId,taskId:this.taskId},this.toggleCommentForm()},removeTask:function(){this.$store.dispatch("removeTask",{taskId:this.taskId,listId:this.listId,boardId:this.boardId})},removeComment:function(t){this.$store.dispatch("removeComment",{taskId:this.taskId,listId:this.listId,boardId:this.boardId,commentId:t})},toggleCommentForm:function(){this.showCommentForm=!this.showCommentForm}},computed:{lists:function(){return this.$store.state.activeLists},tasks:function(){return this.$store.state.activeTasks},comments:function(){return this.$store.state.activeComments[this.taskId]}},components:{draggable:o.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(7),o=e.n(a),i=e(37),n=e.n(i),r=e(13),c=e(36),d=e.n(c),l=e(35),m=d()("http://localhost:3000");m.on("CONNECTED",function(t){console.log(t),m.emit("update",{data:"blarg",boardId:"3289748320"})}),new o.a({el:"#app",store:l.a,router:r.a,template:"<App/>",components:{App:n.a}})},,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,,,,,,function(t,s,e){e(81);var a=e(3)(e(59),e(101),"data-v-5337eb44",null);t.exports=a.exports},function(t,s,e){e(77);var a=e(3)(e(60),e(97),"data-v-0c6e3af6",null);t.exports=a.exports},function(t,s,e){e(80);var a=e(3)(e(61),e(100),"data-v-49c58c80",null);t.exports=a.exports},function(t,s,e){e(82);var a=e(3)(e(63),e(102),null,null);t.exports=a.exports},function(t,s,e){e(83);var a=e(3)(e(64),e(103),"data-v-7a06f19d",null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"boardsHeader container"},[e("h1",[t._v(t._s(t.user.name)+"'s Boards")]),t._v(" "),e("div",{staticClass:"header container-fluid"},[e("button",{staticClass:"btn-success",on:{click:t.toggleBoradForm}},[t._v("New Board")]),t._v(" "),e("button",{staticClass:"btn-danger",on:{click:t.userLogout}},[t._v("Logout")])])]),t._v(" "),e("div",{staticClass:"boardList row"},[t._l(t.boards,function(s){return e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"board flex"},[e("router-link",{staticClass:"router-link-text",attrs:{to:"/boards/"+s._id}},[e("p",{staticClass:"boardName"},[t._v("\n              "+t._s(s.name)+"\n            ")])]),t._v(" "),e("span",{staticClass:"remove",on:{click:function(e){t.removeBoard(s)}}},[t._v("x")])],1)])}),t._v(" "),t.showBoardForm?e("div",{staticClass:"boardForm container"},[e("form",{on:{submit:function(s){s.preventDefault(),t.createBoard(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.board.name,expression:"board.name"}],staticClass:"form-control",attrs:{placeholder:"name",type:"text",name:"name",required:""},domProps:{value:t.board.name},on:{input:function(s){s.target.composing||(t.board.name=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.board.description,expression:"board.description"}],staticClass:"form-control",attrs:{placeholder:"description",type:"text",name:"description"},domProps:{value:t.board.description},on:{input:function(s){s.target.composing||(t.board.description=s.target.value)}}}),t._v(" "),t._m(0)])]):t._e()],2)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"blacktext"},[e("button",{staticClass:"btn-success margins",attrs:{type:"submit"}},[t._v("Add Board")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("error"),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("draggable",{attrs:{options:{group:"lists"}}},[e("div",{attrs:{id:t.listId}},[e("div",{staticClass:"list-header"},[e("i",{staticClass:"fa fa-trash fa-md",on:{click:function(s){t.removeList(t.listId)}}})]),t._v(" "),e("div",{staticClass:"list-body"},[e("h3",{staticClass:"list-text-color"},[t._v(t._s(t.name))]),t._v(" "),t.description?e("div",[e("p",{staticClass:"list-text-color"},[t._v("Description: "+t._s(t.description))])]):t._e(),t._v(" "),e("button",{staticClass:"btn-success btn-xs margin",on:{click:t.toggleTaskForm}},[t._v("New Task")]),t._v(" "),t.showAddTaskForm?e("div",{staticClass:"create-task"},[e("form",{on:{submit:function(s){s.preventDefault(),t.createTask(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],staticClass:"inline",attrs:{size:"15",type:"text",name:"name",placeholder:"name",required:""},domProps:{value:t.task.name},on:{input:function(s){s.target.composing||(t.task.name=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn-xs btn-success",attrs:{type:"submit"}},[t._v("Add")])])])]):t._e()]),t._v(" "),e("div",{staticClass:"list-footer"},t._l(t.tasks,function(s){return e("div",{staticClass:"the-task"},[e("task",{attrs:{name:s.name,description:s.description,taskId:s._id,listId:t.listId,boardId:t.boardId,newListId:t.newListId}})],1)}))])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.error.message?e("div",[t._v(" \n  Error: "+t._s(t.error)+"\n")]):t._e()},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board container-fluid"},[e("div",{staticClass:"boardHeaderC container"},[e("div",{staticClass:"boardheader"},[e("h2",[t._v(t._s(t.board.name))]),t._v(" "),t.board.description?e("h4",{staticClass:"board-description"},[t._v("Description: "+t._s(t.board.description))]):t._e(),t._v(" "),e("button",{staticClass:"btn-success",on:{click:t.toggleListForm}},[t._v("New List")])])]),t._v(" "),t.showAddListForm?e("div",{staticClass:"createList"},[e("form",{on:{submit:function(s){s.preventDefault(),t.createList(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.name,expression:"list.name"}],attrs:{type:"text",name:"name",placeholder:"name",required:""},domProps:{value:t.list.name},on:{input:function(s){s.target.composing||(t.list.name=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.description,expression:"list.description"}],attrs:{type:"text",name:"description",placeholder:"description"},domProps:{value:t.list.description},on:{input:function(s){s.target.composing||(t.list.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"submit"}},[t._v("add")])])]):t._e(),t._v(" "),e("div",{staticClass:"row dalists"},t._l(t.lists,function(s){return e("div",{staticClass:"drawList col-sm-3"},[e("list",{staticClass:"list",attrs:{name:s.name,description:s.description,listId:s._id,boardId:t.board._id}})],1)}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"top container"},[e("div",{staticClass:"loginbox"},[e("div",{staticClass:"login"},[t._m(1),t._v(" "),e("form",{staticClass:"form-horizontal",on:{submit:function(s){s.preventDefault(),t.userLogin(s)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputEmail"}},[t._v("Email")]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"email",id:"inputEmail3",placeholder:"Email",size:"35"},domProps:{value:t.login.email},on:{input:function(s){s.target.composing||(t.login.email=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",id:"inputPassword",placeholder:"Password",size:"35"},domProps:{value:t.login.password},on:{input:function(s){s.target.composing||(t.login.password=s.target.value)}}})])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"myModalHorizontal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(5),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputName"}},[t._v("Full Name")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.name,expression:"register.name"}],staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"Name"},domProps:{value:t.register.name},on:{input:function(s){s.target.composing||(t.register.name=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputEmail"}},[t._v("Email")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email"},domProps:{value:t.register.email},on:{input:function(s){s.target.composing||(t.register.email=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password"},domProps:{value:t.register.password},on:{input:function(s){s.target.composing||(t.register.password=s.target.value)}}})])]),t._v(" "),t._m(6),t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-offset-2 col-sm-10"},[e("button",{staticClass:"btn btn-default",attrs:{"data-dismiss":"modal"},on:{click:t.userRegister}},[t._v("Register Me")])])])])])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("h1",[t._v("Welcome to Kanban")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header container"},[e("h3",[t._v("Login:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-10"},[e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v(" Remember me\n                                ")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"form-group"},[e("div",{staticClass:" col-sm-12"},[e("button",{staticClass:"btn btn-default text-center",attrs:{type:"submit"}},[t._v("Sign in")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"registerhere"},[e("p",{staticClass:"action",attrs:{"data-toggle":"modal","data-target":"#myModalHorizontal"}},[t._v("Don't have an account? Register here.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Close")])]),t._v(" "),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("\n                        User Register\n                    ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"col-sm-offset-2 col-sm-10"},[e("div",{staticClass:"checkbox"},[e("label",[e("input",{attrs:{type:"checkbox"}}),t._v(" Remember me\n                                    ")])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("draggable",{attrs:{options:{group:"tasks"}},on:{end:function(s){t.moveTaskToDifferentList(t.lists[this._id])}}},[e("div",{staticClass:"comment-container"},[e("div",{staticClass:"tasks open-comments"},[e("p",{staticClass:"taskTitle",on:{click:function(s){t.commentsSeen=!t.commentsSeen}}},[e("b",[t._v("Task: ")]),t._v(t._s(t.name)+"\n                "),e("i",{staticClass:"fa fa-trash float",on:{click:t.removeTask}})]),t._l(t.comments,function(s){return t.commentsSeen?e("div",{staticClass:"comments"},[e("p",[t._v(t._s(s.description)+"\n                        "),e("i",{staticClass:"fa fa-minus",on:{click:function(e){t.removeComment(s._id)}}})])]):t._e()}),t._v(" "),t.commentsSeen?e("p",{staticClass:"add-comment",on:{click:t.toggleCommentForm}},[t._v("Add Comment "),e("span",{staticClass:"fa fa-plus"})]):t._e(),t._v(" "),e("p")],2),t._v(" "),t.showCommentForm?e("div",{staticClass:"commentForm"},[e("div",{staticClass:"newComment"},[e("form",{on:{submit:function(s){s.preventDefault(),t.newComment(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.description,expression:"comment.description"}],attrs:{placeholder:"comment",name:"description",type:"text",size:"10"},domProps:{value:t.comment.description},on:{input:function(s){s.target.composing||(t.comment.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn-success btn-xs",attrs:{type:"submit"}},[t._v("Add")])])])])]):t._e(),t._v(" "),e("div",{staticClass:"the-lists"},[e("form",{on:{change:t.moveTaskToDifferentList}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.formOption,expression:"formOption"}],attrs:{name:"select list"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.formOption=s.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Select List")]),t._v(" "),t._l(t.lists,function(s){return e("option",{domProps:{value:s._id}},[t._v(t._s(s.name))])})],2)])])])])},staticRenderFns:[]}},,,,,,function(t,s){}],[65]);
//# sourceMappingURL=app.be3f3d0ad10358f7a9a3.js.map