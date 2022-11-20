<template>
    <a-sub-menu :key="menuInfo.name">
        <template #icon>
            <component :is="menuInfo.meta?.icon" v-if="menuInfo.meta?.icon" />
        </template>
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
                <sub-menu :key="item.key" :menu-info="item" />
            </template>
        </template>
    </a-sub-menu>
</template>
<script lang="ts" setup>
defineProps({
    menuInfo: {
        type: Object,
        default: () => ({})
    }
});
</script>
