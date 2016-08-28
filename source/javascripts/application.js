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
      console.log(i);
    }
  }
})