import { assign } from "@/utils";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

export type userState = {
    access_token: string;
    user: any;
};
export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        username: ""
    }),
    getters: {},
    actions: {
        setUserInfo(user: userState): void {
            this.$reset();
            assign(this, user.user);
            Cookies.set("username", this.username);
            if (user.access_token) {
                Cookies.set("access_token", user.access_token);
            }
        },
        clear() {
            Cookies.remove("username");
            Cookies.remove("access_token");
            this.$reset();
        }
    }
});
