<template>
  <div class="flex" >
      <div class="flex-col shadow m-auto mt-6">
        <form @submit.prevent="login" class="shadow-lg flex-col p-6 ">
            <h2 class="text-orange-400 m-auto text-center text-3xl py-2">Login</h2>
            <input 
            class="flex mb-3 m-auto py-3 border-solid border-2 px-4 rounded" 
            type="text" placeholder="New task Name" v-model="name">
            <input 
            class="flex m-auto py-3 border-solid border-2 px-4 rounded" 
            type="password" placeholder="New task Password" v-model="password">
        </form>
        <h4 class="flex text-gray-500">preview</h4>
        <h4 class="flex text-gray-500">Name: {{name}}</h4>
         <h4 class="flex text-gray-500">Password: {{password}}</h4>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        name:"",
        password:"",
    }
}
}
</script>

<style>

</style>