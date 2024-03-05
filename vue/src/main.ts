import '@/assets/css/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import setupLocatorUI from "@locator/runtime";
import Divider from '@/components/utils/Divider/index.vue'
import Loading from '@/components/utils/LoadingEffect/index.vue'
import mitt from "mitt";
import 'element-plus/dist/index.css'
import router from "@/router"
import pinia from "@/stores";
import directive from "@/directive";
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const EventBus= mitt()

declare module 'vue'{
    interface ComponentCustomProperties{
        EventBus: typeof EventBus
    }
}

const app = createApp(App)

app.config.globalProperties.EventBus = EventBus

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('Divider',Divider)
    .use(pinia)
    .use(router)
    .use(VueVirtualScroller)
    .component('HzddLoading',Loading)
    .mount('#app')
directive(app)

