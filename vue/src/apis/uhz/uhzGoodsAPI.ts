import {uhzRequest} from "@/services/uhz/uhzRequest";
import {GoodsItem, GoodsListParams, GoodsModifyData, GoodsModifyQuery} from "@/types/uhz/goods";

/**
 * 商品上架接口
 *
 * @param goodsId 商品 Id
 * @throws
 */
export const postGoodsShelvesAPI = (goodsId:number) => {
    return uhzRequest({
        method: 'POST',
        url: `/api/goods/shelves/${goodsId}`
    })
}
export const postGoodsUnShelvesAPI = (goodsId:number) => {
    return uhzRequest({
        method: 'POST',
        url: `/api/goods/unShelves/${goodsId}`
    })
}
export const postGoodsUserCenterListAPI = (data:GoodsListParams) => {
    return uhzRequest<GoodsItem[]>({
        method: 'POST',
        url: `/api/goods/usercenter/list`,
        data
    })
}
export const postGoodsModifyQueryAPI = (goodsId:number) => {
    return uhzRequest<GoodsModifyData>({
        method: 'POST',
        url: `/api/goods/modify/query/${goodsId}`,
    })
}