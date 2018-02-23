new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    showAlert: function () {
      alert("Alert");
    },
    updateValue: function( e ) {
      this.value = e.target.value;
    }
  }
});