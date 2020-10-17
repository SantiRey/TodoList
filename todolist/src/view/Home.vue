<template>
    <div class="flex">
        <cx-task class="flex"/>
        <cx-user class="flex"/>
    </div>
</template>

<script>
import CxTask from '../components/CxTaskCreation.vue';
import CxUser from '../components/CxUserCreation.vue'

export default {
    components:{
        CxTask,
        CxUser
    }
}
</script>

<style>

</style>