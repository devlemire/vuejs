new Vue({
  el: '#root',
  data: {
    title: 'Hello World!'
  },
  methods: {
    changeTitle: function ( e ) {
      this.title = e.target.value;
    }
  }
});