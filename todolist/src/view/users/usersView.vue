<template>
  <div >
      <cx-table :array="users" v-on:elementDeleted="updatedUsers" :type="type" />
  </div>
</template>

<script>
import userAPI from '../../api/userAPI'
import CxTable from '../../components/CxTable.vue';

export default {
  components:{
    CxTable
  },
  data(){
    return{
      users:[],
      type:"user",
    }
  },
  created(){
    userAPI.getUsers("users").then(res => this.users = res.data);
  },
  methods:{
        updatedUsers(){
            console.log('METHOD CALLED');
            userAPI.getUsers("users").then(res => this.users = res.data);
        }
    },

}
</script>

<style>

</style>