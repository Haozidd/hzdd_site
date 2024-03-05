<template>
  <TopBar v-if="commonStore.resumeStatus==0"/>
  <router-view/>


</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar/index.vue'
import {useCommonStore, useMemberStore} from "@/stores";
import {onMounted, watch} from "vue";


const commonStore = useCommonStore();



watch(commonStore.$state,() => {
  if (commonStore.resumeStatus==1){
    document.body.style.background = 'white'
  }
})



</script>


<style lang="scss">
body,html{
  width: 100%;
  //height: 100%;
}
body{
  background: $themeColor;
  overflow: auto;
}

#app{
  box-sizing: border-box;
  //padding-top: 75px;
  //height: 100%;
  //position: relative;

  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
}
</style>
