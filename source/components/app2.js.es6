((vueGl) => {
  vueGl.App2 = Vue.extend({
    template: `
      <haml></haml>
      <section class="app fade-in" v-cloak>
        <h2>{{ message }}</h2>
        <comments :comments='comments'></comments>
        <a href="/" class='btn btn-success'>Back to Main App</a>
      </section>
    `,
    vuex: {
     getters: {
       message: state => state.message,
       comments: state => state.commentsTwo
     }
    }
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('second-app', vueGl.App2)
