<template>
  <header class="flex shadow  bg-gray-500  p-2">
        <div class="flex-col">
            <h5 class="text-gray-300 flex text-3xl">ToDo List</h5>
            <h5 class="text-gray-300 flex text-l">Your Work in a place</h5>
        </div>  
        <div class="ml-auto flex my-auto pr-10 text-end">
            <router-link class="flex-1 p-3 text-gray-400 text-end" :to="{name: 'Home'}">Home</router-link>
            <router-link class="flex-1 p-3 text-gray-400 text-end" to="/about">about</router-link>
            <router-link class="flex-1 p-3 text-gray-400 text-end" to="/about">github</router-link>
            <router-link class="flex-1 p-3 text-gray-400 text-end" to="/about">wiki</router-link>
        </div>
  </header>   
</template>

<script>
export default {

}
</script>

<style>

</style>