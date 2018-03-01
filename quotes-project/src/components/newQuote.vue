<template>
  <div id="newQuote__container">
    <div id="newQuote__work-area">
      <h4>Quote</h4>
      <textarea v-model="quote"></textarea>
      <button @click="submitQuote" class="btn btn-primary">Add Quote</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      addQuote: {
        type: Function,
        required: true
      }
    },
    data: () => ({
      quote: ''
    }),
    methods: {
      submitQuote() {
        this.addQuote( this.quote );
        this.quote = '';
      }
    }
  }
</script>

<style scoped>
  #newQuote__container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }

  #newQuote__work-area {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  #newQuote__work-area textarea {
    width: 100%;
    height: 100px;
    border-radius: 3px;
  }

  #newQuote__work-area button {
    margin: 0 auto;
    margin-top: 15px;
  }
</style>
