<template>
   <div>
     <router-view></router-view>
    </div> 
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './Components/Header.vue';

export default Vue.extend({
    name:"Main",
    components:{
      Header
    },
    mounted(){
      this.$nextTick(()=>{
        // window.oncontextmenu = ()=>false;
      })
    }
})
</script>