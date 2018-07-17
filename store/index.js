import user from './user'

// const store = () => ({
//   modules: {
//     user
//   }
// })

// // const store = {
// //   modules: {
// //     user
// //   }
// // }

// export default store

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user
    }
  })
}

export default createStore
