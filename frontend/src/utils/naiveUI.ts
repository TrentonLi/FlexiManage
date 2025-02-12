/**
 * @Author: TrentonLi
 * @Date: 2025/0207
 * @LastEditors: TrentonLi
 * @Description: NaiveUI组件库注册
 */
import {
    create,
    NButton,
    NSpace,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutFooter,
    NLayoutContent,
    NForm,
    NFormItem,
    NInput,
    useMessage,
    NMessageProvider,
    NMenu
} from "naive-ui";
export const naiveUI = create({
    components:[
        NButton,
        NSpace,
        NLayout,
        NLayoutSider,
        NLayoutHeader,
        NLayoutFooter,
        NLayoutContent,
        NForm,
        NFormItem,
        NInput,
        useMessage,
        NMessageProvider,
        NMenu
    ]
})