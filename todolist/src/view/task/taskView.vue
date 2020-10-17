<template>
  <div class="ml-auto">
      <cx-table :array="tasks" v-on:elementDeleted="updatedTask" :type="type"/>
  </div>

</template>

<script>
import taskAPI from '../../api/taskAPI';
import CxTable from '../../components/CxTable.vue';

export default {

components:{
    CxTable
},
data(){
        return{
            tasks:[],
            type:"task"
        }
    },
    created(){
        taskAPI.getTasks().then(res => this.tasks = res.data);
    },
    methods:{
        updatedTask(){
            taskAPI.getTasks().then(res => this.tasks = res.data);
        }
    },
}
</script>

<style>

</style>