new Vue({
  el: '#exercise',
  data: {
    name: 'James Lemire',
    age: 20,
    image: 'http://via.placeholder.com/350x150'
  },
  methods: {
    randomNumber: function() {
      return Math.random();
    }
  }
});