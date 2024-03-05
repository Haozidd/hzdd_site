<template>
  <div id="topBar" ref="topBar">

    <!--左侧区域-->
    <div class="left">
      <img src="@/assets/svg/hzdd_site.svg" @click="jumpTool" alt="">
      <p @click="jumpDefault">Hzdd</p>

      <Component
          v-for="(item,index) in combinedItems"
          :key="index"
          :is="item.type==='link'?'a':'divider'"
          :class="item.type==='divider'?'colDivider':''"
          :style="item.type==='divider'?colDividerStyle:''"
          :href="item.type==='link'?item.href:''"
          target="_self"
      >
        <template v-if="item.type==='link'">
          {{ item.title }}
        </template>
      </Component>


    </div>

    <!--中间区域-->
    <div class="center">
      <div id="input-wrapper">
        <input type="text" placeholder="Search" ref="searchElement" @keypress.enter=searchContents autofocus>
        <div class="input-button">
          <img src="@/assets/svg/search.svg" alt="img" @mousedown=searchContents>
        </div>
        <button
            class="drop-down-button"
            @mouseenter="isShowDropDownButton(1)"
            @mouseleave="isShowDropDownButton(0)"
        >
          {{ buttonText }}
        </button>
        <div
            class="drop-down-frame"
            ref="dropDownFrame"
            id="dropDown"
            @mouseenter="isShowDropDownButton(1)"
            @mouseleave="isShowDropDownButton(0)"
        >
          <div
              class="drop-down-item"
              v-for="(engine,index) in navStore.$state.searchEngineList"
              :key="index"
              @click="clickDropDownItem($event,index)"
          >
            {{ engine.title }}
          </div>
        </div>

      </div>
    </div>

    <!--右侧区域-->
    <div class="right">
      <Component
          v-for="(item,index) in combinedItems2"
          :key="index"
          :is="item.type==='link'?'router-link':'divider'"
          :class="item.type==='divider'?'colDivider':''"
          :style="item.type==='divider'?colDividerStyle:''"
          :to="item.href"
      >
        <template v-if="item.type==='link'">
          {{ item.title }}
        </template>
      </Component>

    </div>


  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {
  jumpDefault,
  jumpTool
} from "@/utils/dealRoutingJump";
import {useNavStore} from "@/stores/store";
import {combinedItems, colDividerStyle} from "@/components/TopBar/Left";
import {combinedItems2} from "@/components/TopBar/Right";
import {
  activeShortcut,
  isShowDropDownButton,
  clickDropDownItem,
  searchContents,
  buttonText
} from "@/components/TopBar/Center";

//获取仓库
const navStore = useNavStore()

//获取节点
const searchElement = ref<HTMLInputElement>()
const dropDownFrame = ref<HTMLDivElement>()

//激活快捷键
activeShortcut()


//点击引擎项时防止输入框关闭
document.addEventListener('mousedown', function (e: MouseEvent) {
  const eventTarget = e.target as Element
  if (eventTarget.className.includes('drop-down')) {
    e.preventDefault()
  }
})

onMounted(() => {
  //储存DOM节点
  const HTMLElementObj = {
    searchElement,
    dropDownFrame
  }
  navStore.storeHTMLElementObj(HTMLElementObj)
})

</script>

<style lang="scss" scoped>
#topBar {
  position: fixed;
  top: 0;
  @include defineWidthHeight(100%, 65px);

  @include flexRow();
  justify-content: space-between;
  border: .2px solid rgba(128, 128, 128, 0.47);
  background: rgba(255, 255, 255, 0.5);

  box-shadow: inset 0 4px 10px rgba(168, 167, 167, 0.4);
  z-index: 200;
  transition: .2s;
  font-size: 20px;
}

.left {
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
  }

  a {
    letter-spacing: 1px;
    text-decoration: none;
    transition: .3s;

    &:hover {
      color: rgba(0, 136, 255, 0.9);
      transform: scale(1.2);
    }


  }

  img {
    @include defineWidthHeight(70px, 70px);
    cursor: pointer;
    padding: 0 20px;
  }
}

.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  @include flexRow();
  align-items: center;

  z-index: 10;

  #input-wrapper {
    position: relative;
    border-radius: 50%;
    background: radial-gradient(
            circle at 75% 30%,
            rgb(239, 135, 182) 6%,
            skyblue 50%,
            plum 100%
    );
    box-shadow: inset 0 0 40px #fff,
    inset 2px -5px 10px #eaf5fc;
    animation: staticStatus 5s ease-in-out infinite;


    input {
      position: relative;
      box-sizing: border-box;
      pointer-events: auto;
      width: 60px;
      height: 60px;
      outline: none;
      cursor: text;
      border-radius: 50%;
      border: 1px solid rgb(229, 226, 226);
      background: transparent;
      padding-left: 20px;
      padding-right: 40px;
      font-size: 18px;

      transition: .2s;
      z-index: 1;

      &:hover {
        width: 300px;
        height: 40px;
        border-radius: 20px;
        animation: 0;
        background: white;

        &::placeholder {
          transition: .2s;
          color: rgba(128, 128, 128, 0.6);
        }
      }

      &::placeholder {
        transition: .2s;
        color: rgba(128, 128, 128, 0);
      }

      &:focus {
        width: 300px;
        height: 40px;
        border-radius: 20px;
        animation: 0;
        background: white;
      }


    }


    .input-button {
      position: absolute;
      top: 0;
      right: 0;
      width: 15%;
      height: 100%;
      border-radius: 20px;
      opacity: 0;
      @include flexRow();
      align-items: center;
      z-index: 1;

      img {
        @include defineWidthHeight(50%, 50%);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

      }
    }

    input:hover + .input-button {
      //pointer-events: none;
      cursor: pointer;
      opacity: 1;
    }

    input:focus + .input-button {
      pointer-events: auto;
      cursor: pointer;
      opacity: 1;
      animation: search 4s linear infinite;
    }

    .drop-down-button {
      position: absolute;
      height: 60px;
      width: 60px;
      left: 0;
      font-size: 16px;

      opacity: 0;
      border-radius: 50%;
      border: 1px solid rgba(128, 128, 128, 0.18);
      background: #e2e2fe;
      z-index: -1;
      transition: 0.2s;


      &:hover {
        background: #b5b5fd;
      }

      &:active {
        background: #efeffe;
      }
    }


    input:hover ~ .drop-down-button {
      height: 40px;
      width: 70px;
      border-radius: 20px;
      opacity: 0;
    }

    input:focus ~ .drop-down-button {
      height: 40px;
      width: 70px;
      border-radius: 20px;
      opacity: 1;
      display: inline-block;
      cursor: pointer;
      left: -80px;
      z-index: 10;
    }

    input:focus ~ .drop-down-frame {
      opacity: 1;
      left: -80px;
    }

    .drop-down-frame {
      opacity: 0;
      box-sizing: border-box;
      text-align: center;
      position: absolute;
      width: 70px;
      height: 0;
      top: 50%;
      left: 0;
      border-radius: 10px;
      border: 1px solid rgba(128, 128, 128, 0.18);
      background: #e2e2fe;

      z-index: 0;
      transition: .2s;
      overflow: hidden;

      .drop-down-item {
        font-size: 16px;
        white-space: nowrap;
        width: 100%;

        box-sizing: border-box;
        cursor: pointer;
        line-height: 30px;
        height: 30px;
        border-top: 1px rgba(128, 128, 128, 0.18) solid;
        transition: .1s;

        &:hover {
          background: #aeaeff;
        }
      }
    }
  }

  @keyframes search {
    25% {
      transform: translate(3px, 3px);
    }
    50% {
      transform: translate(-4px, -4px);
    }
    75% {
      transform: translate(4px, -4px);
    }
    100% {
      transform: translate(0px, 0px);
    }

  }
  @keyframes staticStatus {
    50% {
      box-shadow: inset 0 0 20px #fff,
      inset -10px 0 10px #eaf5fc,
      inset -40px -10px 10px #eacde6,
      inset -0px 20px 10px #f9f6de,
      inset 0px -20px 20px #f9f6de;
    }
  }
  @keyframes hoverStatus {
    to {
      width: 200px;
      height: 40px;
      border-radius: 20px;
    }
  }

}

.right {
  display: flex;
  align-items: center;

  margin-right: 20px;

  a {
    transition: .2s;

    &:hover {
      color: rgba(215, 83, 255, .7);
      transform: scale(1.1);
    }

  }

  .forbidHover {
    &:hover {
      transform: scale(1);
      color: black;
    }

    outline: none;

    cursor: default;
  }

}


p {
  cursor: pointer;
  font-size: 20px;

}


</style>
<style lang="scss">
.el-message {
  margin-top: 75px;
}

</style>