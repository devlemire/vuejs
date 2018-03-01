<template>
  <input class="col-xs-5" :value="value" @input="update( $event.target.value )" />
</template>

<script>
   export default {
      props: [ 'value' ],
      methods: {
         update( val ) {
            console.log('Updated called with', val);
            this.$emit('input', val);
         }
      }
   }
</script>