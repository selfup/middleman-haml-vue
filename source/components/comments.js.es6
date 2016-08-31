((vueGl) => {
  vueGl.Comments = Vue.extend({
    template: `
      <div class="comments">
        <div class="comment" v-for="comment in comments">
          <h4 v-on:click=logindex($index)>{{ comment }}</h4>
        </div>
      </div>
    `,
    data() {
      return {
        comments: [
          "wow",
          "ok",
          "nice"
        ]
      }
    }
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('comments', vueGl.Comments)
