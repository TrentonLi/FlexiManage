import type {MenuOption} from "naive-ui";

export const menuList:MenuOption[] = [
    {
        label: '首页',
        key: '/home',
        //icon: renderIcon(BookIcon),
    },
    {
        label: '菜单1',
        key: '/menuOne',
        children: [
            {
                label: '子菜单',
                key: '/menuOne'
            }
        ]
    }
]