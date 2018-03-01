<template>
   <div class="container">
      <counter :num="quotes_length" :progressWidth="progress_bar_width"></counter>
      <new-quote :addQuote="addQuote"></new-quote>
      <quotes :quotes="quotes" :deleteQuote="deleteQuote"></quotes>
      <info></info>
   </div>
</template>

<script>
   import counter from './components/counter.vue';
   import info from './components/info.vue';
   import newQuote from './components/newQuote.vue';
   import quotes from './components/quotes.vue';

   export default {
      components: {
         counter,
         info,
         quotes,
         newQuote
      },
      data: () => ({
         id: 1,
         quotes: [
            { id: 0, quote: 'Hello World' }
         ]
      }),
      computed: {
         quotes_length() {
            return this.quotes.length;
         },
         progress_bar_width() {
            return this.quotes.length * 10 + '%';
         }
      },
      methods: {
         addQuote( quote ) {
            if ( this.quotes_length >= 10 ) return;
            this.quotes.push({ id: this.id, quote });
            this.id++;
         },
         deleteQuote( id ) {
            const index = this.quotes.findIndex( quote => quote.id === id );
            this.quotes.splice( index, 1 );
         }
      }
   }
</script>