new Vue({
  el: '#exercise',
  data: {
    effectClass: '',
    classA: 'classA',
    classB: 'classB',
    classC: 'classC',
    userInput: 'small',
    prob4: '',
    prob4bool: '',
    prob5: '',
    dynamic_width: 0
  },
  computed: {
    width_in_px: function() {
      return this.dynamic_width + 'px';
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      vm.effectClass = 'highlight';

      setInterval(function() {
        if ( vm.effectClass === 'highlight' ) {
          vm.effectClass = 'shrink';
        } else if ( vm.effectClass === 'shrink' ) {
          vm.effectClass = 'highlight';
        }
      }, 2000);
    },
    startProgress: function() {
      var vm = this;
      var theInterval = setInterval(function() {
        if ( vm.dynamic_width < 300 ) {
          vm.dynamic_width += 10;
        } else {
          clearInterval( theInterval );
        }
        console.log('Dynamic Width is now:', vm.dynamic_width);
      }, 500);


    }
  }
});
