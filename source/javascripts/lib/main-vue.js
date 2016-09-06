(() => {
  Vue.use(Vuex)

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
      return state.comments.map(comment => {
        return comment + 'wut'
      })
    }
  }

  const store = new Vuex.Store({
    state,
    mutations
  })

  const App = window.vueGl.App
  const App2 = window.vueGl.App2

  new Vue({
    el: '.spa',
    store,
    components: {
      App,
      App2
    }
  })
})()
