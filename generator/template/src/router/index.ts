import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import MainWarpper from "../layout/main-wrapper/index.vue";

export const appRouter: Array<RouteRecordRaw> = [
    {
        path: "/test",
        name: "test",
        meta: {
            icon: "user-outlined",
            title: "示例页面"
        },
        component: () => import("../views/home/index.vue")
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     title: "about",
    //     meta: {
    //         icon: "pie-chart-outlined"
    //     },
    //     component: () => import("../views/AboutView.vue")
    // },
    // {
    //     path: "/about2",
    //     name: "about2",
    //     title: "about2",
    //     meta: {
    //         icon: "pie-chart-outlined"
    //     },
    //     component: () => import("../layout/blank/index.vue"),
    //     children: [
    //         {
    //             path: "/about2/test",
    //             name: "test",
    //             title: "test",
    //             meta: {
    //                 icon: "pie-chart-outlined"
    //             },
    //             component: () => import("../layout/blank/index.vue"),
    //             children: [
    //                 {
    //                     path: "/about2/test/2",
    //                     name: "test2",
    //                     title: "test2",
    //                     meta: {
    //                         icon: "pie-chart-outlined"
    //                     },
    //                     component: () => import("../views/AboutView.vue")
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     path: "/single",
    //     name: "single",
    //     title: "single",
    //     meta: {
    //         icon: "pie-chart-outlined",
    //         isSingle: true
    //     },
    //     redirect: "/single/test3",
    //     children: [
    //         {
    //             path: "/single/test3",
    //             name: "test3",
    //             title: "test3",
    //             meta: {
    //                 icon: "pie-chart-outlined"
    //             },
    //             component: () => import("../views/AboutView.vue")
    //         },
    //         {
    //             path: "/single/test4",
    //             name: "test4",
    //             title: "test4",
    //             meta: {
    //                 icon: "pie-chart-outlined"
    //             },
    //             component: () => import("../views/AboutView.vue")
    //         }
    //     ]
    // }
];
const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/index.vue")
    },
    {
        path: "/",
        name: "home",
        component: MainWarpper,
        meta: {
            title: "首页"
        },
        redirect: "/test",
        children: appRouter
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
