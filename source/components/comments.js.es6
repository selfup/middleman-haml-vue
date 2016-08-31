((vueGl) => {
  vueGl.Comments = Vue.extend({
    template: `
      <section class="comments">
        <article class="comment" v-for="comment in comments">
          <h4 v-on:click=logindex($index)>{{ comment }}</h4>
        </article>
      </section>
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
