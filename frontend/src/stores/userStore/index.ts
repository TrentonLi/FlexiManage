/**
 * @Author: TrentonLi
 * @Date: 2025/2/07
 * @LastEditors: TrentonLi
 * @Description: 路由配置
 */
import {defineStore} from "pinia";
interface userInfo {
    name:string,
    count:number,
    token:string
}
export const useUserStore = defineStore(
    'user',
    {
        state: ():userInfo => {
            return {
                name:'admin',
                token:'adminToken',
                count: 0
            }
        },
        getters: {
            getUserStore(state) {
                return state
            }
        },
        actions: {
            setCount(count: number) {
                this.count = count;
            }
        }
    }
)