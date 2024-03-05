import {ref} from "vue";
import {useNavStore} from "@/stores/store";
import pinia from "@/stores";

const navStore = useNavStore(pinia)

let paddingChunkCounts = ref()
let paddingChunkWidth = ref()

function dealPaddingChunk(main: HTMLDivElement, navChunk: Element) {
    let navChunkElement = navChunk as HTMLDivElement

    let contentWidth =
        main.getBoundingClientRect().width
        - (parseInt(getComputedStyle(main, null).padding))
        - (parseInt(getComputedStyle(main, null).border))

    let navChunkNumberPerLine = Math.floor(
        (contentWidth)
        / (navChunkElement.getBoundingClientRect().width + 30))

    paddingChunkCounts.value = navChunkNumberPerLine - navStore.siteList.length % navChunkNumberPerLine
    paddingChunkWidth.value = navChunkElement.getBoundingClientRect().width

}

export{
    paddingChunkWidth,
    paddingChunkCounts,
    dealPaddingChunk
}

