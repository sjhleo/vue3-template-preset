import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import * as antIcons from "@ant-design/icons-vue";
import "ant-design-vue/dist/antd.variable.min.css";
import "nprogress/nprogress.css";
import { routerSetting } from "./router/router-setting";
import "./services/interceptors";

const app = createApp(App);
// 注册所有icon 以便可以动态使用icon
Object.keys(antIcons).forEach(key => {
    app.component(key, (antIcons as any)[key]);
});
routerSetting();
app.use(Antd).use(createPinia()).use(router).mount("#app");
