<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: 35px;">简历</span>
            </div>
          </template>

          <div id="userInfo">

            <el-descriptions :column="4"  title="个人信息" >
              <el-descriptions-item label="姓 名 :">黄皓</el-descriptions-item>

              <el-descriptions-item label="性 别 :">男</el-descriptions-item>
              <el-descriptions-item label="年 龄 :">26</el-descriptions-item>
              <el-descriptions-item label="学 历 :">本科</el-descriptions-item>

              <el-descriptions-item label="电  话 :">17727243857</el-descriptions-item>
              <el-descriptions-item label="求职岗位 :">前端开发</el-descriptions-item>


              <el-descriptions-item label="邮 箱 :">
                <el-tag size="small">285626941@qq.com</el-tag>
              </el-descriptions-item>
            </el-descriptions>
            <el-image style="width: 100px; height: 118px" :src="url" :fit="fits[1]"/>

          </div>

          <el-divider />

          <div id="skill">

            <el-descriptions :column="4" title="专业技能"></el-descriptions>
            <div class="text item" ><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 Html、Css及其预处理器Less/Sass、JavaScript/TypeScript 等基础前端开发技术</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 Vue 2/3 全家桶</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>了解 Node.js, 会使用 Express/Koa 框架, 了解 Socket.io 编程, 能简单实现后端接口编写, 连接数据库获取数据, 网站部署上线等操作</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>了解 Electron 框架, 理解其进程间通信过程, 会使用其常用 API 进行简单的跨平台桌面应用开发</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>熟悉 ES6+ 新特性, 掌握解构赋值、Promise 异步编程、async/await 等技术, 了解 V8 引擎执行 JS 代码过程</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>具备一定的计算机网络基础, 熟悉 HTTP 协议, 理解 DNS 域名系统、TCP 数据传输机制等基本网络知识</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>掌握 Git、Webpack、Vite 等工具</span>
            </div>
            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>掌握 npm/pnpm 包管理器, Linux 常用命令, MySQL/MongoDB 数据库基本操作, 了解 Java 语言基本语法并掌握其常用 API</span>
            </div>

          </div>


          <el-divider />

          <div id="project">


            <el-descriptions :column="4" title="项目经验"></el-descriptions>
            <!--            人力资源管理系统-->
            <div class="project-item">
              <div class="text item" style="height: 40px;">
                <span style="font:19px bold">人力资源管理系统 </span>

              </div>
              <div class="text item"><i style="padding-top: 0">项目描述 : </i>
                <span>主要有发布公告, 部门管理, 员工管理, 考勤管理和薪资管理等功能</span>
              </div>
              <div class="text item"><i style="padding-top: 0">技术选型 : </i>
                <span>Vue3全家桶 + Element Plus + Vite + TS</span>
              </div>
              <div class="text item"><i style="padding-top: 0;">主要内容 : </i>
                <div>
                  <span> 1. 开发登录、招聘管理、员工管理、考勤管理、权限管理模块</span>
                  <span> 2. 完成数据可视化, 数据重构, 登录校验及无感登录, 平台权限控制, 动态路由等基础功能</span>
                  <span> 3. 对可复用公共组件(进度条, loading等)和工具类方法(数据类型判断, 数据校验规则等)进行封装</span>
                  <span> 4. 大文件分片上传及断点续传功能开发</span>
                  <span> 5. 优化可模糊查询的树形控件数据展开耗时, 优化后耗时缩减 90%</span>
                </div>
              </div>
            </div>
            <!--            电商平台-->
            <div class="project-item">
              <div class="text item" style="height: 40px;">
                <span style="font:19px bold">电商平台 </span>

              </div>
              <div class="text item"><i style="padding-top: 0">项目描述 : </i>
                <span>包含登录、注册、搜索、详情页、购物车、订单支付等模块</span>
              </div>
              <div class="text item"><i style="padding-top: 0">技术选型 : </i>
                <span> Vue2全家桶 + Element-ui + Vue-CLI </span>
              </div>
              <div class="text item"><i style="padding-top: 0;">主要内容 : </i>
                <div>
                  <span> 1. 代码逻辑梳理、封装公共组件、二次封装通用功能组件</span>
                  <span> 2. 完成页面模块功能开发</span>
                  <span> 3. 实现图片放大镜和懒加载处理、商品排序、微信扫码支付等功能</span>
                  <span> 4. 实现登录校验及无感登录功能</span>
                </div>
              </div>
            </div>
            <!--            电商后台管理系统-->
            <div class="project-item">
              <div class="text item" style="height: 40px;">
                <span style="font:19px bold">电商后台管理系统 </span>

              </div>
              <div class="text item"><i style="padding-top: 0">项目描述 : </i>
                <span>包含登录退出、用户管理、订单管理、数据统计等模块</span>
              </div>
              <div class="text item"><i style="padding-top: 0">技术选型 : </i>
                <span> Vue2全家桶 + Element-ui + Vue-CLI </span>
              </div>
              <div class="text item"><i style="padding-top: 0;">主要内容 : </i>
                <div>
                  <span> 1. 完成页面模块功能开发</span>
                  <span> 2. 完成数据可视化, 登录校验及无感登录, 取消重复http请求等基础功能</span>
                </div>
              </div>
            </div>

          </div>

          <el-divider />

          <div id="work">

            <el-descriptions :column="4" title="工作经历"></el-descriptions>

            <div class="text item"><i class="iconfont icon-sanjiaoright" ></i>
              <span>无互联网从业经验</span>
            </div>


          </div>

          <el-divider />

          <div id="education">
            <el-descriptions :column="4" title="教育背景"></el-descriptions>
            <div class="text item">
                  <span>惠州学院&nbsp;&nbsp;&nbsp;&nbsp;
                    2016.09-2020.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    统招全日制本科 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    英语四级
                  </span>
            </div>
          </div>







        </el-card>




      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">


const fits = ['fill','contain','cover','none','scale-down']
const url =
    'src/assets/jpg/idPhoto.JPG'

</script>

<style lang="scss">
.common-layout{
  @include flexRow()
}
#userInfo{
  position: relative;
  display: flex;

  .el-descriptions{
    flex: 1;

  }
  .el-image{
    position: absolute;
    right: 5px;
  }
}

#skill{
  i{
    display: flex;
    align-items: center;
    width: 45px;
    flex-shrink: 0;
  }
}
#project{
  i{
    padding-top: 2px;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    font: 14px sans-serif;
    font-family: Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,
    Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    padding-right: 3px;
  }
}



.project-item{
  margin-bottom: 40px;
}
.el-container,.common-layout{
  width: 1200px;
  height: 100%;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-descriptions__title{
    font-size: 20px;
  }

  .text {
    font-size: 14px;
  }
  .item {
    display: flex;
    margin-bottom: 18px;

    span{
      display: flex;
      align-items: center;
    }
  }

  .box-card {
    width: 100%;
  }
}

</style>