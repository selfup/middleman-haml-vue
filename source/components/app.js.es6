((vueGl) => {
  vueGl.App = Vue.extend({
    template: `
      <haml></haml>
      <section class="app fade-in" v-cloak>
        <h2>{{ message }}</h2>
        <comments :comments='comments'></comments>
      </section>
    `,
    data() {
      return {
        message: 'Vue.js!',
        comments: [
          "wow",
          "ok",
          "nice"
        ]
      }
    }
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('app', vueGl.App)
