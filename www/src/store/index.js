import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [],
    activeBoard: {},
    activeLists: [],
    activeTasks: {},
    activeComments: {},
    error: {},
    user: {}
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      console.log('setUser: ', data)
      console.log("User: ", state.user)
    },
    setBoards(state, data) {
      state.boards = data
    },
    handleError(state, err) {
      state.error = err
    },
    setActiveBoard(state, payload) {
      state.activeBoard = payload
    },
    setActiveLists(state, lists) {
      state.activeLists = lists
    },
    setActiveTasks(state, payload) {
      vue.set(state.activeTasks, payload.listId, payload.task)
    },
    setActiveComments(state, payload) {
      vue.set(state.activeComments, payload.taskId, payload.comment)
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts//

    //--------BOARDS-----------//
    getBoards({ commit, dispatch }) {
      api('userboards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getBoard({ commit, dispatch }, payload) {
      api('boards/' + payload.boardId)
        .then(res => {
          commit('setActiveBoard', res.data.data)
          dispatch('getLists', res.data.data._id)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createBoard({ commit, dispatch }, board) {
      api.post('boards/', board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeBoard({ commit, dispatch }, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^^BOARDS^^^^^^^^^^^^^^^^^//




    //-------------LISTS-------------------//
    getLists({ commit, dispatch }, id) {
      api('boards/' + id + '/lists')
        .then(res => {
          commit('setActiveLists', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createList({ commit, dispatch }, payload) {
      api.post('lists/', payload.list)
        .then(res => {
          dispatch('getLists', payload.list.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeList({ commit, dispatch }, payload) {
      api.delete('lists/' + payload.listId)
        .then(res => {
          dispatch('getLists', payload.boardId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^LISTS^^^^^^^^^^^^^^^^^^//



    //-------------TASKS-----------------//
    getTasks({ commit, dispatch }, payload) {
      api('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks')
        .then(res => {
          commit('setActiveTasks', { task: res.data.data, listId: payload.listId })
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    // createTask({ commit, dispatch }, payload) {
    //   // payload.newTask.listId = payload.listId
    //   api.post('tasks', payload.newTask)
    //     .then(res => {
    //       dispatch('getTasks', {listId:payload.listId, boardId:payload.boardId })
    //     })
    //     .catch(err => {
    //       commit('handleError', err)
    //     })
    // },
    createTask({ commit, dispatch }, payload) {
      api.post('/tasks', payload.task)
        .then(res => {
          dispatch('getTasks', payload.task)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    moveTaskToDifferentList({ commit, dispatch }, payload) {

      api.put('tasks/' + payload.taskId, {
        listId: payload.listId
      })
        .then(res => {
          dispatch('getTasks', payload)
          dispatch('getTasks', { listId: payload.oldListId, boardId: payload.boardId })
          //getTasks?
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeTask({ commit, dispatch }, payload) {
      api.delete('tasks/' + payload.taskId)
        .then(res => {
          dispatch('getTasks', payload)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^TASKS^^^^^^^^^^^^^^^^^//



    // 'boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + 
    //------------COMMENTS--------------//
    getComments({ commit, dispatch }, payload) {
      api('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + '/comments')
        .then(res => {

          commit('setActiveComments', { comment: res.data.data, taskId: payload.taskId })
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    newComment({ commit, dispatch }, payload) {
      api.post('/comments', payload.comment)
        .then(res => {

          dispatch('getComments', payload.comment)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeComment({ commit, dispatch }, payload) {
      api.delete('comments/' + payload.commentId)
        .then(res => {
          dispatch('getComments', payload)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^COMMENTS^^^^^^^^^^^^^^//



    //---------LOGIN/REGISTER/LOGOUT-----------//
    userLogin({ commit, dispatch }, login) {
      auth.post('login', login)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Boards' })
        })
        .catch(() => {
          router.push({ name: "Login" })
        })
    },
    userRegister({ commit, dispatch }, register) {
      auth.post('register', register)
        .then(res => {
          commit('setUser', res.data.data)
          router.push({ name: 'Boards' })
        })
        .catch(err => {
          commit('handleError', err)
          router.push({ name: "Login" })
        })
    },
    authenticate({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          // if (!res.data.data) {
          //   router.push({ name: "Login" })
          // }
          commit('setUser', res.data.data)
          router.push({ name: 'Boards' })
        })
        .catch(() => {
          router.push({ name: "Login" })
        })
    },
    logout({ commit, dispatch }, user) {
      auth.delete('logout')
        .then(res => {
          console.log(res)
          dispatch('authenticate')
          // router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
          res.status(401).send({ Error: err })
        })
    },
    //^^^^^^^^^^^^^^USER/REGISTER/LOGOUT^^^^^^^^^^^//

    handleError({ commit, dispatch }, err) {
      commit('handleError', err)
    }
  }
})


export default store
