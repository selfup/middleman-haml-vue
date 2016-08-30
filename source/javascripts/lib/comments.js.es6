const Comments = Vue.extend({
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

Vue.component('comments', Comments)