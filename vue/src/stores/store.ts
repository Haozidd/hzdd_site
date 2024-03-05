import {defineStore} from "pinia";
import {reqSites} from "@/apis";
import {searchEngineInfo, siteListInfo} from "@/types/nav";
import {reactive, ref} from "vue";
import type {loginResult} from "@/types/member";


export const useNavStore = defineStore('navStore', {
    state: () => ({
        searchEngineList: [
            {
                "title": "百度",
                "url": "https://www.baidu.com/baidu",
                "params": "?word="
            },
            {
                "title": "必应",
                "url": "https://cn.bing.com/search",
                "params": "?q="
            },
            {
                "title": "NPM",
                "url": "https://www.npmjs.com/search",
                "params": "?q="
            },
            {
                "title": "Soft",
                "url": "https://www.macat.vip/",
                "params": "?cat=&s="
            }
        ] as searchEngineInfo[],
        HTMLElementObj: {} as any,
        siteList: [] as siteListInfo[]
    }),
    actions: {
        async getSiteList() {
            let apiResult = await reqSites()
            if (!this.siteList.length) {
                this.siteList.push(...apiResult.data)
            }
        },
        storeHTMLElementObj(HTMLElementObj: any) {
            Object.assign(this.HTMLElementObj, HTMLElementObj)
        }
    },
})


export const useMemberStore = defineStore('member', () => {
    // 会员信息
    const profile = ref<loginResult>()
    profile.value = {
        authToken: "d8AZUpWrOsfV1GUfqhPS4EQ08BfnRuJ2xIRU0hrPRCD9l32AD5v3SwSlOykp52-RJ5hmmHXE4C8136Qpb7EWo2hTGG6v6O951gOntY1CflKsTtXFH9PMqElWDaTLZbLo50aqo3HZ-n2U88TzXxGcZS_BCu7d7iGQFQ3DypfLRNqZczUHKeivxpBdPxcWzumbmNyqBu8za7MaRo9sag.."
    }
    // 保存会员信息，登录时使用
    const setProfile = (val: loginResult) => {
        profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = (val: loginResult) => {
        profile.value = undefined
    }

    return {
        profile,
        setProfile,
        clearProfile,
    }
},)
export const useCommonStore = defineStore('common', {
    state: () => ({
        resumeStatus: 0,
    }),


    actions: {
        test() {
            console.log(this.resumeStatus)
        },

    },

})
