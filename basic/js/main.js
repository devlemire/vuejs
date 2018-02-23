new Vue({
  el: '#root',
  data: {
    title: 'Hello World!',
    link: 'https://www.google.com/',
    finishedLink: '<a href="http://www.google.com/" target="_blank">Google</a>',
    counter: 0,
    x: 0,
    y: 0,
    vuemodel: 'hello',
    result: '',
    watch_output: '',
    attachRed: false,
    attachGreen: false,
    attachBlue: false
  },
  methods: {
    sayHello: function () {
      return this.title;
    },
    increaseCounter: function( int ) {
      this.counter += int;
    },
    updateCoordinates: function( e ) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    alertMe: function() {
      alert("ALERT");
    },
    attachAll: function() {
      this.attachRed = true;
      this.attachGreen = true;
      this.attachBlue = true;
    },
    detachAll: function() {
      this.attachRed = false;
      this.attachGreen = false;
      this.attachBlue = false;
    }
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    },
    redClass: function() {
      return {
        red: this.attachRed
      };
    },
    greenClass: function() {
      return {
        green: this.attachGreen
      };
    },
    blueClass: function() {
      return {
        blue: this.attachBlue
      };
    }
  },
  watch: {
    counter: function ( next, previous ) {
      if ( previous < next ) {
        this.watch_output = "Counter was increased.";
      } else if ( next < previous ) {
        this.watch_output = "Counter was decreased";
      } else {
        this.watch_output = "Unknown action on counter";
      }
    }
  }
});