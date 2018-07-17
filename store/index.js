import firebase, { db } from '../services/firebase'
console.log(db.ref('users'))

import user from './user'

const store = {
  modules: {
    user
  }
}

export default store
