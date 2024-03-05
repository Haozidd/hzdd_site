import {uhzRequest} from "@/services/uhz/uhzRequest";
import {billTrendItem, merchantIndex} from "@/types/uhz/merchants";

export const postMerchantsBillTrendAPI = () => {
    return uhzRequest<billTrendItem[]>({
        method: 'POST',
        url: '/merchants/bill/trend',
    })
}

export const postMerchantsIndexAPI = () => {
    return uhzRequest<merchantIndex>({
        method: 'POST',
        url: '/merchants/index',
    })
}