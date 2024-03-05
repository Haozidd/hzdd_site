// import mockjs, {Random} from 'mockjs'
// import realSites from './site.json'
// import searchEngines from './searchEngine.json'
// let initSites: object[] = []
// for (const initSitesKey in realSites) {
//     initSites = initSites.concat(realSites[initSitesKey as keyof typeof realSites])
// }
//
// const oMockSiteList = mockjs.mock({
//     'initSites': initSites,
//     // 'sites|8': [{
//     //     title: '@first',
//     //     svg: 'src/assets/svg/default.svg',
//     //     url: '@url'
//     // }]
// })
// const oSiteResponse = {
//     url: '/mock/sites',
//     response: ({body: {}}) => ({
//         code: 200,
//         msg: 'success',
//         data: oMockSiteList
//     })
// }
//
// const oMockSearchEnginList = mockjs.mock({...searchEngines})
// const oSearchEngineResponse = {
//     url: '/mock/searchEngine',
//     response:{
//         ...oMockSearchEnginList
//     }
// }
//
//
// const oMockVirtualData = mockjs.mock({
//     'dataList|100':[
//         {
//             name:'@cname',
//             "age|20-30": 25
//         }
//     ]
// })
// const oVirtualDataResponse = {
//     url:'/mock/virtualData',
//     response:{
//         ...oMockVirtualData['dataList']
//     }
// }
//
// const exportArray = [oSiteResponse,oSearchEngineResponse,oVirtualDataResponse]
//
// export default exportArray