import {computed} from "vue";

const links = [
    {title: '简历', href: '/resume'},
    {title: 'Test', href: '/testPage'},
]

const combinedItems2 = computed(() => {
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
    for (let i = 1; i < items.length; i++) {
        items.splice(i, 0, {type: 'divider'})
        i++
    }
    return items
})

export {
    combinedItems2
}