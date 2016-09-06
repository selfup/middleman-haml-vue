const state = {
  message: 'Veux/Vue.js!',
  comments: [
    "wow",
    "ok",
    "nice"
  ],
  commentsTwo: [
    "wow from second app",
    "ok from second app",
    "nice from second app"
  ]
}

const mutations = {
  INCREMENT (state) {
    state.comments = state.comments.map(comment => {
      return comment + 'wut'
    })
  },
  INCREMENT_TWO (state) {
    state.commentsTwo = state.commentsTwo.map(comment => {
      return comment + 'wut'
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

new Vue({
  el: '.spa',
  store
})
