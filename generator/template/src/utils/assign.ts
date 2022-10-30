/**
 * pinia中无法使用this = model 以及Object.assign() 来将obj2的值全部赋值到obj1上
 * @param obj1
 * @param obj2
 */
export function assign(obj1: any, obj2: any): void {
    for (const key in obj2) {
        obj1[key] = obj2[key];
    }
}
