<template>
  <div>
    <ul>
      <li v-for="quote in quotes"
          :key="quote.id"
          @click="deleteQuote( quote.id )">
        <span>{{ quote.quote }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      quotes: {
        type: Array,
        required: true
      },
      deleteQuote: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    min-height: 100px;
    margin-top: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 30px;
    border: 1px solid #F2F2F2;
    display: inline-block;
    margin: 15px;
    width: 190px;
    font-family: monospace;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: 250ms;
  }

  li:hover {
    background-color: #f7a6a6;
    cursor: pointer;
  }
</style>


