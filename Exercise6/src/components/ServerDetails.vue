<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="server === null">Please select a server</p>
    <template v-else>
      <h1>{{ server.name }}</h1>
      <button @click="toggleStatus( server )">Toggle Status</button>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      server: [ Object, null ],
      toggleStatus: {
        type: Function,
        required: true
      }
    }
  }
</script>