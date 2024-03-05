<template>
  <div id="Nav">
    <MainBar/>
<!--    <FilterBar/>-->
    <NavBar/>
    <div id="mask-wrap" v-if="isLoading">
      <div class="mask"></div>
      <HzddLoading/>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainBar from './MainBar/index.vue'
import FilterBar from './FilterBar/index.vue'
import NavBar from './NavBar/index.vue'
import {provide, ref} from "vue";
import {loading} from "@/types/InjectionKey";

const isLoading = ref(false)
provide(loading,{
  isLoading
})





</script>

<style lang="scss" scoped>
#mask-wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  .mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(102, 102, 102, 0.61);
    z-index: 100;
  }

  h1{
    display: block;
    text-align: center;

    padding-top: 20px;
    padding-left: 10px;
    z-index: 1000;
  }
  @include flex(column);
}
#Nav{

  box-sizing: border-box;
  position: relative;

  height: 100vh;
  padding: 75px 15px 15px 15px;

  display: grid;
  grid-template-columns:1fr 6fr;
  gap: 20px;


}




</style>