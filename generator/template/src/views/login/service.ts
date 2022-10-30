import { ObjectFactory } from "@/decorators/object-factory";
import serviceHandler from "@/decorators/service-handle";
import BaseService from "@/services/base-service";
import { userState } from "@/store/modules/user";
import Cookies from "js-cookie";

export class LoginService extends BaseService {
    login(data: { password: string; username: string }): Promise<userState> {
        const params = {
            client_id: "unity-client",
            client_secret: "unity",
            grant_type: "password",
            password: this.getEncryptPassword(data.password),
            username: data.username
        };
        return this._post("/oauth/extras/token", params);
    }
    @serviceHandler("query", { title: "获取加密需要的公钥" })
    public async getPublicKey(): Promise<any> {
        const or = await this._get<any>("/oauth/extras/public-key");
        Cookies.set("public-key", or.result || "none");
        return or;
    }
    @serviceHandler("query", { showErrorMsg: true, showTip: true })
    getCurrentUser() {
        return this._get<any>("/unity/user/composite");
    }
}
const loginService = ObjectFactory.get(LoginService);
export default loginService;

