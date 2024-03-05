<template>
  <div id="main" ref="main">
    <NavChunk v-for="(site,index) in navStore.$state.siteList" :key="index"
              :name="site.title" :url="site.url" :svg="site.svg"
    />

    <template v-if="paddingChunkCounts">
        <div v-for="(chunk,index) in paddingChunkCounts" :key="index"
             :style="`width:${paddingChunkWidth}px`"></div>


    </template>

  </div>

</template>

<script async setup lang="ts">
import NavChunk from '@/components/NavChunk/index.vue'
import {computed, onBeforeMount, onMounted, onUpdated, ref} from "vue";
import {useNavStore} from "@/stores/store";
import {paddingChunkWidth,paddingChunkCounts,dealPaddingChunk} from "@/pages/Nav/MainBar/dealChunkPadding";
import pinia from "src/stores";

const navStore = useNavStore()


const main = ref<HTMLDivElement>()
const HTMLElementObj = {
  main
}

let navChunk = computed(() => {
  return main.value?.firstElementChild
})

window.onresize = () => {
  if (main.value && navChunk.value) {
    dealPaddingChunk(main.value, navChunk.value)
  }
}
onBeforeMount(async () => {
  navStore.getSiteList()
})
onMounted(() => {
  navStore.storeHTMLElementObj(HTMLElementObj)
})
onUpdated(() => {
  if (main.value && navChunk.value) {
    dealPaddingChunk(main.value, navChunk.value)
  }
})



</script>

<style lang="scss" scoped>
#main {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(105, 105, 114, 0.3);
  border-radius: 10px;
  box-shadow: inset 1px 1px 20px rgba(255, 255, 255, 0.5),
  inset -1px -1px 20px rgba(255, 255, 255, 0.5),
  2px 2px 5px rgba(128, 128, 128, 0.5);

  grid-column: 2;
  grid-row: 1/3;
  gap: 30px;
  padding: 30px;

  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-flow: wrap;

  overflow: scroll;

}

.paddingChunk {

}
</style>