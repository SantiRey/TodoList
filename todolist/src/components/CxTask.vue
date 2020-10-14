<template>
  <form @submit.prevent="addNewTodo" class="w-full m-6 flex items-center flex-col text-gray-700">
      <label class="flex text-3xl text-gray-800 border-b-2 w-56 "> 
          <h4 class="flex-1 text-center"> New Todo</h4>
      </label>
      <input class="shadow border-solid border-2 m-2 flex" 
      type="text" v-model='newTodo' name="newTodo">
      <button class="flex bg-blue-200 border-solid border-2 rounded">add new Todo</button>
     <h1>preview: {{newTodo}}</h1>
  </form>
</template>

<script>
//import {ref} from 'vue';

export default {
    
    name:'CxTask',
    
    data(){
        return{
            newTodo:"",
        }
    },    
    methods:{
        addNewTodo(){
            console.log('New Todo Sunmited');
        }
    }
}
</script>

<style>

</style>