<template>
  <div class="ml-auto">
      <div v-for="(o,i) in array" 
      :key='i'
      class="w-1/2 border-solid border-2 p-2 m-auto items-center">
        <div  class="text-center text-3xl  m-2 text-gray-600">
            <h3 v-if="type==='task'">{{o.taskName}}</h3>
            <h3 v-if="type==='user'">{{o.userID}})  {{o.name}}</h3>
        </div>
        
        <button v-if="type==='user'" @click="deleteTask(o.userID)" class="text-center text-gray-200 m-auto hover:bg-red-600 flex border-solid border-2 px-6 bg-red-400"> delete</button>
        <button v-if="type==='task'" @click="deleteTask(o.taskID)" class="text-center text-gray-200 m-auto hover:bg-red-600 flex border-solid border-2 px-6 bg-red-400"> delete</button>
      </div>
  </div>
</template>

<script>
import taskAPI from '../api/taskAPI';
import userAPI from '../api/userAPI';

export default {
    props:['array','type'],
    data(){
        return{
            arrayObj:[]
        }
    },
    created(){
       
    },   
    methods:{
        arrayB(){
            if(this.array[0]){
                this.isUser=false;
                this.arrayObj=this.array;
            }else{
            this.isUser=true;
            this.arrayObj=this.array;
            
            }
        },
        deleteTask(ID){
            if(this.type==="task"){
                taskAPI.deleteTask(ID)
                    .then(()=>{
                        this.$emit('elementDeleted')
                    });
            }else{
                userAPI.deleteUser(ID)
                    .then(()=>{
                         console.log('Emited');
                        this.$emit('elementDeleted');
                    });
            }
        }
    
    }
}
</script>

<style>

</style>