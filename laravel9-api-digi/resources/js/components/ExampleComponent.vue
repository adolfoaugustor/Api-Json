<template>

   <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
      <h1>Teste Laravel - vaga Fullstack!</h1>
      <h5>{{title}}</h5>

      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
         <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
            <select name="cars" id="cars">
               <option value="volvo">Volvo</option>
               <option value="saab">Saab</option>
            </select> | 
            <select name="cars" id="cars">
               <option value="volvo">Volvo</option>
               <option value="saab">Saab</option>
            </select> | 
            <select name="cars" id="cars">
               <option value="volvo">Volvo</option>
               <option value="saab">Saab</option>
            </select> | 
            <button type="button">Ver Dados</button>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      setup: () => ({
         title: "teste de title"
      })
   }
</script>
