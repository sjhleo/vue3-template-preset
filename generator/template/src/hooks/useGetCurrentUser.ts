import { useUserStore } from "@/store/modules/user";
import loginService from "@/views/login/service";
import { message } from "ant-design-vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

export function useGetCurrentUser() {
    const user = useUserStore();
    const router = useRouter();
    const getCurrentUser = async () => {
        if (!user.username) {
            const data = await loginService.getCurrentUser();
            try {
                if (data.hasError) {
                    message.error("获得用户信息时,后台出现错误");
                    user.clear();
                    router.push({
                        name: "login"
                    });
                    return;
                }
                user.setUserInfo(data.result);
            } catch (error) {
                message.error("获取当前用户的信息时,发生请求错误");
            }
        }
    };
    onMounted(() => {
        getCurrentUser();
    });
    return { getCurrentUser };
}
