import firebase, { db } from '@/services/firebase'
const Users = db.ref('users')

export const state = () => ({
  user: []
})

// triger database in getter
const getters = {
}

const actions = {
  addProfile ({commit}, form) {
    console.log(form)
    Users.push(form)
    // commit('FIREBASE_PUSH_DATA', form)
  }
}

const mutations = {
  // FIREBASE_PUSH_DATA (state, payload) {
  //   Users.on('child_added', (data) => {
  //     let item = data.val()
  //     item.id = data.key
  //     store.users.push(item)
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
