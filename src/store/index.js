import Vue from 'vue'
import Vuex from 'vuex'

import http from 'axios'
import api from '@/api'

Vue.use(Vuex)

const state = {
  userinfo: {}
}
const actions = {
  add ({commit}, userObj) {
    // 先判断用户名是否注册过
    let url = api.host + 'add.php?user=' + userObj.username + '&pass=' + userObj.pass
    return http.get(url)
      .then(res => {
        let data = res.data
        userObj.uid = data.uid
        if (!data.err) {
          commit('ADD', userObj)
        }
        return data
      })
  },
  login ({commit}, userObj) {
    let url = api.host + 'login.php'
    // console.log(userObj)
    return http.get(url, {
      params: {
        user: userObj.username,
        pass: userObj.pass
      }
    })
      .then(res => {
        console.log(res.data)
        userObj.uid = res.data.uid
        commit('LOGIN', userObj)
        return res.data
      })
  },
  getTodos (store) {

    let url = api.host + 'getTodos.php'
    return http.get(url, {
      params: {
        uid: store.state.userinfo.uid
      }
    })
      .then(res => {
        console.log(res.data)
      })
  },
  addTodo (store, todo) {
    let url = api.host + 'add_todo.php'
    return http.get(url, {
      params: {
        todo: todo,
        uid: store.state.userinfo.uid
      }
    })
      .then(res => {
        console.log(res.data)
        return res.data
      })
  }
}
const mutations = {
  ADD (state, userObj) {
    state.userinfo = userObj
  },
  LOGIN (state, userObj) {
    state.userinfo = userObj
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})