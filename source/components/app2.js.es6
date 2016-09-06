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
    data() {
      return {
        message: 'Vue.js!',
        comments: [
          "wow from second app",
          "ok from second app",
          "nice from second app"
        ]
      }
    }
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('second-app', vueGl.App2)