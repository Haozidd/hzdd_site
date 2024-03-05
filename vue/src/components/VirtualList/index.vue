<template>
<div id="virtual-list">
      <div class="list-wrap" :style="{height:containerHeight}" @scroll="handleScroll" ref="container">
        <div class="list" :style="{top: listTop}">
          <div class="item" v-for="(item,index) in showData" :style="{height:size+'px',lineHeight:size+'px'}" :key="index" draggable="true">
            {{item.name}} {{start+index+1}}
          </div>

          <div class="paddingDiv" :style="{height:paddingHeight}"></div>
        </div>
      </div>

</div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps(['items','size','showNumber'])

const container=ref<HTMLDivElement>()

let start = ref(0)
let end = ref(props.showNumber)

let showData=computed(()=>{
   return props.items.slice(start.value,end.value)
})
let containerHeight=computed(()=>{
  return props.size * props.showNumber + 'px'
})
let paddingHeight=computed(()=>{
  return props.size *(props.items.length - start.value) + 'px'
})
let listTop=computed(()=>{
  return start.value * props.size + 'px'
})




function handleScroll() {
  let scrollTop = container.value?.scrollTop!

if (scrollTop>=0){
  start.value = Math.floor(scrollTop/props.size)
  end.value = start.value + props.showNumber
}


}

</script>

<style lang="scss" scoped>
#virtual-list{

  text-align: center;
  h1{
    border-bottom: 1px solid black;
  }

  @include flex();

  .list-wrap{
    position: relative;
    top: 50px;
    width: 400px;

    @include testBorder;
    overflow: scroll;
  }
  .item{
    border-bottom: 1px solid black;
  }
  .list{
    position: relative;
  }
;
}

</style>