<template>
  <el-menu class="el-menu-vertical-demo">
    <el-menu-item index="1" @click="jumpToolRent()">
      <span>Rent</span>
    </el-menu-item>
  </el-menu>

</template>

<script setup lang="ts">


import {jumpToolMessageBomb, jumpToolRent} from "@/pages/Tool/dealRouting";
</script>

<style lang="scss" scoped>
.el-menu{
  box-sizing: border-box;
  position: absolute;
  height: 90%;
  width: 100%;
}
</style>