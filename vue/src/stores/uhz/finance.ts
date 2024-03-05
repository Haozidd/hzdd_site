import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {billTrendItem, merchantIndex} from "@/types/uhz/merchants";
import {postMerchantsBillTrendAPI, postMerchantsIndexAPI} from "@/apis/uhz/uhzMerchants";
import {ElMessage, ElMessageBox} from "element-plus";
import {postFinanceWithDrawApplyAPI} from "@/apis/uhz/uhzFinanceAPI";

export const useFinanceStore = defineStore('finance',() => {

    const indexData = reactive<merchantIndex>({
        balance: "",
        sellerSumAmount: "",
        sellerSumAmountOneDay: ""
    })

    const withdrawData = reactive({
        "accountId": "2d2bde9ece14490a81e283950b97b76c",
        "amount": 0,
        "channel": 1,
        "channelName": "支付宝",
        "channelCode": "104100000004",
        "payPassword": "c81e728d9d4c2f636f067f89cc14862c"
    })


    const rentTrendData = ref<billTrendItem[]>([])

    async function getMerchantsIndexData(){
        let resData = await postMerchantsIndexAPI()
        Object.assign(indexData,resData.object)
    }

    async function getMerchantsBillTrendData(){
        let resData = await postMerchantsBillTrendAPI()
        rentTrendData.value = resData.object
    }

    async function withdraw() {
        let minWithdrawAmount = 50

        ElMessageBox.prompt('请输入您想要提现的金额', '提现', {
            confirmButtonText: '提现',
            cancelButtonText: '取消',
            inputPattern: /^\d+$/,
            inputErrorMessage: '请输入整数提现金额',
        })
            .then(({value}) => {
                    if (parseInt(value)<minWithdrawAmount) {
                        ElMessage({
                            type: 'error',
                            message: `提现金额小于最小提取金额 ${minWithdrawAmount} 元，请重试`,
                        })
                    }
                    else if (parseFloat(value) > parseFloat(indexData.balance)) {
                        ElMessage({
                            type: 'error',
                            message: `提现金额超出了余额，请重试`,
                        })
                    }
                    else {
                        withdrawData.amount = parseInt(value)
                        postFinanceWithDrawApplyAPI(withdrawData).then((res) => {
                            ElMessage({
                                type: 'success',
                                message: `提现成功`,
                            })
                            getMerchantsIndexData()
                        })

                    }
                }

            )
    }




    return {
        indexData,
        rentTrendData,
        getMerchantsIndexData,
        getMerchantsBillTrendData,
        withdraw
    }
})