(vueGl => {
  vueGl.commentsTwo = (state, action) => {
    if (typeof state === 'undefined') return [
      "wow from second app",
      "ok from second app",
      "nice from second app"
    ]

    switch (action.type) {
      default:
        return state
    }
  }
})(window.vueGl || (window.vueGl = {}))
