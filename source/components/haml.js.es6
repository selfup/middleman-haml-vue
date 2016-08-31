((vueGl) => {
  vueGl.Haml = Vue.extend({
    template: `<h1>HAML and:</h1>`
  })
})(window.vueGl || (window.vueGl = {}))

Vue.component('Haml', vueGl.Haml)