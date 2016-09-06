(vueGl => {
  vueGl.comments = (state, action) => {
    if (typeof state === 'undefined') return {
        message: 'Vue.js!',
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
