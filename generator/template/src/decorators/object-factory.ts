export class ObjectFactory {
    public static maps: Map<any, any> = new Map<any, any>();

    /**
     * 获取指定key对应的对象
     * @param key 对象唯一标识
     */
    public static get(key: any): any {
        return this.maps.get(key);
    }

    /**
     * 设置指定对象
     * @param key 对象唯一标识
     * @param value
     */
    public static set(key: any, value: any) {
        this.maps.set(key, value);
    }

    /**
     * 是否存在指定key的对象
     * @param key 
     */
    public static has(key: any): boolean {
       return this.maps.has(key);
    }


    /**
     * 根据类型创建对象
     * @param serviceType 对象类型
     * @param params 构造参数
     */
    public static create(
        serviceType: FunctionConstructor,
        ...params: Array<any>
    ) {
        const result = new serviceType(...params);
        this.maps.set(serviceType, result);
        return result;
    }
}
