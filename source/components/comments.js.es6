((vueGl) => {
  vueGl.Comments = Vue.extend({
    props: ['comments', 'addindex'],
    template: `
      <section class="comments">
        <article class="comment" v-for="comment in comments">
          <h4 @click='addindex($index)'>{{ comment }}</h4>
        </article>
      </section>
    `
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('comments', vueGl.Comments)
