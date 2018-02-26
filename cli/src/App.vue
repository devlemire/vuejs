<template>
<!-- eslint-disable -->
<div id="app">
  <section class="row">
    <div class="small-6 columns">
      <h1 class="text-center">YOU</h1>
      <div class="healthbar">
        <div  class="healthbar text-center"
              style="background-color: green; margin: 0; color: white;"
              :style="{ width: health_in_percent.player }">
          <span v-if="health.player > 0">{{ health.player }}</span>
        </div>
      </div>
    </div>

    <div class="small-6 columns">
      <h1 class="text-center">MONSTER</h1>
      <div class="healthbar">
        <div  class="healthbar text-center"
              style="background-color: green; margin: 0; color: white;"
              :style="{ width: health_in_percent.monster }">
          <span v-if="health.monster > 0">{{ health.monster }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="row controls" v-if="!started">
    <div class="small-12 columns">
      <button id="start-game" @click="start">START NEW GAME</button>
    </div>
  </section>

  <section class="row controls" v-if="started">
    <div class="small-12 columns">
      <button id="attack" @click="player_methods().attack()">ATTACK</button>
      <button id="special-attack" @click="player_methods().special_attack()">SPECIAL ATTACK</button>
      <button id="heal" @click="player_methods().heal()">HEAL</button>
      <button id="give-up" @click="player_methods().give_up()">GIVE UP</button>
    </div>
  </section>

  <section class="row log log-container" v-if="started || health.player < 100 || health.monster < 100">
    <div class="small-12 columns">
      <ul>
        <li v-for="log in logs" v-bind:key="log.id" :class="[ 'log', log.class ]">{{ log.text }}</li>
      </ul>
    </div>
  </section>
</div>
</template>

<script>
/* es-lint disable */
import './foundation.min.css'
import './app.css'

export default {
  el: '#app',
  data: function() {
    return {
      started: false,
      health: {
        player: 100,
        monster: 100
      },
      logs: [
        { class: 'narrator', text: 'A wild monster appears! Kill it!', id: 0 }
      ],
      log_id: 1
    }
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
        this.reset_game()
      } else {
        this.started = true
      }
    },
    calculate_normal_hit: function() {
      return Math.floor( Math.random() * 10 ) + 1
    },
    calculate_special_hit: function() {
      return Math.floor( Math.random() * 20 ) + 10
    },
    calculate_heal_amount: function() {
      return Math.floor( Math.random() * 10 ) + 1
    },
    add_health: function( amount, health ) {
      if ( amount + health > 100 ) {
        return 100
      } else {
        return amount + health
      }
    },
    subtract_health: function( player_hit, monster_health ) {
      if ( monster_health - player_hit < 0 ) {
        return 0
      } else {
        return monster_health - player_hit
      }
    },
    push_to_log: function( css_class, text ) {
      this.logs.unshift({ class: css_class, text: text, id: this.log_id })
      this.log_id++
    },
    check_for_end: function() {
      if ( this.health.player === 0 || this.health.monster === 0 ) {
        this.started = false
      }
    },
    reset_game: function() {
      this.health.player = 100
      this.health.monster = 100
      this.logs = [ { class: 'narrator', text: 'A wild monster appears! Kill it!', id: 0 } ]
      this.started = true
    },
    end_game: function() {
      this.health.player = 100
      this.health.monster = 100
      this.logs = [ { class: 'narrator', text: 'A wild monster appears! Kill it!', id: 0 } ]
      this.started = false
    },
    player_methods: function() {
      var t = this

      var attack = function() {
        if ( t.health.monster === 0 || t.health.player === 0 ) return
        var hit = t.calculate_normal_hit()
        var health = t.subtract_health( hit, t.health.monster )
        t.health.monster = health
        t.push_to_log( 'player', `You hit the monster for ${ hit } damage!` )
        t.monster_methods().attack()
        t.check_for_end()
      }

      var special_attack = function() {
        if ( t.health.monster === 0 || t.health.player === 0 ) return
        var hit = t.calculate_special_hit()
        var health = t.subtract_health( hit, t.health.monster )
        t.health.monster = health
        t.push_to_log( 'player', `You slam the monster for a whopping ${ hit } damage!` )
        t.monster_methods().attack()
        t.check_for_end()
      }

      var heal = function() {
        if ( t.health.monster === 0 || t.health.player === 0 ) return
        var health = t.calculate_heal_amount()
        t.health.player = t.add_health( health, t.health.player )
        if ( t.health.player === 100 ) {
          t.push_to_log( 'player', `You heal yourself to maximum health!` )
        } else {
          t.push_to_log( 'player', `You heal yourself for ${ health } points` )
        }
        t.monster_methods().attack()
        t.check_for_end()
      }

      var give_up = function() {
        t.end_game()
      }

      return {
        attack: attack,
        special_attack: special_attack,
        heal: heal,
        give_up: give_up
      }
    },
    monster_methods: function() {
      var t = this

      var attack = function() {
        var hit = t.calculate_normal_hit()
        var health = t.subtract_health( hit, t.health.player )
        t.health.player = health
        t.push_to_log('monster', `The monster hit you for ${ hit } damage!`)
      }

      return {
        attack: attack
      }
    }
  }
}
</script>
