/**
 * @Author: TrentonLi
 * @Date: 2025/2/07
 * @LastEditors: TrentonLi
 * @Description: 路由配置
 */
import {defineStore} from "pinia";
interface userInfo {
    name:String,
    count?:Number,
    token:String
}
export const useUserStore = defineStore(
    'user',
    {
        state: ():userInfo => {
            return {
                name:'',
                token:'',
                count: 0
            }
        },
        getters: {
            getUserStore(state) {
                return state
            }
        },
        actions: {
            setCount(count: Number) {
                this.count = count;
            },
            setInfo(info:userInfo){
                this.name = info.name;
                this.token = info.token;
            }
        }
    }
)