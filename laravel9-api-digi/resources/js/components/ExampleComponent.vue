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
                              <select id="direct" @change="getSupervisors">
                                 <option value="">select</option>
                                 <option v-for="option in directors" v-bind:value="option.id">{{ option.name }}</option>
                              </select> 
                           </div>
                        </div>
                        <div class="col-md-3 col-lg-3">
                           <div class="form-group">      
                              <select name="supervisors" id="supervisors" @change="getManagers">
                                 <option value="">select</option>
                                 <option v-for="option in supervisors" v-bind:value="option.id">{{ option.name }}</option>
                              </select>
                           </div>
                        </div>
                        <div class="col-md-3 col-lg-3">
                           <div class="form-group">      
                              <select name="managers" id="managers">
                                 <option value="">select</option>
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
                     <row>
                        <div class="col-md-12 col-lg-12">
                           {{values[0]}}<br>
                           {{values[1]}}<br>
                           {{values[2]}}<br>
                        </div>
                     </row>
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
            managers:[],
            values:[]
         }
      },

      mounted() {       
         let vm = this;
         vm.getDirectors();
      }, 
      methods:{
         greet: function (event) {
            return this.values = [this.directors, this.supervisors, this.managers];
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
         getSupervisors(event){
            let val = event.target.value;
            axios.get('http://localhost:3000/api/supervisors/'+val)
            .then(response => {
               this.supervisors = response.data
            }) 
            .catch(function (error) {
               console.log(error);
            });
         },
         getManagers(event){
            let val = event.target.value;
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