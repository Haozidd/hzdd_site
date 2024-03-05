<template>
  <div id="rent">

    <div class="rent-left-side" style="position:relative;display: flex;flex-direction: column">
      <el-card class="box-card" :body-style="{display:'flex',position:'relative'}">
        <div style="width: 50%;">
          <div class="text item" style="font-size: 20px">
            <el-text size="large" style="margin-right: 20px">账号管理</el-text>
            <el-button type="primary" @click="test">测试</el-button>
          </div>

          <div class="text item" v-for="(item,index) in goodsList">
            <el-text size="large" style="margin-right: 20px">{{ item.gameRoleName }}</el-text>
            <el-button :type="item.goodsStatus===3?'primary':'success'" size="small" @click="dealShelves(item)">
              {{ item.goodsStatus === 3 ? '下架' : '上架' }}
            </el-button>
          </div>


          <el-button type="warning" size="small">批量操作</el-button>

        </div>
        <div>
          <div class="text item">
            <el-text size="large" style="margin-right: 20px;font-size: 18px">余额：{{ indexData.balance }} 元</el-text>
            <el-button type="primary" @click="withdraw" size="small">提现</el-button>
          </div>
          <div class="text item" v-for="(item,index) in showInfo" :key="index">
            <el-text size="default"> {{ item.title }}：{{ item.value }} 元</el-text>
          </div>
        </div>


      </el-card>
      <el-card class="box-card">
        <el-descriptions style="border-bottom: .5px solid gray;margin-bottom: 5px" :column=2
                         v-for="(item,index) in orderList" :key="index">
          <el-descriptions-item label="账号">
            <el-text style="margin-right: 20px">{{ item.gameRoleName }}</el-text>
            <el-text style="margin-right: 20px"> 金额：{{ item.rentValue / 100 }}</el-text>
            <el-text v-if="item.blackStatus !== 10"> {{ item.buyerName.slice(4) }}</el-text>
            <el-tag v-else type="danger">{{ item.buyerName.slice(4) }}</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="状态">
            <el-text :type="statusColor(item.status)">{{ statusText(item.status) }}</el-text>

          </el-descriptions-item>
          <el-descriptions-item label="租赁时间">{{ computeRentingTime(item) }}</el-descriptions-item>
          <el-descriptions-item label="租赁:">
            {{ buyerDetails && buyerDetails[item.buyerId].payTimeList.length }}
<!--            {{ buyerDetails && buyerDetails[item.buyerId] }}-->
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>

    <div id="eChart"/>

  </div>
</template>

<script setup lang="ts">

import {computed, nextTick, onBeforeMount, onMounted, reactive, ref, toRefs, watch} from "vue";
import * as echarts from 'echarts';
import {billTrendItem, merchantIndex} from "@/types/uhz/merchants";
import {ElMessage, ElMessageBox} from "element-plus";
import {postFinanceWithDrawApplyAPI} from "@/apis/uhz/uhzFinanceAPI";
import {useFinanceStore} from "@/stores";
import {format} from "date-fns";
import {useOrderStore} from "@/stores/uhz/order";
import {orderItem} from "@/types/uhz/order";
import {useGoodsStore} from "@/stores/uhz/goods";
import {GoodsItem} from "@/types/uhz/goods";
import {postGoodsShelvesAPI, postGoodsUnShelvesAPI} from "@/apis/uhz/uhzGoodsAPI";

const {
  getMerchantsIndexData,
  getMerchantsBillTrendData,
  withdraw
} = useFinanceStore()
const financeStore = useFinanceStore()
const {indexData, rentTrendData} = toRefs(financeStore)

const {
  isUpdateStorage,
} = useOrderStore()
const orderStore = useOrderStore()
const {orderList, buyerList} = toRefs(orderStore)

const {getGoodsData,shelvesGoods,unShelvesGoods} = useGoodsStore();
const goodsStore = useGoodsStore()
const {goodsList} = toRefs(goodsStore)


const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const pastWeek = ref<string[]>([])

const showInfo = reactive({
  todayIncome: {
    title: '今日收入',
    value: computed(() => {
      return indexData.value.sellerSumAmountOneDay || '0'
    })
  },
  thisWeekIncome: {
    title: '本周收入',
    value: computed(() => {
      let thisWeekIncome = 0
      if (rentTrendData.value.length > 0) {
        let startIndex = rentTrendData.value.findIndex((v) => {
          let date = new Date(v.createTime)
          return date.getDay() === 1
        })
        for (let i = startIndex; i < rentTrendData.value.length; i++) {
          thisWeekIncome += rentTrendData.value[i].salesAmount
        }
      }
      return toFixed(thisWeekIncome) || '0'
    })
  },
  thisMonthIncome: {
    title: '本月收入',
    value: computed(() => {
      return indexData.value.sellerSumAmount || '0'
    })
  }
})

const buyerDetails = computed(() => {
  return buyerList.value?.reduce((map, valueItem) => {
    map[valueItem.buyerId] = valueItem.details
    return map
  }, {})
})


const statusText = (status: number) => {
  switch (status) {
    case 40:
      return '租赁中';
    case 50:
      return '已完成';
    case 60:
      return '已撤单';
    default:
      return '未知状态';
  }
}
const statusColor = (status: number) => {
  switch (status) {
    case 40:
      return 'success';
    case 50:
      return 'primary';
    case 60:
      return 'info';
  }
}

function toFixed(num: number, division = 100, digits = 2) {
  return (num / division).toFixed(digits)
}

const computeRentingTime = (item: orderItem) => {
  const startTime = format(new Date(item.createTime), 'MM-dd HH:mm:ss')
  const endTime = format(new Date(item.endTime), 'MM-dd HH:mm:ss')
  return `${startTime} - ${endTime}`
}

const test = () => {
}

const dealShelves = async (goods:GoodsItem) => {
  //商品状态为 3 表示商品已上架
  if (goods.goodsStatus===3){
    await unShelvesGoods(goods)
  }else {
    await shelvesGoods(goods)
  }
  await getGoodsData()
}

onBeforeMount(async () => {
  getGoodsData().then()
  getMerchantsIndexData().then()
  getMerchantsBillTrendData().then(() => {
    pastWeek.value = rentTrendData.value.map(item => {
      let date = new Date(item.createTime)
      return weekdays[date.getDay()]
    })
    let myChart = echarts.init(document.getElementById('eChart'));
    myChart.setOption({
      title: {
        text: '近 7 日租赁情况统计'
      },
      tooltip: {},
      xAxis: {
        data: pastWeek.value
      },
      yAxis: {},
      series: [
        {
          name: '租赁金额',
          type: 'bar',
          data: rentTrendData.value.map(v => ((v.salesAmount) / 100).toFixed(2))
        }
      ]
    });
  })
  isUpdateStorage().then(() => {
  })

})
onMounted(() => {
})

</script>

<style lang="scss" scoped>
#eChart {

  width: 500px;
  height: 500px;
}


#rent {
  position: relative;
  @include flex(row);
  align-items: start;

  justify-content: start;
  .rent-left-side {
    //width: 50%
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

.el-card__body {
}

.role-item:hover {
  font-size: 15px;
}

</style>

<style lang="scss">
.el-descriptions__header {
  justify-content: center;

  .el-descriptions__title {
    color: black;

  }
}

.cell-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-skin {
  .el-descriptions__label {
    width: 80px;
  }
}

.custom-skin-xd {
  color: red;
}

.custom-account-keypoint {
  color: darkorange;
}

.box-card {
  margin: 10px;
}


</style>