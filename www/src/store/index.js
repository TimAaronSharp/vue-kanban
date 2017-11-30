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
    boards: [{ name: 'This is total rubbish' }],
    activeBoard: {},
    activeLists: [],
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
    setActiveBoard(state, board) {
      debugger
      state.activeBoard = board
    },
    setActiveLists(state, lists) {
      debugger
      state.activeLists = lists
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts

    //--------BOARDS-----------
    getBoards({ commit, dispatch }) {
      api('userboards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getBoard({ commit, dispatch }, id) {
      debugger
      api('boards/' + id)
        .then(res => {
          commit('setActiveBoard', res.data.data)
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
          this.getBoards()
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^^BOARDS^^^^^^^^^^^^^^^^^

    //-------------LISTS-------------------
    getLists({ commit, dispatch }, id) {
      api('boards/' + id + '/lists')
        .then(res => {
          debugger
          commit('setActiveLists', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    //^^^^^^^^^^^^^LISTS^^^^^^^^^^^^^^^^^^
    //-----------------LOGIN/REGISTER/LOGOUT-----------
    userLogin({ commit, dispatch }, login) {
      auth.post('login', login)
        .then(res => {
          console.log(res)
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
          console.log(res)
          //dispatch('getBoards')
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
          console.log(res)
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
    //^^^^^^^^^^^^^^USER/REGISTER/LOGOUT^^^^^^^^^^^
    handleError({ commit, dispatch }, err) {
      commit('handleError', err)
    }
  }
})


export default store
