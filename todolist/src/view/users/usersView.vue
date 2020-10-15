<template>
  <div>
      Hello
  </div>
</template>

<script>
import api from '../../api/getInfo'
export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    api.getUsers().then(res => this.users = res);
  }

}
</script>

<style>

</style>