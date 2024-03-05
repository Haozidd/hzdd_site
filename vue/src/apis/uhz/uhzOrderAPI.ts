import {uhzRequest} from "@/services/uhz/uhzRequest";
import {orderItem, submitOrderData} from "@/types/uhz/order";

export const postOrderSubmitSellerOrderListAPI = (data:submitOrderData) => {
    return uhzRequest<orderItem[]>({
        method: 'POST',
        url: '/api/order/submit/seller-order-list',
        data
    })
}