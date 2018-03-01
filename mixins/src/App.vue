<template>
   <div class="container">
      <div class="row">
         <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Filters & Mixins</h1>
            <!-- Exercise 1) -->
            <!-- Build a local Filter which reverses the Text it is applied on -->
            <span>{{ text1_reversed }}</span>
            <hr>
            <!-- Exercise 2 -->
            <!-- Build a global Filter which counts the length of a word and it appends it -->
            <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
            <span>{{ text2_length }}</span>
            <!-- Exercise 3 -->
            <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

            <!-- Exercise 4 -->
            <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
         </div>
      </div>
   </div>
</template>

<script>
   import lengthMixin from './mixins/length';

   export default {
      data: () => ({
         text1: 'I am text',
         text2: 'I am more text. Hello world.'
      }),
      computed: {
         text1_reversed: function() {
            return this.text1.split('').reverse().join('');
         }
      },
      mixins: [ lengthMixin ]
   }
</script>

<style>
</style>
