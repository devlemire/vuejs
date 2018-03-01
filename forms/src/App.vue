<template>
   <div class="container">
      <form class="form-horizontal col-xs-12" v-if="!submitted">
         <div class="form-group">
            <span class="col-xs-2">Full Name:</span>
            <name-input v-model="formData.fullName"></name-input>
         </div>

         <div class="form-group">
            <span class="col-xs-2">Email</span>
            <input class="col-xs-5" v-model="formData.email" />
         </div>

         <div class="form-group">
            <span class="col-xs-2">Password</span>
            <input class="col-xs-5" v-model="formData.password" />
         </div>

         <div class="form-group">
            <span class="col-xs-2">Store Data?</span>
            <input id="s_radio1" type="radio" value="yes" v-model="formData.storeData" />
            <label for="s_radio1">Yes</label>
            <input id="s_radio2" type="radio" value="no" v-model="formData.storeData" />
            <label for="s_radio2">No</label>
         </div>

         <button @click.prevent="submitted = true" class="btn btn-primary">Submit</button>
      </form>

      <hr>

      <div class="row" v-if="submitted">
         <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h4>Your Data</h4>
               </div>
               <div class="panel-body">
                  <p>Full Name: {{ formData.fullName }}</p>
                  <p>Mail: {{ formData.email }}</p>
                  <p>Password: {{ formData.password }}</p>
                  <p>Store in Database?: {{ formData.storeData }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import NameInput from './Name.vue';

   export default {
      data: () => ({
         formData: {
            fullName: '',
            email: '',
            password: '',
            storeData: 'yes'
         },
         submitted: false
      }),
      components: {
         nameInput: NameInput
      }
   }
</script>

<style scoped>
   form {
      margin-top: 30px;
   }
</style>
