<template>
   <div class="container">
      <div class="row">
         <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Directives Exercise</h1>
            <h3>{{ count }}</h3>
            <hr>
            <button v-myon:click="{ fn: add, arg: 1 }">+1</button>
            <button v-myon:click="{ fn: add, arg: 5 }">+5</button>
            <button v-myon:click="{ fn: add, arg: 10 }">+10</button>
            <hr>
            <button v-myon:click="{ fn: add, arg: -1 }">-1</button>
            <button v-myon:click="{ fn: add, arg: -5 }">-5</button>
            <button v-myon:click="{ fn: add, arg: -10 }">-10</button>
         </div>
      </div>
   </div>
</template>

<script>
    export default {
      data: () => ({
         count: 0
      }),
      methods: {
         add( amount ) {
            this.count += amount;
         }
      },
      directives: {
         myon: {
            bind: ( el, bindings, vnode ) => {
               console.log('updated');
               console.log( bindings );
               el.onclick = () => bindings.value.fn( bindings.value.arg );
            }
         }
      }
    }
</script>

<style>
</style>
