import { createRouter, createWebHistory } from "vue-router";
import type {RouteRecordRaw} from "vue-router"
import Login from "@/SignIn/login.vue";
import Test from "@/components/Test.vue";
import SignIn from "@/SignIn/signIn.vue";
import ForgotPass from "@/SignIn/ForgotPass.vue";
import RouterTab from 'vue-router-tab'

console.log(123,RouterTab)

const modules = [ import.meta.glob('@/views/*/*.vue'), import.meta.glob('@/views/*/*/*.vue'), import.meta.glob('@/views/*/*/*/*.vue') ];

const _modules = {
    ...modules[ 0 ],
    ...modules[ 1 ],
    ...modules[ 2 ]
};

const loadView = (path: string) => () => {
    const key = Object.keys(_modules).find(key => {
        return key.includes(path);
    })!;

    return _modules[ key ]();
};

// 1. 配置路由
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/", // 默认路由 home页面
        redirect:"/login",
    },
    {
        path: "/home", // 默认路由 home页面
        name:'home',
        children:[
            {
                path:'/home',
                name:'Home',
                component:Test
            }
        ]
    },
    {
        path: "/menuOne", // 默认路由 home页面
        children:[
            {
                path:'/menuOne',
                name:'MenuOne',
                component:loadView(`FirstMenu/MenuOne`)
            }
        ]
    },
    {
        path: "/login",
        name:'login',
        component: Login,
    },
    {
        path: "/signUp",
        name:'signUp',
        component: SignIn,
    },
{
        path: "/forgotPass",
        name:'forgotPass',
        component: ForgotPass,
    },

];
// 2.返回一个 router 实列，为函数，配置 history 模式
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//router.beforeEach(async (to, from, next) => {
//
//
//});
//
//router.afterEach((to) => {
//    window.scrollTo(0, 0);
//});

// 3.导出路由   去 main.ts 注册 router.ts
export default router