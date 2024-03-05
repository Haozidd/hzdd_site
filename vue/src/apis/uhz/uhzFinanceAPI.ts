import {uhzRequest} from "@/services/uhz/uhzRequest";

type SubmitWithdrawApplyData = {
    accountId:   string;
    amount:      number;
    channel:     number;
    channelName: string;
    channelCode: string;
    payPassword: string;
}

/**
 * 提现申请 API
 *
 * @param data 提现申请数据
 * @returns 返回一个Promise，表示提现申请是否成功
 * @throws 请求失败，抛出异常
 */
export const postFinanceWithDrawApplyAPI = (data:SubmitWithdrawApplyData) => {
    return uhzRequest<boolean>({
        method: 'POST',
        url: '/api/finance/withdraw/apply',
        data
    })
}
