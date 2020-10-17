<template>
    <form @submit.prevent="addNewUser" class="w-full m-6 flex items-center flex-col text-gray-700">
      <label class="flex text-3xl text-gray-800 border-b-4 mb-8 shadow-botton w-64 "> 
          <h4 class="flex-1 text-center text-gray-500  font-semibold  text-5xl"> New USER</h4>
      </label>
      <div class="w-full border-solid border-2 shadow p-6 flex items-center flex-col text-gray-700">
      <div class="text-xl text-orange-400"> User-Name:</div>
      <input class="shadow rounded-full border-solid border-2 px-4 m-2 flex" 
      type="text" v-model='newUser' name="newUser"  placeholder="New task Name" />
      <div class="text-xl mt-4 text-orange-400"> User-Password:</div>
      <input class="shadow rounded-full border-solid border-2 m-2 px-4 flex" 
      type="password" v-model='password' name="newUser"  placeholder="User Password" />
        <button 
        class="flex bg-blue-200 rounded-full border-solid border-2 px-4 py-2 hover:bg-blue-400 shadow rounded">
            add new User
        </button>
      </div>
        <label class="flex text-3xl text-gray-800 border-b-4 mb-6 mt-6 shadow w-64 "> 
          <h4 class="flex m-auto text-center text-gray-600 text-lg text-3xl"> Preview</h4>
        </label>
       <h1>  ToDo:</h1> <h1> {{newUser}}</h1>
      user-ID: <h1> {{password}}</h1>
  </form>
</template>

<script>
import userApi from "../api/userAPI";
export default {
 name:'CxUserCreation',
    
    data(){
        return{
            newUser:"",
            password:"",
        }
    },    
    methods:{
        addNewUser(){
            
            console.log('New Todo Sunmited: '+this.newUser+" For the User: "+this.password) ;
            userApi.crateUser(this.newUser,this.password);
        }
    }
}
</script>

<style>

</style>