import NProgress from "nprogress";
import router from "@/router";

export function routerSetting() {
    router.beforeEach((to, from, next) => {
        // 开启进度条
        NProgress.start();
        next();
    });
    router.afterEach(() => {
        // 关闭进度条
        NProgress.done();
    });
}
