export type GoodsListParams = {
    gameId:      string;
    groupId:     string;
    serverId:    string;
    page:        number;
    pageSize:    number;
    keyWords:    string;
    goodsStatus: string;
    rentStatus:  string;
    isBargain:   string;
    hidden:      string;
}

export type GoodsItem = {
    authSource:         string;
    minRentTime:        number;
    gameAccount:        string;
    supportQqAuth:      boolean;
    groupId:            string;
    serverName:         string;
    remark:             string;
    userIdentity:       number;
    serverId:           string;
    isAssist:           number;
    tips:               string;
    isOrderRebate:      boolean;
    modifyTime:         number;
    carrierName:        string;
    deleteLimitCount:   number;
    gameName:           string;
    isBargain:          boolean;
    loginAuthType:      number;
    rentalByHour:       number;
    id:                 number;
    isAppointment:      number;
    platformName:       string;
    gameId:             string;
    rentalByHourFormat: string;
    deleteLimitTime:    number;
    channelSupply:      boolean;
    depositFormat:      string;
    gameRoleName:       string;
    platformId:         string;
    tagLevel:           number;
    limitPromote:       number;
    loginRate:          number;
    userId:             number;
    exceptionHandle:    number;
    rentStatus:         number;
    groupName:          string;
    auditReason:        string;
    forbidPlayStatus:   boolean;
    goodsStatus:        number;
    createTime:         number;
    extendedField:      string;
    deposit:            number;
    goodsTitle:         string;
    antiAddictionGoods: boolean;
    carrierId:          string;
    isClaim:            number;
}
export type GoodsModifyQuery = {
    info:                 Info;
    publishStatus:        number;
    options:              Option[];
    urls:                 string[];
    goodsDiscountOptions: GoodsDiscountOption[];
    qqAuthInfo:           string;
    authSource:           string;
    mode:                 string;
    randStr:              string;
    weixinAuthToken:      number;
    authVersion:          number;
}

export type Info = {
    gameId:                  string;
    platformId:              string;
    carrierId:               string;
    groupId:                 string;
    goodsTitle:              string;
    gameAccount:             string;
    gamePassword:            string;
    gameRoleName:            string;
    gameRoleLevel:           string;
    goodsDescription:        string;
    loginMethod:             number;
    isBargain:               number;
    channelSupply:           number;
    exclusiveSupplyDiscount: string;
    rentalByHour:            number;
    rentalByNight:           number;
    rentalByDay:             number;
    rentalByWeek:            number;
    cotenantId:              string;
    minGuaranteeMoney:       number;
    commission:              number;
    payPeriod:               number;
    kickOnTime:              number;
    customId:                string;
    isAppointment:           number;
    isOrderRebate:           number;
    deposit:                 number;
    minRentTime:             number;
    rentTimesLimit:          number;
    provinceName:            string;
    cityName:                string;
    discount:                string;
    tencentGroupId:          string;
    tencentGroupName:        string;
    syncDescription:         boolean;
    guidePrice:              boolean;
}
export type Option = {
    optionId:    string;
    optionName?: string;
}



export type GoodsModifyData = {
    authSource:           string;
    randStr:              string;
    supportQqAuth:        boolean;
    propMap:              { [key: string]: PropMap[] };
    discountsType:        number;
    supportCloudGame:     boolean;
    screenShots:          ScreenShot[];
    specialGames:         boolean;
    gameRentInfo:         GameRentInfo;
    weixinAuthStatus:     WeixinAuthStatus;
    supportSpecialCloud:  boolean;
    allowChangePrice:     boolean;
    gameLimit:            string;
    accountBelong:        AccountBelong;
    supportSharingCloud:  boolean;
    sfTimeout:            string;
    cloudSource:          string;
    showRating:           boolean;
    userType:             number;
    cotenantInfo:         CotenantInfo;
    goodsDiscountOptions: GoodsDiscountOption[];
}
export type AccountBelong = {
    cityCode:     string;
    cityName:     string;
    createTime:   number;
    gameId:       string;
    gameName:     string;
    id:           number;
    modifyTime:   number;
    provinceCode: string;
    provinceName: string;
}
export type CotenantInfo = {
    changePrice:    null;
    cotenantName:   string;
    createTime:     null;
    goodsNum:       null;
    id:             number;
    modifyTime:     null;
    phoneNum:       string;
    qqNum:          string;
    receiptAccount: string;
    receiptType:    null;
    userId:         null;
}
export type GameRentInfo = {
    account5e:                   string;
    addPercent:                  null;
    antiAddictionGoods:          boolean;
    auditReason:                 string;
    auditorId:                   string;
    auditorName:                 string;
    auditorType:                 number;
    authMode:                    null;
    authSource:                  string;
    authSupport:                 number;
    autoUnshelvesStatus:         null;
    badOrderNum:                 number;
    bottomWeight:                string;
    carrierId:                   string;
    carrierName:                 string;
    channelSupply:               boolean;
    cityName:                    string;
    cloudGameGoods:              boolean;
    cloudSource:                 string;
    commission:                  number;
    concreteRentalByDay:         number;
    concreteRentalByHour:        number;
    concreteRentalByNight:       number;
    concreteRentalByWeek:        number;
    cotenantId:                  string;
    cotenantName:                string;
    cotenantPhone:               string;
    cotenantQq:                  string;
    createTime:                  number;
    customId:                    string;
    customerUnshelves:           boolean;
    customizeStyleType:          null;
    customizeStyleTypes:         null;
    cycleSales:                  number;
    dayOrderNum:                 null;
    deposit:                     number;
    disRentalByDay:              null;
    disRentalByHour:             null;
    disRentalByNight:            null;
    disRentalByWeek:             null;
    discount:                    number;
    discountInfo:                DiscountInfo[];
    discounts:                   string;
    discountsType:               number;
    enableBargain:               boolean;
    exceptionHandle:             number;
    exclusiveSupplyDiscount:     number;
    extendedField:               string;
    finishOrderNum:              null;
    forbidPlayStatus:            boolean;
    gameAccount:                 string;
    gameId:                      string;
    gameName:                    string;
    gamePassword:                string;
    gameRoleLevel:               string;
    gameRoleName:                string;
    gameSalt:                    string;
    gameType:                    number;
    goodsDescription:            string;
    goodsDiscountInfo:           DiscountInfo[];
    goodsDiscountOptions:        DiscountInfo[];
    goodsDiscounts:              string;
    goodsSaleCount:              null;
    goodsSales:                  number;
    goodsStatus:                 number;
    goodsTitle:                  string;
    groupId:                     string;
    groupName:                   string;
    guidePrice:                  null;
    id:                          number;
    isActivity:                  number;
    isAppointment:               number;
    isAssist:                    number;
    isBargain:                   boolean;
    isClaim:                     number;
    isDelete:                    number;
    isIndexRecommend:            boolean;
    isInsurance:                 number;
    isOrderRebate:               boolean;
    kickOnTime:                  boolean;
    limitPromote:                null;
    loginAuthType:               number;
    loginMethod:                 number;
    loginRate:                   number;
    maxRentTime:                 null;
    memberRentalByDay:           number;
    memberRentalByHour:          number;
    memberRentalByNight:         number;
    memberRentalByWeek:          number;
    minGuaranteeMoney:           number;
    minRentTime:                 number;
    modifyTime:                  number;
    noneSelfCycleSales:          null;
    onEndTime:                   string;
    onStartTime:                 string;
    orderNum:                    number;
    originDiscounts:             string;
    originRentalByDay:           number;
    originRentalByHour:          number;
    originRentalByNight:         number;
    originRentalByWeek:          number;
    partner:                     null;
    password5e:                  string;
    payPeriod:                   number;
    perfectAuthInfo:             string;
    platformId:                  string;
    platformName:                string;
    provinceName:                string;
    rebateRemainTime:            string;
    recentSales:                 number;
    redPackDeductAmount:         number;
    releaseTime:                 null;
    remark:                      string;
    rentStatus:                  number;
    rentTimesLimit:              number;
    rentalBefore:                string;
    rentalByDay:                 number;
    rentalByDayBefore:           number;
    rentalByDayOrderShow:        null;
    rentalByHour:                number;
    rentalByHourBefore:          number;
    rentalByHourOrderShow:       null;
    rentalByNight:               number;
    rentalByNightBefore:         number;
    rentalByNightOrderShow:      null;
    rentalByWeek:                number;
    rentalByWeekBefore:          number;
    rentalByWeekOrderShow:       null;
    sellStatus:                  number;
    sellerExceptionHandleStatus: number;
    serverId:                    string;
    serverName:                  string;
    stickGoodsByPid:             null;
    support5e:                   null;
    supportPerfect:              null;
    syncDescription:             boolean;
    tagDesc:                     string;
    tagLevel:                    number;
    tencentGroupId:              string;
    tencentGroupName:            string;
    topWeight:                   number;
    traceNum:                    string;
    uhaozuRentalByDay:           null;
    uhaozuRentalByHour:          null;
    uhaozuRentalByNight:         null;
    uhaozuRentalByWeek:          null;
    userId:                      number;
    userIdentity:                number;
    userName:                    string;
}
export type DiscountInfo = {
    buy:  number;
    free: number;
    type: number;
}
export type GoodsDiscountOption = {
    buy:     number;
    checked: boolean;
    free:    number;
}
export type PropMap = {
    createTime:   number;
    goodsId:      number;
    id:           string;
    modifyTime:   number;
    optionId:     string;
    optionName:   string;
    optionNum:    number;
    optionPid:    string;
    optionUrl:    string;
    propertyId:   PropertyID;
    propertyName: PropertyName;
    propertyPid:  PropertyPID;
    propertyType: number;
    selected:     boolean;
    wordsNumber:  null;
}
export enum PropertyID {
    A2705DW = "A2705DW",
    A2705Pf = "A2705PF",
    A2705Pfsl = "A2705PFSL",
    A2705Pws = "A2705PWS",
    A2705S2833 = "A2705S2833",
    A2705S3162 = "A2705S3162",
    A2705S4108 = "A2705S4108",
    A2705S6820 = "A2705S6820",
    A2705Xyf = "A2705XYF",
    A2705Yx = "A2705YX",
    A2705Yxsl = "A2705YXSL",
}
export enum PropertyName {
    信誉分 = "信誉分",
    典藏皮肤数 = "典藏皮肤数",
    在榜 = "在榜",
    排位赛 = "排位赛",
    段位 = "段位",
    皮肤 = "皮肤",
    皮肤数量 = "皮肤数量",
    禁言不能加好友 = "禁言/不能加好友",
    英雄 = "英雄",
    英雄数量 = "英雄数量",
    贵族等级 = "贵族等级",
}
export enum PropertyPID {
    A2705Yx = "A2705YX",
    A2705Yxfl = "A2705YXFL",
    Empty = "",
}
export type ScreenShot = {
    createTime: number;
    goodsId:    number;
    id:         string;
    imgUrl:     string;
    modifyTime: null;
}
export type WeixinAuthStatus = {
    authStatus:        number;
    authTime:          number;
    formatInvalidTime: Date;
    invalidTime:       number;
    modifyTime:        number;
    weixinAccount:     string;
}
