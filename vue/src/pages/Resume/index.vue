<template>
  <div class="common-layout">
    <el-main>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span style="font-size: 35px;">简历</span>
          </div>
        </template>
        <!-- 个人信息 -->
        <div id="userInfo">

          <el-descriptions :column="3" title="个人信息">
            <el-descriptions-item label="姓 名 :">黄皓</el-descriptions-item>

            <!--              <el-descriptions-item label="性 别 :">男</el-descriptions-item>-->
            <el-descriptions-item label="求职岗位 :">嵌入式软件工程师</el-descriptions-item>
            <el-descriptions-item label="年 龄 :">27</el-descriptions-item>


            <el-descriptions-item label="学 历 :">本科 - 惠州学院</el-descriptions-item>


            <el-descriptions-item label="邮 箱 :">
              <el-tag size="small">285626941@qq.com</el-tag>
            </el-descriptions-item>

            <el-descriptions-item label="电  话 :">17727243857</el-descriptions-item>


          </el-descriptions>
          <el-image style="width: 100px; height: 118px" :src="url" :fit="fits[1]"/>

        </div>

        <el-divider/>

        <!-- 专业技能 -->
        <div id="skill">

          <el-descriptions title="专业技能"/>
          <div class="text item" v-for="(item,index) in skill">
            <div>
              <span class="skill-title">- {{ item.title }}</span>
              <span class="skill-description" v-for="(subItem,index) in item.content">{{ subItem }}</span>
            </div>
          </div>
        </div>

        <el-divider/>

        <div id="work">

          <el-descriptions :column="4" title="工作经历"/>

          <div class="job-item" v-for="(item,index) in work">
            <div class="text item">
              <span class="job-title">{{ item.company }}</span>
              <Divider class="colDivider" style="margin: 0 25px;height: 40px;"/>
              <span class="job-employment-date">{{ item.employmentDate }} </span>
            </div>
            <div class="text item">
              <div>
                <span v-for="subItem in item.jobDescription" class="job-item"> {{ subItem }}</span>
              </div>
            </div>
          </div>

        </div>

        <el-divider/>

        <div id="project">


          <el-descriptions title="项目经验"/>

          <div class="project-item" v-for="item in project">
            <div class="text item">
              <span class="project-title">{{ item.title }}</span>
            </div>

            <div class="text item">
              <i>项目描述 : </i>
              <div>
                <span class="project-text-item" v-for="subItem in item.description">{{ subItem }}</span>
              </div>
            </div>
            <div class="text item" v-if="item.technology">
              <i style="padding-top: 0">技术选型 : </i>
              <span class="project-text-item"> {{ item.technology }} </span>
            </div>
            <div class="text item"><i style="padding-top: 0;">负责内容 : </i>
              <div>
                <span class="project-text-item" v-for="subItem in item.responsibility">{{ subItem }}</span>
              </div>
            </div>
          </div>


        </div>

        <el-divider/>

        <div id="introduction">
          <el-descriptions title="自我简介"/>
          <div class="text item" v-for="item in introduction">
                  <span class="introduction-text-item">
                    {{ item }}
                  </span>
          </div>
        </div>


      </el-card>


    </el-main>
  </div>
</template>

<script setup lang="ts">


import {useCommonStore} from "@/stores";
import {onBeforeUnmount} from "vue";

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url = 'src/assets/jpg/idPhoto.JPG'

const skill = [
  {
    title: '嵌入式软件开发',
    content: [
      '熟悉 C/C++ 编程语言及数据结构，熟悉嵌入式系统内存管理和优化技巧',
      '了解 FreeRTOS 实时操作系统，了解其多任务管理、资源调度、同步机制',
      '掌握 STM32 和 ESP32 系列单片机进行项目开发，熟悉其硬件架构和外设接口',
      '熟悉 SPI、I2C、UART 等通信协议，能够编写相应的驱动程序',
      '熟悉 GDB，ADB，ASAN 等常用软件调试工具',
      '熟悉国科微、全志系列芯片开发，具有 GK7205V200 和全志 H 系列芯片使用经验。'
    ],
  },
  {
    title: 'Linux 系统编程',
    content: [
      '熟悉 Linux 环境下的文件操作、进程管理、线程模型和 Socket 网络编程',
      '具备 Linux 内核驱动编程经验，能够编写字符设备驱动和进行简单的系统性能调优',
    ],
  },
  {
    title: '前后端开发技术',
    content: [
      '熟悉 Html、CSS、JS 等前端开发技术及主流框架 Vue 2/3 全家桶的使用',
      '了解 Node.js、Java，会使用 Express/Koa 框架实现后端接口编写 ',
    ],
  }, {
    title: '其他技能',
    content: [
      '理解 TCP/IP 网络协议栈，熟悉 HTTP、DNS 等应用层协议',
      '了解 MySQL、MongoDB 数据库及 Git 版本控制工具的基本使用 ',
    ]
  }
]

const work = [
  {
    company: '云胜科技有限公司',
    employmentDate: '2022.11 - 2024.03',
    jobDescription: [
      '1. 负责公司新款智能产品的软件开发及旧产品的功能更新，独立完成固件开发',
      '2. 与硬件工程师合作，编写与外围硬件设备的接口驱动程序，确保软件与硬件的顺畅通信',
      '3. 与产品经理、测试工程师及其他团队沟通合作，保证产品研发工作的质量和进度',
    ]
  },
  // {
  //   company: '南京势胜网络科技有限公司',
  //   employmentDate: '2020.07 - 2022.10',
  //   jobDescription: [
  //     '1. 负责多个 Web 应用的前端开发，使用 Vue、Uniapp 框架进行组件化开发，确保代码的可维护性和性能优化',
  //     '2. 与 UI 设计师合作实现用户界面的交互逻辑，提升用户体验',
  //     '3. 对网站及 app 进行性能分析，通过代码优化和缓存策略提升页面加载速度和响应性能',
  //     '4. 与后端、测试、产品经理沟通，确保前后端接口的对接和项目按时交付',
  //   ]
  // },
  // {
  //   company: '泰达惠集团',
  //   employmentDate: '2020.06 - 2020.12',
  //   jobDescription: [
  //     '1. BSCI、Sedex 验厂辅导，ecoVadis 碳中和问卷的编写',
  //     '2. 开发提升社会责任验厂文件修订效率的应用',
  //   ]
  // },
]

const project = [

  {
    title: '安防摄像机',
    description: [
      '基于国科微 gk7205v200 开发，支持接入多路视频流，并能对每路视频流进行解码后交由视觉算法进行分析,如检测移动物体、人脸识别等，可通过 Web 端界面配置视频源、报警规则等',
    ],
    responsibility: [
      '1. 负责摄像机与平台的通讯协议对接',
      '2. 应用功能开发的二次开发',
      '3. 负责搭建和开发FRP内网穿透服务，实现从外网访问内网的Wb服务',
    ],
  },
  {
    title: '人脸识别门禁系统',
    description: [
      '基于全志 H3 开发，⼈脸识别门禁系统通过配置、移植系统内核，修改及移植液晶、⾳频、摄像头等设备驱动，⾃定义设计编写触摸、按键、蜂鸣器、电⼦阀门等硬件驱动。加载⼈脸识别门禁系统程序，完成摄像头图像采集，调⽤⼈脸数据库进⾏校验，通过核实⾝份后进⾏闸门控制',
    ],
    responsibility: [
      '1.配置和管理所需的硬件设备，确保其与人脸识别软件和门禁系统兼容',
      '2.集成摄像头、门禁控制器等外设，实现人脸识别与门禁控制的无缝对接',
      '3.编写和维护相关软件文档，包括开发指南、用户手册等',
    ],
  },
  // {
  //   title: 'U号租平台、商户管理系统及移动端app',
  //   description: [
  //     '本项目是基于 Vue3 、uniapp 框架开发的综合应用项目，主要为用户提供各类游戏租号服务。官网包含登录注册、搜索、商品详情、买卖家及客服中心等模块，商户系统包含开单、订单、商品、合租、销售报表等管理模块',
  //   ],
  //   technology: 'Vue3全家桶 + Element-ui/vant + ECharts + uniapp ',
  //   responsibility: [
  //     '1. 代码逻辑梳理、封装公共组件、二次封装通用功能组件',
  //     '2. 完成登录、订单、商品、支付模块的页面渲染及功能开发',
  //     '3. 实现图片放大镜和懒加载处理、商品排序、微信扫码支付等功能',
  //     '4. 实现登录校验及无感登录、取消重复http请求等功能',
  //     '5. 完成商户后台数据可视化',
  //   ],
  // },

  // {
  //   title: '验厂管理系统',
  //   description: [
  //     '本项目是基于 Vue3 + Electron 框架开发的简单跨端应用，包含：工资系统、模板替换两个大模块。兼容 Windows 和 Mac OS。极大提升了员工验厂效率。工资系统通过输入工厂人员信息，生成符合要求的花名册以及对应员工的考勤工资。模板替换通过预先在文件设定好的模板内容，根据导入的替换规则进行多文件内容批量替换导出',
  //   ],
  //   technology: ' Vue3全家桶 + Electron + NodeJS + Koa + docxtemplater + SheetJS + MySQL + xlsx ',
  //   responsibility: [
  //     '1. 从 0 到 1 独立完成项目技术选型及功能开发',
  //     '2. 完成员工信息、节假日、请假、考勤及工资管理模块功能开发',
  //     '3. 使用 NodeJs 编写后端接口接收信息并将处理后的文件返回',
  //     '4. 封装操作数据库的函数',
  //     '5. 实现模板内容的导入以及批量替换内容的 word、excel 文件格式的导出',
  //     '6. 完成应用内对导入规则的 CRUD 操作',
  //   ],
  // },

  // {
  //   title: 'U号租移动端',
  //   description: [
  //     '本项目是一个基于 Uniapp 框架开发的移动端应用项目，兼容 iOS 和 Android 平台，主要包含首页、租号大厅、闪租、收藏、个人中心五大模块对应 TabBar 的 5 个入口',
  //   ],
  //   technology: 'Vue3全家桶 + vant + uniapp ',
  //   responsibility: [
  //     '1. 优化首屏启动性能',
  //     '2. 配合后端、测试进行接口联调',
  //     '3. 完成商品、订单、收藏页的页面渲染及功能开发',
  //     '4. 项目的日常维护及 bug 修复',
  //   ],
  // },
]

const introduction = [
  '- 本人热于技术学习，勇于挑战难度，对工作有饱满的热情',
  '- 掌握两个岗位技能，前端和嵌入式开发，都有过开发经验，本人更偏向嵌入式方向发展下去',
  '- 接受过粤嵌的嵌入式开发课程培训，系统地学习了嵌入式系统的设计与开发',
  '- 持有英语 4 级证书，具备良好的英文文档阅读能力',
]

const commonStore = useCommonStore();
commonStore.resumeStatus = 1;

onBeforeUnmount(() => {
  commonStore.resumeStatus = 0
})

</script>

<style lang="scss">
.common-layout {
  @include flexRow();
  //width: 1000px;
  //height: 100%;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-descriptions__title {
    font-size: 22px;
    padding-bottom: 5px;

  }

  .text {
    font-size: 14px;
  }

  .item {
    display: flex;
    margin-bottom: 18px;

    span {
      display: flex;
      align-items: center;
    }
  }

  .box-card {
    width: 100%;
  }
}

#userInfo {
  position: relative;
  display: flex;

  .el-descriptions {
    flex: 1;

  }

  .el-image {
    position: absolute;
    right: 5px;
  }
}

#skill {
  i {
    display: flex;
    align-items: center;
    width: 45px;
    flex-shrink: 0;
  }

  .skill-title {
    font: 16px bold;
    margin-bottom: 10px;
  }

  .skill-description {
    font-size: 14px;
    padding-left: 20px;
    padding-bottom: 10px;
  }
}

#work {
  .project-item {
    margin-bottom: 40px;
  }

  .job-title {
    font: 18px bold;
  }

  .job-employment-date {
    font-size: 15px;
    color: gray
  }

  .job-item {
    font-size: 14px;
    margin-left: 10px;
    padding-bottom: 10px;
  }

  .job-description-item {
    //margin-left: 0px;
  }
}

#project {

  i {
    flex-shrink: 0;
    font: 14px sans-serif;
    padding-right: 3px;
  }

  .project-item {
    .project-text-item {
      font-size: 14px;
      padding-bottom: 10px;
    }

    .project-title {
      font: 18px bold
    }
  }


}

#introduction {
  .introduction-text-item {
    font-size: 14px;
  }
}

.normal-item {
  font-size: 14px;
  padding-left: 20px;
  padding-bottom: 10px;
}

</style>