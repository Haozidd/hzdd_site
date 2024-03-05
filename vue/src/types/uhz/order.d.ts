export type submitOrderData = {
    pageNum: number;
    pageSize: number;
    /*置空表示所有订单，40 为租赁中订单，50 为已完成订单，60 为已撤单*/
    status: string | number;
    gameId: null;
    //微信账号搜索
    unionFiled: null;
    // YYYY-MM-DD
    startDate:  string;
    endDate: string;
}

export type orderItem = {
    payTime: number;
    gameAccount: GameAccount;
    groupId: GroupID;
    buyerId: number;
    rent: number;
    serverId: string;
    deadLine: number;
    followUpWork: number;
    isAssist: number;
    complainStatus: number;
    clientType: number;
    sellerId: number;
    carrierName: CarrierName;
    gameName: GameName;
    gameRoleLevel: string;
    selfSupport: number;
    loginPassword: string;
    id: number;
    rentValue: number;
    thirdId: string;
    ip: string;
    blackStatus: number;
    openTeam: boolean;
    createrName: string;
    rentNum: number;
    groupName: GroupName;
    buyerType: number;
    deposit: number;
    status: number;
    shareCode: string;
    gameType: number;
    goodsId: number;
    rentType: number;
    sellerName: SellerName;
    serverName: string;
    actualRent: number;
    rentWay: number;
    Time: number;
    platformName: PlatformName;
    paymentStatus: number;
    channelFlag: boolean;
    gameId: GameID;
    rentalPrice: number;
    loginMethod: number;
    gamePassword: string;
    gameRoleName: GameRoleName;
    platformId: PlatformID;
    buyerName: string;
    periodStatus: number;
    haoZhuComplain: boolean;
    createTime: number;
    givenTime: number;
    depositStatus: number;
    goodsTitle: string;
    endTime: number;
    carrierId: CarrierID;
    rentTime: number;
    supportCsgoBattlePlatform: boolean;
    periodId?: number;
}

export enum CarrierID {
    A2705Y003 = "A2705Y003",
}

export enum CarrierName {
    微信区 = "微信区",
}

export enum GameAccount {
    HaoziStupid = "HaoziStupid",
    TempNick = "tempNick",
}

export enum GameID {
    A2705 = "A2705",
}

export enum GameName {
    王者荣耀 = "王者荣耀",
}

export enum GameRoleName {
    牛马小耗1号 = "牛马小耗1号",
    牪騳小耗2号 = "牪騳小耗2号",
}

export enum GroupID {
    A2705P001001 = "A2705P001001",
}

export enum GroupName {
    默认区服 = "默认区服",
}

export enum PlatformID {
    A2705Pt1001 = "A2705PT1001",
}

export enum PlatformName {
    苹果 = "苹果",
}

export enum SellerName {
    UOdisivqg = "U_odisivqg",
}
