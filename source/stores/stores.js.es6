(vueGl => {
  vueGl.commentsStore = Redux.createStore(vueGl.comments)
  vueGl.commentsTwoStore = Redux.createStore(vueGl.commentsTwo)
})(window.vueGl || (window.vueGl = {}))