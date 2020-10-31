<template>
  <header class="flex shadow  bg-gray-500  p-2">
        <div class="flex-col">
            <h5 class="text-gray-300 flex font-semibold text-3xl">ToDo List</h5>
            <h5 class="text-gray-300 flex text-l">Your Work and Your Place</h5>
        </div>  
        <div class="ml-auto flex my-auto pr-10 text-end">
            <router-link class="flex-1 p-3 text-gray-300 text-end" :to="{name: 'Home'}">Home</router-link>
            <router-link class="flex-1 p-3 text-gray-300 text-end" to="/about">about</router-link>
            <router-link class="flex-1 p-3 text-gray-300 text-end" to="/users">users</router-link>
            <router-link class="flex-1 p-3 text-gray-300 text-end" to="/task">task</router-link>
            <router-link class="flex-1 p-3 text-gray-300 text-end" to="/login">login</router-link>
        </div>
  </header>   
</template>

<script>
export default {

}
</script>

<style>

</style>