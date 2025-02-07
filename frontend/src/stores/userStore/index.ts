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