import {defineStore} from "pinia";
import {orderItem, submitOrderData} from "@/types/uhz/order";
import {ref} from "vue";
import {format} from "date-fns";
import {postOrderSubmitSellerOrderListAPI} from "@/apis/uhz/uhzOrderAPI";
import {uhzResData} from "@/types/uhz/uhzHttp";
import {ElMessage} from "element-plus";


type BuyerDetails = {
    orderIdList: number[],
    createTimeList: number[],
    payTimeList: number[]
}
type BuyerInfo = {
    buyerId: number;
    details: BuyerDetails;
}

export const useOrderStore = defineStore('order', () => {

    let localStorageQueryKey = "buyerRentInfo"
    const orderList = ref<orderItem[]>([])
    const date = {
        initialDate: format(new Date('2023-11-01'), 'yyyy-MM-dd'),
        yesterday: format(new Date().getTime() - 24 * 60 * 60 * 1000, 'yyyy-MM-dd'),
        today: format(new Date(), 'yyyy-MM-dd'),
    }
    const buyerList = ref<BuyerInfo[]>()
    const initialSubmitOrderParams = ref<submitOrderData>({
        gameId: null,
        pageNum: 1,
        pageSize: 5,
        startDate: format(new Date(), 'yyyy-MM-dd'),
        endDate: format(new Date(), 'yyyy-MM-dd'),
        /*置空表示所有订单，40 为租赁中订单，50 为已完成订单，60 为已撤单*/
        status: '',
        unionFiled: null
    })
    let buyerMap = new Map<number, BuyerDetails>()

    async function getOrderData(startDate?: string) {

        const submitOrderParams = initialSubmitOrderParams.value
        if (startDate) {
            submitOrderParams.startDate = format(new Date(startDate), 'yyyy-MM-dd')
        } else {
            submitOrderParams.startDate = date.initialDate
        }
        submitOrderParams.pageNum = 1
        submitOrderParams.pageSize = 30
        try {
            ElMessage({
                message: '开始获取数据',
                type: 'success',
                duration: 2000
            })

            while (true) {
                let resData = await postOrderSubmitSellerOrderListAPI(submitOrderParams)
                dealOrderData(resData)
                ElMessage({
                    message: `第 ${submitOrderParams.pageNum} 页数据获取完毕`,
                    type: 'success',
                    duration: 1000
                })
                if (resData.object.length===0 || startDate ===date.yesterday ) break
                //设置延时避免触发服务器频繁请求限制
                if (startDate!== date.today){
                    await new Promise(resolve => setTimeout(resolve, 3000))
                }
                if (resData.object.length < submitOrderParams.pageSize) break
                submitOrderParams.pageNum++
            }
            buyerList.value = Array.from(buyerMap.entries(), ([buyerId, details]) => ({buyerId, details}))
            dealLocalStorage('set', localStorageQueryKey, buyerList.value)
        } catch (e) {
            ElMessage({
                message: '数据获取失败，请重试',
                type: 'success'
            })
        }


    }

    function dealOrderData(resData: uhzResData<orderItem[]>) {
        orderList.value = resData.object
        orderList.value.forEach(item => {
            if (!buyerMap.has(item.buyerId)) {
                buyerMap.set(item.buyerId, {
                    createTimeList: [], orderIdList: [], payTimeList: []
                })
            }
            let tempMapValue = buyerMap.get(item.buyerId)!
            //检查订单信息是否重复
            if (!tempMapValue.orderIdList.includes(item.id)){
                tempMapValue.orderIdList.push(item.id)
                tempMapValue.payTimeList.push(item.payTime)
                tempMapValue.createTimeList.push(item.createTime)
            }
        })
    }

    function dealLocalStorage(method: 'get' | 'set', localStorageQueryKey: string, buyerList?: any) {
        switch (method) {
            case "get":
                return localStorage.getItem(localStorageQueryKey) || ''
            case "set":
                let storageData = {
                    storeDate: date.today,
                    buyerList
                }
                localStorage.setItem(localStorageQueryKey, JSON.stringify(storageData))
                return
        }
    }

    async function isUpdateStorage() {
        let storageStringData = dealLocalStorage('get', localStorageQueryKey)
        if (storageStringData) {
            let storageParsedData = JSON.parse(storageStringData)
            let buyerList:BuyerInfo[] = storageParsedData.buyerList
            buyerMap = buyerList.reduce((map,{buyerId,details})=>{
                map.set(buyerId,details)
                return map
            },new Map())
            if (storageParsedData.storeDate !== date.today) {
                await getOrderData(storageParsedData.storeDate)
            }else {
                await getOrderData(date.yesterday)
            }
        } else {
            await getOrderData()
        }
    }
    async function getBuyerList(){
        const stringData = dealLocalStorage('get',localStorageQueryKey)
        const parsedData = JSON.parse(stringData!)
        buyerList.value = parsedData.buyerList
    }

    return {
        localStorageQueryKey,
        buyerList,
        orderList,
        initialSubmitOrderParams,
        getBuyerList,
        getOrderData,
        dealLocalStorage,
        isUpdateStorage
    }
})