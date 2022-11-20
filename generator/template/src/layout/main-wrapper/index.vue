<template>
    <div class="main-wrapper">
        <a-layout>
            <a-layout-sider
                v-model:collapsed="collapsed"
                breakpoint="lg"
                collapsible
                :trigger="null"
            >
                <div class="logo">
                    <div class="icon"></div>
                    <div class="title">后台管理</div>
                </div>
                <a-menu
                    v-model:selectedKeys="selectedKeys"
                    v-model:openKeys="openKeys"
                    mode="inline"
                    theme="dark"
                    @click="onClickMenu"
                >
                    <template v-for="item in appRouter" :key="item.name">
                        <template v-if="!item.children || item.meta?.isSingle">
                            <a-menu-item :key="item.name">
                                <template #icon>
                                    <component
                                        :is="item.meta?.icon"
                                        v-if="item.meta?.icon"
                                    />
                                </template>
                                {{ item.meta?.title }}
                            </a-menu-item>
                        </template>
                        <template v-else>
                            <sub-menu :key="item.name" :menu-info="item" />
                        </template>
                    </template>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header>
                    <menu-unfold-outlined
                        v-if="collapsed"
                        class="trigger"
                        @click="() => (collapsed = !collapsed)"
                    />
                    <menu-fold-outlined
                        v-else
                        class="trigger"
                        @click="() => (collapsed = !collapsed)"
                    />
                    <a-breadcrumb>
                        <template
                            v-for="routeItem in breadcrumbMenus"
                            :key="routeItem?.name"
                        >
                            <a-breadcrumb-item>
                                <span>{{ routeItem?.meta?.title }}</span>
                            </a-breadcrumb-item>
                        </template>
                    </a-breadcrumb>
                    <div class="settings">
                        <div>{{ username }}</div>
                        <a-dropdown placement="bottomRight">
                            <a-avatar style="background-color: #87d068">
                                <template #icon><user-outlined /></template>
                            </a-avatar>
                            <template #overlay>
                                <a-menu @click="onOprateMenu">
                                    <a-menu-item key="logout">
                                        <a href="javascript:;">注销</a>
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                        <theme-config></theme-config>
                    </div>
                </a-layout-header>
                <a-layout-content>
                    <router-view></router-view>
                </a-layout-content>
                <!-- <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer> -->
            </a-layout>
        </a-layout>
    </div>
</template>

<script lang="ts" setup>
import "./index.scss";
import { computed, onMounted, ref } from "vue";
import { appRouter } from "../../router";
import SubMenu from "./components/sub-menu/index.vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
import { useGetCurrentUser } from "@/hooks";

const collapsed = ref<boolean>(false);
const user = useUserStore();
const route = useRoute();
const router = useRouter();
const username = computed(() => user.username);
useGetCurrentUser();
const breadcrumbMenus = computed(() => {
    let path = route.matched;
    let end = path.findIndex(p => p.meta.isSingle);
    end = end === -1 ? path.length - 1 : end;
    return path.slice(0, end + 1);
});
const selectedKeys = ref<string[]>([appRouter[0].name as string]);
const openKeys = ref<string[]>([appRouter[0].name as string]);
const onClickMenu = (menu: {
    item: any;
    key: string;
    keyPath: Array<string>;
}) => {
    router.push({ name: menu.key });
};
const onOprateMenu = (menu: {
    item: any;
    key: string;
    keyPath: Array<string>;
}) => {
    switch (menu.key) {
        case "logout":
            user.clear();
            router.push({ name: "login" });
            break;
    }
};
onMounted(() => {
    let path = route.matched;
    selectedKeys.value = path.map(v => v.name as string);
    openKeys.value = path.map(v => v.name as string);
});
</script>
