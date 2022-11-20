<template>
    <a-form
        :model="formState"
        name="login"
        class="login-form"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
    >
        <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
        >
            <a-input v-model:value="formState.username">
                <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
        >
            <a-input-password v-model:value="formState.password">
                <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                </template>
            </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 6, span: 18 }">
            <a-button
                :disabled="disabled"
                type="primary"
                html-type="submit"
                class="login-form-button"
            >
                登录
            </a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user";
import { computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import loginService from "./service";
import "./index.scss";
interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
const user = useUserStore();
const formState = reactive<FormState>({
    username: "",
    password: "",
    remember: true
});
const router = useRouter();
const onFinish = async (values: any) => {
    const result = await loginService.login(values);
    router.push({ name: "home" });
    user.setUserInfo(result);
};
const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
};
const disabled = computed(() => {
    return !(formState.username && formState.password);
});
onMounted(() => {
    loginService.getPublicKey();
});
</script>
