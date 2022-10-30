import { commonSetting } from "@/settings";
import axios from "axios";
import Cookies from "js-cookie";
import JSEncrypt from "jsencrypt";

export default class BaseService {
    _url(url: string): string {
        return commonSetting.baseUrl + url;
    }
    _post<T>(url: string, data?: any, config?: any): Promise<T> {
        return axios
            .post(this._url(url), data, { ...config })
            .then(res => res?.data || res);
    }
    _get<T>(url: string, config?: any): Promise<T> {
        return axios
            .get(this._url(url), { ...config })
            .then(res => res.data || res);
    }
    _put<T>(url: string, data?: any, config?: any): Promise<T> {
        return axios
            .put(this._url(url), data, { ...config })
            .then(res => res.data || res);
    }
    _delete<T>(url: string, config?: any): Promise<T> {
        return axios
            .delete(this._url(url), { ...config })
            .then(res => res.data || res);
    }
    getEncryptPassword(password: string): string {
        const publicKey = Cookies.get("public-key");
        if (publicKey === "none" || !publicKey) {
            return password;
        }
        const encryptor = new JSEncrypt(); // 新建JSEncrypt对象
        encryptor.setPublicKey(publicKey); // 设置公钥
        return encryptor.encrypt(password) as string;
    }
}
