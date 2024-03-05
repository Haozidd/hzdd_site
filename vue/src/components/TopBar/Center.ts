import {useNavStore} from "@/stores/store";
import pinia from "@/stores";
import {ref, watch} from "vue";
import {throttle} from "lodash";

const navStore = useNavStore(pinia)

let buttonText = ref('百度')
let url = ref('https://www.baidu.com/baidu?word=')

function isShowDropDownButton(state: number) {
    const {dropDownFrame} = navStore.HTMLElementObj
    if (state === 0) {
        dropDownFrame.style.height = '0'
        dropDownFrame.style.padding = '0'
    }
    if (state === 1) {
        dropDownFrame.style.paddingTop = '19px'
        dropDownFrame.style.height = 30 * navStore.searchEngineList.length + parseInt(dropDownFrame.style.paddingTop) + 4 + 'px'
    }
}

function activeShortcut() {
    const {searchElement} = navStore.HTMLElementObj
    document.onkeyup = (ev) => {
        if (ev.altKey) {
            if (ev.code === 'KeyF') {
                searchElement.focus()
            }
        }
    }
}

function activeScrollDownHideTopBar() {
    let scrollDirection = ref(0) //0: up ,1:down
    let scrollY = ref(window.scrollY)
    document.onscroll = throttle((e) => {
        scrollY.value = window.scrollY
        if (scrollY.value <= 0) {
            scrollY.value = 0
        }
        if (scrollY.value >= document.body.clientHeight) {
            scrollY.value = document.body.clientHeight
        }
    }, 100)
    watch(scrollY, (nv, ov) => {
        console.log(nv, ov)
        nv >= ov ? scrollDirection.value = 1 : scrollDirection.value = 0
    })
}

function clickDropDownItem(e: any, index: any) {
    buttonText.value = e.target.innerText
    url.value = navStore.searchEngineList[index].url + navStore.searchEngineList[index].params
    isShowDropDownButton(0)
}

function searchContents(e: KeyboardEvent) {
    let flag = 1; // 为0 时代表输入法正在启动, enter事件不触发
    const inputElement: any = e.target!
    let searchContent = inputElement.value
    url.value = `${url.value}${searchContent}`
    inputElement.addEventListener('compositionstart', () => {
        flag = 0
    })
    inputElement.addEventListener('compositionend', () => {
        flag = 1
    })
    if (flag === 1) {
        window.location.href = url.value
        inputElement.blur()
        inputElement.value = ''
    }
}

export {
    activeShortcut,
    isShowDropDownButton,
    activeScrollDownHideTopBar,
    clickDropDownItem,
    searchContents,
    buttonText
}