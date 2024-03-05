<template>
  <div id="Tool">
    <el-container style="margin: 20px;">
      <el-aside width="10%" >
        <NavBar/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>



</template>

<script lang="ts" setup>

import NavBar from "@/pages/Tool/components/NavBar.vue";


</script>
<style lang="scss">
#Tool{
  position: relative;
  height: 100%;

  padding-top: 55px;
  width: 100%;
}
.el-container{
  position: relative;
  height: 100%;
}
.el-aside{
  position: relative;
  width: 10%;
}
.el-main{
  position: relative;
  height: 90%;
  width:90%;
  box-sizing: border-box;
  padding: 0 0 0 20px;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
</style>