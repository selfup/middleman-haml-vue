new Vue({
  el: '#app',
  data: {
    message: 'Vue.js!',
    comments: [
      "wow",
      "ok",
      "nice"
    ]
  },
  methods: {
    logIndex(i) {
      const es6 = `this is es6`
      console.log(i, es6)
    }
  }
})