<template>
  <form @submit.prevent="addNewTodo" class="w-full m-6 flex items-center flex-col text-gray-700">
      <label class="flex text-3xl text-gray-800 border-b-4 mb-8 shadow-botton w-64 "> 
          <h4 class="flex-1 text-center text-gray-500  font-semibold  text-5xl"> New Todo</h4>
      </label>
      <div class="w-full border-solid border-2 shadow p-6 flex items-center flex-col text-gray-700">
      <div class="text-xl text-orange-400"> Task-Name:</div>
      <input class="shadow rounded-full border-solid border-2 px-4 m-2 flex" 
      type="text" v-model='newTodo' name="newTodo"  placeholder="New task Name" />
      <div class="text-xl mt-4 text-orange-400"> User-ID:</div>
      <input class="shadow rounded-full border-solid border-2 m-2 px-4 flex" 
      type="text" v-model='userID' name="newTodo"  placeholder="User Id" />
      <button class="flex bg-blue-200 rounded-full border-solid border-2 px-4 py-2 hover:bg-blue-400 shadow rounded">add new Todo</button>
      </div>
        <label class="flex text-3xl text-gray-800 border-b-4 mb-6 mt-6 shadow w-64 "> 
          <h4 class="flex m-auto text-center text-gray-600 text-lg text-3xl"> Preview</h4>
        </label>
       <h1>  ToDo:</h1> <h1> {{newTodo}}</h1>
      user-ID: <h1> {{newTodo}}</h1>
  </form>
</template>

<script>
import taskAPI from "../api/taskAPI";

export default {
    
    name:'CxTask',
    
    data(){
        return{
            newTodo:"",
            userID:0,
        }
    },    
    methods:{
        addNewTodo(){
            
            console.log('New Todo Sunmited: '+this.newTodo+" For the User: "+this.userID) ;
            taskAPI.crateTask(this.newTodo,this.userID);
        }
    }
}
</script>

<style>

</style>