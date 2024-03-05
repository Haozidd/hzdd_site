<template>
  <div id="test">
    <div id="testContent">

      <!--      账号信息-->
      <el-descriptions
          class="margin-top"
          title="账号信息"
          :column="4"
          size="default"
          border
      >
        <!--        英雄数量-->
        <el-descriptions-item>
          <template #label style="justify-content: center">
            <div class="cell-item" style="width:100%;height: 100%;">
              <img src="@/assets/png/HoK_hero.png" style="max-height: 30px;">
            </div>
            <div style="text-align: center">
              英雄数量
            </div>
          </template>
          <div style="text-align: center">
            115
          </div>
        </el-descriptions-item>
        <!--        皮肤数量-->
        <el-descriptions-item >
          <template #label style="justify-content: center">
            <div class="cell-item" style="width:100%;height: 100%;">
              <img src="@/assets/png/HoK_skin.png" style="max-height: 30px;">
            </div>
            <div style="text-align: center">
              皮肤数量
            </div>
          </template>
          <div style="text-align: center">
            163
          </div>
        </el-descriptions-item>
        <!--        段位-->
        <el-descriptions-item>
          <template #label style="justify-content: center">
            <div class="cell-item" style="width:100%;height: 100%;">
              <img src="@/assets/png/HoK_degree2.png" style="max-height: 30px;">
            </div>
            <div style="text-align: center">
              段位
            </div>
          </template>
          <div style="text-align: center">
            无双王者
          </div>
        </el-descriptions-item>
        <!--        排位允许-->
        <el-descriptions-item>
          <template #label style="justify-content: center">
            <div class="cell-item" style="width:100%;height: 100%;">
              <img src="@/assets/png/HoK_permission.png" style="max-height: 30px;">
            </div>
            <div style="text-align: center">
              排位
            </div>
          </template>
          <div style="text-align: center">
            允许
          </div>
        </el-descriptions-item>
        <!--        在榜-->
        <el-descriptions-item span="4">
          <template #label style="justify-content: center">
            <div class="cell-item" style="width:100%;height: 100%;">
              <img src="@/assets/png/Hok_inList.png" style="max-height: 30px;">
            </div>
            <div style="text-align: center">
              在榜带标
            </div>
          </template>
          <div style="text-align: center" class="custom-account-keypoint">
            大国标：钟馗
          </div>
          <div style="text-align: center">
            小国标：孙策、刘邦
          </div>
        </el-descriptions-item>
        <!--        历史-->
        <el-descriptions-item span="4">
          <template #label style="justify-content: center">
            <div class="cell-item" style="width:100%;height: 100%;">
              <img src="@/assets/png/Hok_history.png" style="max-height: 30px;">
            </div>
            <div style="text-align: center">
              历史国标
            </div>
          </template>
          <div style="text-align: center" class="custom-account-keypoint">
            大国标：钟馗、鲁班大师
          </div>
          <div style="text-align: center">
            小国标：西施、张良、鬼谷子、刘邦、孙策、东皇太一、墨子、金蝉
          </div>
        </el-descriptions-item>


      </el-descriptions>
      <!--      皮肤信息-->
      <el-descriptions
          class="margin-top custom-skin"
          title="皮肤信息"
          :column="4"
          size="default"
          border
          style="margin-top: 20px"
      >
        <!--        荣耀典藏-->
        <el-descriptions-item span="4" >
          <template #label>
            <div style="text-align: center">
              荣耀典藏
            </div>

          </template>
          <div style="text-align: center">
            李白（鸣剑曳影）
          </div>
        </el-descriptions-item>
        <!--        传说-->
        <el-descriptions-item span="4" >
          <template #label>
            <div style="text-align: center">
              传说
            </div>

          </template>
          <div style="text-align: center" class="custom-skin-xd">
            限定：时雨天司-诸葛亮
          </div>
          <div style="text-align: center">
            非限定：末日机甲-孙策、FMVP-西施、白羊座-张良、狮子座-达摩、仲夏夜-貂蝉
          </div>
        </el-descriptions-item>
        <!--        史诗-->
        <el-descriptions-item span="4" >
          <template #label>
            <div style="text-align: center">
              史诗
            </div>

          </template>
          <div style="text-align: center" class="custom-skin-xd">
            限定：KPL-鲁班大师|镜|上官婉儿|裴擒虎、2-8周年限定、朱雀志-守约、花木兰-青春决赛季|默契交锋、神威-马超、至尊宝-孙悟空
          </div>
          <div style="text-align: center">
            非限定：乐园奇幻夜-钟馗、龙鼓争鸣-蒙芽、诗雨江南-西施、魅语-不知火舞、白蛇-大乔、箭雨风息-珈罗、猫狗日记-孙策、白龙吟-韩信
          </div>
        </el-descriptions-item>


      </el-descriptions>

    </div>
  </div>
</template>


<script setup lang="ts">





</script>

<style lang="scss" scoped>
#test {
  @include flex();
  width: 100%;
  height: 100%;
}

#testContent {
  width: 600px;
  height: 600px;
}


</style>

<style lang="scss">
.el-descriptions__header{
  justify-content: center;
  .el-descriptions__title{
    color: black;

  }
}
.cell-item{
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-skin{
  .el-descriptions__label{
    width: 80px;
  }
}
.custom-skin-xd{
  color: red;
}
.custom-account-keypoint{
  color: darkorange;
}


</style>