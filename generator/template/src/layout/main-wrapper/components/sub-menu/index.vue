<template>
    <a-sub-menu :key="menuInfo.name">
        <template #icon>
            <component :is="menuInfo.meta?.icon" v-if="menuInfo.meta?.icon"
        /></template>
        <template #title>{{ menuInfo.title }}</template>
        <template v-for="item in menuInfo.children" :key="item.name">
            <template v-if="!item.children || item.meta?.isSingle">
                <a-menu-item :key="item.name">
                    <template #icon>
                        <component :is="item.meta.icon" v-if="item.meta.icon" />
                    </template>
                    {{ item.title }}
                </a-menu-item>
            </template>
            <template v-else>
                <sub-menu :menu-info="item" :key="item.key" />
            </template>
        </template>
    </a-sub-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "SubMenu",
    props: {
        menuInfo: {
            type: Object,
            default: () => ({})
        }
    },
    components: {}
});
</script>
