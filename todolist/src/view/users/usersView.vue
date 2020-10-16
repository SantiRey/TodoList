<template>
  <div >
    <div class="border-solid border-2 m-6" v-for="(o) in users" :key="o.userID">
      <h4 class="text-center text-gray-600 text-2xl">{{o.name}}</h4>
      <h4 class="text-center text-blue-300 text-lg">UserName</h4>
    </div>
  </div>
</template>

<script>
import userAPI from '../../api/userAPI'
export default {
  data(){
    return{
      users:[],
    }
  },
  created(){
    userAPI.getUsers("users").then(res => this.users = res.data);
  }

}
</script>

<style>

</style>