import router from "@/router";
import { message } from "ant-design-vue";
import axios from "axios";
import Cookies from "js-cookie";

// Axios请求拦截器，随着业务的复杂，Axios层的使用将会越来越复杂，写个精简版的就行了。
axios.interceptors.request.use(
    (config: any) => {
        const token = Cookies.get("access_token");
        if (token && config.url && config.url.indexOf("unity") >= 0) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    (error: any) => {
        console.error(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    res => {
        return res;
    },
    e => {
        // Do something with response error
        if (e.response && e.response.data) {
            const data = e.response.data;
            if (data.error === "invalid_grant") {
                message.error(data.error_description);
            } else if (
                data.error === "invalid_token" ||
                e.response.status === 401
            ) {
                Cookies.remove("username");
                Cookies.remove("access_token");
                router.push({ name: "login" });
                return;
            }
        }
        return Promise.reject(e);
    }
);
