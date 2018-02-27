<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item"
          v-for="server in servers"
          :key="server.id">
        The <b @click="selectServer( server )">{{ server.name }}</b> server is currently <i :class="{ online: server.status === 'Online', offline: server.status === 'Offline' }">{{ server.status }}.</i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      selectServer: {
        type: Function,
        required: true
      }
    },
    data: () => ({
      servers: [
        { id: 0, name: 'Chicago', status: 'Online' },
        { id: 1, name: 'Daytona Beach', status: 'Online' },
        { id: 2, name: 'Denver', status: 'Online' }
      ]
    })
  }
</script>

<style scoped>
  .online {
    color: lightgreen;
  }

  .offline {
    color: red;
  }
</style>