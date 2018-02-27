<template>
  <div class="container">
    <my-header></my-header>

    <hr>

    <div class="row">
      <my-servers :selectServer="selectServer"></my-servers>
      <my-server-details :server="server" :toggleStatus="toggleStatus"></my-server-details>
    </div>

    <hr>

    <my-footer></my-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Servers from './components/Servers.vue';
  import ServerDetails from './components/ServerDetails.vue';
  import Footer from './components/Footer.vue';

  export default {
    data: () => ({
      server: null
    }),
    methods: {
      selectServer( server ) {
        console.log( server );
        this.server = server;
      },
      toggleStatus( server ) {
        if ( server.status === 'Online' ) {
          this.server.status = 'Offline';
        } else {
          this.server.status = 'Online'
        }
      }
    },
    components: {
      'my-header': Header,
      'my-servers': Servers,
      'my-server-details': ServerDetails,
      'my-footer': Footer
    }
  }
</script>

<style>
</style>
