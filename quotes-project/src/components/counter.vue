<template>
  <div id="counter__parent">
    <h3>Quotes Added</h3>
    <div id="quote-progress-bar">
      <div id="quote-progress" :style="{ width: progressWidth }">
        <span>{{ num }} / 10</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      num: {
        type: Number,
        required: true
      },
      progressWidth: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  #quote-progress-bar {
    width: 100%;
    height: 30px;
    border-radius: 3px;
    background-color: #F2F2F2;
  }

  #quote-progress {
    height: 100%;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5B37A9;
  }

  #quote-progress span {
    color: white;
  }
</style>

