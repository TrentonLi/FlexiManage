import { createRouter, createWebHistory } from "vue-router";
import type {RouteRecordRaw} from "vue-router"
import Login from "../SignIn/login.vue";
import Test from "../components/Test.vue";
import SignIn from "../SignIn/signIn.vue";
import ForgotPass from "../SignIn/ForgotPass.vue";

// 1. 配置路由
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/", // 默认路由 home页面
        redirect:"/login",
    },
    {
        path: "/home", // 默认路由 home页面
        name:'home',
        component: Test,
    },
    {
        path: "/login", // 默认路由 home页面
        name:'login',
        component: Login,
    },
    {
        path: "/signUp", // 默认路由 home页面
        name:'signUp',
        component: SignIn,
    },
{
        path: "/forgotPass", // 默认路由 home页面
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