((vueGl) => {
  vueGl.App = Vue.extend({
    template: `
      <haml></haml>
      <div class="app fade-in" v-cloak>
        <h2>{{ message }}</h2>
        <comments></comments>
      </div>
    `,
    data() {
      return {
        message: 'Vue.js!',
      }
    },
    methods: {
      logIndex(i) {
        console.log(i)
      }
    }
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('app', vueGl.App)
