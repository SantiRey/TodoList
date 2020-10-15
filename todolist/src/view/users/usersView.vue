<template>
  <div >
    <div class="border-solid border-2" v-for="(o) in users" :key="o.userID">
      <h4 class="text-center text-gray-500 text-2xl">{{o.name}}</h4>
      <h4 class="text-center text-blue-300 text-lg">UserName</h4>
    </div>
  </div>
</template>

<script>
import api from '../../api/getInfo'
export default {
  data(){
    return{
      users:[],
    }
  },
  created(){
    api.getUsers().then(res => this.users = res.data);
  }

}
</script>

<style>

</style>