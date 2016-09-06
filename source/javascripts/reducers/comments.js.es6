(vueGl => {
  vueGl.comments = (state, action) => {
    if (!state) return {
        message: 'Redux/Vue.js!',
        comments: [
          "wow",
          "ok",
          "nice"
        ]
    }

    switch (action.type) {
      default:
        return state
    }
  }
})(window.vueGl || (window.vueGl = {}))
