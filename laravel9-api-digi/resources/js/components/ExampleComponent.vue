<template>

   <main class="login-form">
      <div class="cotainer">
         <div class="row justify-content-center mt-5">
            <div class="col-md-8">
               <div class="card">

                  <h1>Teste Laravel - vaga Fullstack!</h1>

                  <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                     <div class="row">
                              
                        <div class="col-md-3 col-lg-3">
                           <div class="form-group">
                              <select id="direct">
                                 <option value="">select</option>
                                 <option v-for="option in directors" v-bind:value="option.id">{{ option.name }}</option>
                              </select> 
                           </div>
                        </div>
                        <div class="col-md-3 col-lg-3">
                           <div class="form-group">      
                              <select name="supervisors" id="supervisors">
                                 <option v-for="option in supervisors" v-bind:value="option.id">{{ option.name }}</option>
                              </select>
                           </div>
                        </div>
                        <div class="col-md-3 col-lg-3">
                           <div class="form-group">      
                              <select name="managers" id="managers">
                                 <option v-for="option in managers" v-bind:value="option.id">{{ option.name }}</option>
                              </select> 
                           </div>
                        </div>
                        <div class="col-md-3 col-lg-3">
                           <div class="form-group">
                              <button @click="greet">ver dados</button>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </main>
</template>

<script>
   import axios from "axios"

   export default {
      data() {
         return {
            directors: [],
            supervisors: [],
            managers:[]
         }
      },

      mounted() {       
         let vm = this;
         vm.getDirectors();
      }, 
      methods:{
         greet: function (event) {
            let value = $('#direct').val();
            this.getSupervisors(value);
         },
         
         getDirectors(){
            axios.get('http://localhost:3000/api/directors')
            .then(response => {
               this.directors = response.data
            }) 
            .catch(function (error) {
               console.log(error);
            });
         },
         getSupervisors(val){
            axios.get('http://localhost:3000/api/supervisors/'+val)
            .then(response => {
               this.supervisors = response.data
               this.getManagers(this.supervisors[0].id);
            }) 
            .catch(function (error) {
               console.log(error);
            });
         },
         getManagers(val){
            axios.get('http://localhost:3000/api/managers/'+val)
            .then(response => {
               this.managers = response.data
            }) 
            .catch(function (error) {
               console.log(error);
            });
         }
      }
   }
</script>
<style scoped>
button {
   font-size: 30px;
}
select {
   font-size: 30px;
}
</style>