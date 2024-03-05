import {computed, reactive} from "vue";

const links = [
    {title: '文心', href: 'https://yiyan.baidu.com'},
    {title: 'MDN', href: 'https://developer.mozilla.org/zh-CN/'},
    {title: '声明文件', href: 'https://app.quicktype.io'},
]

const combinedItems = computed(() => {

    // 给每个链接添加 types 属性
    const items: {
        type: string,
        title?: string
        href?: string
    }[] = links.map(v => ({
        type: 'link',
        title: v.title,
        href: v.href
    }))
    // 在数组插入分隔符
    for (let i = 0; i < items.length; i++) {
        items.splice(i, 0, {type: 'divider'})
        i++
    }
    return items
})

const colDividerStyle = reactive({
    height: '40%',
    margin: '20px'
})

export {
    colDividerStyle,
    combinedItems
}