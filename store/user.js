import firebase, { db } from '@/services/firebase'
const Users = db.ref('users')


const state = {
  users: []
}

// triger database in getter
const getters = {
}

const actions = {
  addProfile ({commit}, form) {
    Users.push(form)
    commit('FIREBASE_PUSH_DATA', form)
  }
}

const mutations = {
  FIREBASE_PUSH_DATA (state, payload) {
    // db.collection('users').get().then((snapshot) => {
    //   console.log(snapshot)
    // })
    console.log(db)
    state.users.push(payload)
    // Users.on('child_added', (data) => {
    //   let item = data.val()
    //   item.id = data.key
    //   store.users.push(item)
    // })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
