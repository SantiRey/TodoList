<template>
  <div class="ml-auto">
      <div v-for="(o) in tasks" :key="o.taskID"
      class="w-1/2 border-solid border-2 p-2 m-auto items-center">
        <div class="text-center text-3xl  m-2 text-gray-600">
            {{o.taskName}}
        </div>
        <button @click="deleteTask(o.taskID)" class="text-center text-gray-200 m-auto hover:bg-red-600 flex border-solid border-2 px-6 bg-red-400"> delete</button>
      </div>
  </div>
</template>

<script>
import taskAPI from '../../api/taskAPI';


export default {
    data(){
        return{
            tasks:[]
        }
    },
    created(){
        taskAPI.getTasks().then(res => this.tasks = res.data);
    },
    methods:{
        deleteTask(taskID){
            //console.log("ID::::: "+taskID);
            taskAPI.deleteTask(taskID);
        }
    },
}
</script>

<style>

</style>