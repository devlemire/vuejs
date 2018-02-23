new Vue({
  el: '#app',
  data: {
    started: false,
    health: {
      player: 100,
      monster: 100
    },
    logs: [
      { class: 'narrator', text: 'A wild monster appears! Kill it!' }
    ]
  },
  computed: {
    health_in_percent: function() {
      return {
        player: this.health.player + '%',
        monster: this.health.monster + '%'
      }
    }
  },
  methods: {
    start: function() {
      if ( this.health.player < 100 || this.health.monster < 100 ) {
        this.reset_game();
      } else {
        this.started = true;
      }
    },
    calculate_normal_hit: function() {
      return Math.floor( Math.random() * 10 ) + 1;
    },
    calculate_special_hit: function() {
      return Math.floor( Math.random() * 20 ) + 10;
    },
    calculate_heal_amount: function() {
      return Math.floor( Math.random() * 10 ) + 1;
    },
    add_health: function( amount, health ) {
      if ( amount + health > 100 ) {
        return 100;
      } else {
        return amount + health;
      }
    },
    subtract_health: function( player_hit, monster_health ) {
      if ( monster_health - player_hit < 0 ) {
        return 0;
      } else {
        return monster_health - player_hit;
      }
    },
    push_to_log: function( css_class, text ) {
      this.logs.unshift({ class: css_class, text: text });
    },
    check_for_end: function() {
      if ( this.health.player === 0 || this.health.monster === 0 ) {
        this.started = false;
      }
    },
    reset_game: function() {
      this.health.player = 100;
      this.health.monster = 100;
      this.logs = [ { class: 'narrator', text: 'A wild monster appears! Kill it!' } ];
      this.started = true;
    },
    end_game: function() {
      this.health.player = 100;
      this.health.monster = 100;
      this.logs = [ { class: 'narrator', text: 'A wild monster appears! Kill it!' } ];
      this.started = false;
    },
    player_methods: function() {
      var t = this;

      var attack = function() {
        if ( t.health.monster === 0 || t.health.player === 0 ) return;
        var hit = t.calculate_normal_hit();
        var health = t.subtract_health( hit, t.health.monster );
        t.health.monster = health;
        t.push_to_log( 'player', `You hit the monster for ${ hit } damage!` );
        t.monster_methods().attack();
        t.check_for_end();
      }

      var special_attack = function() {
        if ( t.health.monster === 0 || t.health.player === 0 ) return;
        var hit = t.calculate_special_hit();
        var health = t.subtract_health( hit, t.health.monster );
        t.health.monster = health;
        t.push_to_log( 'player', `You slam the monster for a whopping ${ hit } damage!` );
        t.monster_methods().attack();
        t.check_for_end();
      }

      var heal = function() {
        if ( t.health.monster === 0 || t.health.player === 0 ) return;
        var health = t.calculate_heal_amount();
        t.health.player = t.add_health( health, t.health.player );
        if ( t.health.player === 100 ) {
          t.push_to_log( 'player', `You heal yourself to maximum health!` );
        } else {
          t.push_to_log( 'player', `You heal yourself for ${ health } points` );
        }
        t.monster_methods().attack();
        t.check_for_end();
      }

      var give_up = function() {
        t.end_game();
      }

      return {
        attack: attack,
        special_attack: special_attack,
        heal: heal,
        give_up: give_up
      }
    },
    monster_methods: function() {
      var t = this;

      var attack = function() {
        var hit = t.calculate_normal_hit();
        var health = t.subtract_health( hit, t.health.player );
        t.health.player = health;
        t.push_to_log( 'monster', `The monster hit you for ${ hit } damage!` );
      }

      return {
        attack: attack
      }
    }
  }
})