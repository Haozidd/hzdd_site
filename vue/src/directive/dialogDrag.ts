import {App, Directive, nextTick, reactive, ref, watch} from "vue";

export default function dialogDrag(app: App) {
    let realEl = ref<HTMLDivElement>()

    function verifyIfExistDialogElement(el: HTMLDivElement) {
        if (el.className !== 'el-dialog' && el.firstElementChild) {
            verifyIfExistDialogElement(el.firstElementChild as HTMLDivElement)
        } else {
            realEl.value = el
        }
    }

    const dialogDrag: Directive = {
        mounted: (el: HTMLDivElement, binding) => {


        },
        updated: (el: HTMLDivElement, binding) => {
            nextTick().then(() => {
                verifyIfExistDialogElement(el)
                if (realEl.value?.className === 'el-dialog') {
                    const dialog = realEl.value

                    //起始偏移量
                    let originOffsetLeft = dialog?.offsetLeft
                    let originOffsetTop = dialog?.offsetTop

                    dialog.onmousedown = (e) => {

                        let mouseOriginX = e.clientX
                        let mouseOriginY = e.clientY

                        //点击时当前偏移量
                        const currentOffsetLeft = dialog?.offsetLeft
                        const currentOffsetTop = dialog?.offsetTop
                        dialog.style.cursor = 'move'

                        document.onmousemove = (e) => {
                            e.preventDefault()
                            //鼠标移动距离（即元素实际移动距离）
                            let moveDistanceX = e.clientX - mouseOriginX
                            let moveDistanceY = e.clientY - mouseOriginY

                            //实际偏移量= 实际移动距离 + 当前偏移量 - 原始偏移量
                            dialog.style.left = moveDistanceX + currentOffsetLeft - originOffsetLeft + 'px'
                            dialog.style.top = moveDistanceY + currentOffsetTop - originOffsetTop + 'px'

                        }


                        document.onmouseup = () => {
                            dialog.style.cursor = 'auto'
                            document.onmousemove = null
                            document.onmouseup = null
                        }


                    }
                    let ele = el.firstElementChild as HTMLDivElement


                    setTimeout(()=>{
                        if ((window.getComputedStyle(ele,null)['display']==='none')){
                            dialog.style.left = 0 + 'px'
                            dialog.style.top= 0 + 'px'
                        }
                    },400)


                }
            })
        },
        beforeUnmount:(el)=>{
        }
    }

    app.directive('dialogDrag', dialogDrag)
}